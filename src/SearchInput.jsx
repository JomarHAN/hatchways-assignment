import React, { useEffect, useState } from "react";
import "./SearchInput.css";
import Tasks from "./Tasks";

function SearchInput({ listStudents, setSearchStudent }) {
  const [input, setInput] = useState();

  const tasks = new Tasks();

  const filterStudent = () => {
    tasks.filterFullname(listStudents, input, setSearchStudent);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    filterStudent();
  }, [input]);

  return (
    <div className="searchContent">
      <input
        value={input}
        onChange={handleChange}
        type="text"
        placeholder="Search by name"
        className="search__input"
      />
    </div>
  );
}

export default SearchInput;
