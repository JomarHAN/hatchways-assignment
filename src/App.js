import React, { useEffect, useState } from "react";
import "./App.css";
import Tasks from "./Tasks";
function App() {
  const [students, setStudents] = useState([]);
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
        {students?.map((student) => (
          <>
            <div className="app__student" key={student.id}>
              <div className="app__studentImg">
                <img src={student.pic} alt="" />
              </div>
              <div className="app__studentInfo">
                <h3 className="app__studentName">
                  <strong>{student.firstName}</strong>{" "}
                  <strong>{student.lastName}</strong>
                </h3>
                <div className="app__studentContent">
                  <h4>Email: {student.email}</h4>
                  <h4>Company: {student.company}</h4>
                  <h4>Skill: {student.skill}</h4>
                  <h4>Average: {student.averageScore}%</h4>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
