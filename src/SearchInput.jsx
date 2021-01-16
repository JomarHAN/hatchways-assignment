import React, { useEffect, useState } from "react";
import "./SearchInput.css";
import Tasks from "./Tasks";

function SearchInput({ listStudents, setSearchName, setInputName }) {
  const [input, setInput] = useState();

  const tasks = new Tasks();

  const filterStudent = () => {
    tasks.filterFullname(listStudents, input, setSearchName);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    filterStudent();
    setInputName(input);
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
