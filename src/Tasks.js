class Tasks {
    setStudents = null
    listStudents = null
    setSearchResult = null
    setSearchName = null
    setSearchTags = null
    studentName = null
    studentTag = null


    loadData = (setStudents) => {
        this.setStudents = setStudents
        fetch('https://api.hatchways.io/assessment/students')
            .then(res => res.json())
            .then(data => {
                const students = data.students
                this.#setAverage(students)
            })
    }

    #setAverage = (students) => {
        const newData = [...students]

        for (let i = 0; i < newData.length; i++) {
            const eachStudent = newData[i]
            const arrScore = eachStudent.grades
            const newArr = []
            for (let y = 0; y < arrScore.length; y++) {
                newArr.push(parseInt(arrScore[y]))
            }
            const averageScore = (newArr.reduce((a, b) => a + b, 0)) / arrScore?.length
            eachStudent.averageScore = averageScore
            eachStudent.fullName = eachStudent.firstName + " " + eachStudent.lastName
            eachStudent.tags = []
        }
        this.setStudents(newData)
    }

    filterFullname = (listStudents, input, setSearchName) => {
        if (listStudents) {
            const studentName = listStudents.filter(studentName => studentName.fullName.toLowerCase().includes(input))
            setSearchName(studentName)
        }
    }

    filterTagName = (listStudents, input, setSearchTags) => {
        if (!input) {
            setSearchTags([])
        } else {
            let listTags = []
            for (let i = 0; i < listStudents.length; i++) {
                const studentTag = listStudents[i].tags.filter(tag => tag.toLowerCase().includes(input))
                if (studentTag.length !== 0) {
                    listTags.push(listStudents[i])
                }
            }
            setSearchTags(listTags)
        }
    }

    filterFinal = (students, searchName, searchTags, setSearchStudent) => {
        if (searchName.length === 0 && searchTags.length === 0) {
            setSearchStudent(students)
        } else if (searchName.length > 0 && searchTags.length === 0) {
            setSearchStudent(searchName)
        } else if (searchName.length === 0 && searchTags.length > 0) {
            setSearchStudent(searchTags)
        } else if (searchName.length > 0 && searchTags.length > 0) {
            let newList = []
            for (var i = 0; i < searchTags.length; i++) {
                if (searchName.indexOf(searchTags[i]) !== -1) {
                    newList.push(searchTags[i])
                }
            }
            setSearchStudent(newList)
        }
    }
}

export default Tasks;