import React from "react";
import "./Student.css";

function Student({ student }) {
  return (
    <div className="student">
      <div className="student__img">
        <img src={student.pic} alt="" />
      </div>
      <div className="student__content">
        <div className="student__header">
          <h3 className="student__name">
            <strong>{student.firstName}</strong>{" "}
            <strong>{student.lastName}</strong>
          </h3>
          <div className="student__expand"></div>
        </div>
        <div className="student__info">
          <h4>Email: {student.email}</h4>
          <h4>Company: {student.company}</h4>
          <h4>Skill: {student.skill}</h4>
          <h4>Average: {student.averageScore}%</h4>
        </div>
      </div>
    </div>
  );
}

export default Student;
