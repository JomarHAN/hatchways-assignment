import React, { useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./SearchInput";
import Student from "./Student";
import Tasks from "./Tasks";
function App() {
  const [students, setStudents] = useState([]);
  const [searchStudent, setSearchStudent] = useState([]);
  const fetchData = new Tasks();

  const studentsData = () => {
    fetchData.loadData(setStudents);
  };

  useEffect(() => {
    studentsData();
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <SearchInput
          listStudents={students}
          setSearchStudent={setSearchStudent}
        />
        {searchStudent.length === 0
          ? students.map((student) => (
              <>
                <Student key={student.id} student={student} />
                <hr />
              </>
            ))
          : searchStudent.map((student) => (
              <>
                <Student key={student.id} student={student} />
                <hr />
              </>
            ))}
      </div>
    </div>
  );
}

export default App;
