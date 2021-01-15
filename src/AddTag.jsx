import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddTag.css";
import { setTagsList } from "./features/tagsSlice";

function AddTag({ tags, setTags, fullName }) {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, input]);
      dispatch(setTagsList({ tagName: input, fullName: fullName }));
      setInput("");
    }
  };

  return (
    <div className="addTag">
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
