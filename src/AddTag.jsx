import React, { useState } from "react";
import "./AddTag.css";

function AddTag() {
  const [input, setInput] = useState();
  const [tagName, setTagName] = useState();
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setTagName(input);
      setInput("");
    }
  };
  console.log(tagName);
  return (
    <div className="addTag">
      <div className="addTag__blank"></div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add a tag"
        className="addTag__inputTag"
        onKeyUp={handleEnter}
      />
    </div>
  );
}

export default AddTag;
