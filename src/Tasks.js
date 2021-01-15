class Tasks {
    setStudents = null
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
        }
        this.setStudents(newData)

    }
}

export default Tasks;