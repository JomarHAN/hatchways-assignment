class Tasks {
    setStudents = null
    listStudents = null
    setSearchResult = null
    setSearchStudent = null


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
        }
        this.setStudents(newData)
    }

    filterFullname = (listStudents, input, setSearchStudent) => {
        this.setSearchStudent = setSearchStudent
        if (listStudents) {
            const result = listStudents.filter(result => result.fullName.toLowerCase().includes(input))
            this.setSearchStudent(result)
        }
    }

    filterTagName = (listTags, listStudents, input, setSearchStudent) => {
        this.setSearchStudent = setSearchStudent;
        if (listTags) {
            const listResult = listTags.filter(result => result.tagName.toLowerCase().includes(input))

            console.log(listResult)
        }
    }


}

export default Tasks;