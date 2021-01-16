import React, { useEffect, useState } from "react";
import "./SearchTag.css";
import Tasks from "./Tasks";

function SearchTag({ listStudents, setSearchTags, setInputTag }) {
  const [input, setInput] = useState();

  const tasks = new Tasks();

  const filterStudent = () => {
    tasks.filterTagName(listStudents, input, setSearchTags);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setInputTag(input);
    filterStudent();
  }, [input]);

  return (
    <div className="searchContent">
      <input
        value={input}
        onChange={handleChange}
        type="text"
        placeholder="Search by tag"
        className="search__input"
      />
    </div>
  );
}

export default SearchTag;
