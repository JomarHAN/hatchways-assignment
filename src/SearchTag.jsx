import React, { useEffect, useState } from "react";
import "./SearchTag.css";

function SearchTag() {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {}, []);

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
