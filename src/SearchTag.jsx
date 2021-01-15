import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTagsList } from "./features/tagsSlice";
import "./SearchTag.css";
import Tasks from "./Tasks";

function SearchTag({ listStudents, setSearchStudent }) {
  const [input, setInput] = useState();
  const listTags = useSelector(selectTagsList);

  const tasks = new Tasks();

  const filterStudent = () => {
    tasks.filterTagName(listTags, listStudents, input, setSearchStudent);
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
        placeholder="Search by tag"
        className="search__input"
      />
    </div>
  );
}

export default SearchTag;
