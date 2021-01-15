import { IconButton } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import React, { useState } from "react";
import "./Student.css";

function Student({ student }) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    if (!click) {
      setClick(true);
    } else {
      setClick(false);
    }
  };

  console.log(student);

  return (
    <div className="student">
      <div className="student__infoAppear">
        <div className="student__img">
          <img src={student.pic} alt="" />
        </div>
        <div className="student__content">
          <div className="student__header">
            <h3 className="student__name">
              <strong>{student.firstName}</strong>{" "}
              <strong>{student.lastName}</strong>
            </h3>
            <div className="student__expand">
              <IconButton onClick={handleClick}>
                {!click ? <Add /> : <Remove />}
              </IconButton>
            </div>
          </div>
          <div className="student__info">
            <h4>Email: {student.email}</h4>
            <h4>Company: {student.company}</h4>
            <h4>Skill: {student.skill}</h4>
            <h4>Average: {student.averageScore}%</h4>
          </div>
        </div>
      </div>
      <div className={`student__hidden ${!click ? "hide" : ""}`}>
        <div className="student__blank"></div>
        <div className="student__tests">
          {student.grades.map((score, index) => (
            <h4>
              Test {index + 1}: {score}%
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Student;
