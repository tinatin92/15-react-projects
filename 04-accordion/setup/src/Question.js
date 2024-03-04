import React, { useState } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [open, setOpen] = useState(false);

  function handleOpenButton() {
    setOpen((prevState) => !prevState);
  }
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleOpenButton}>
        <span>{open ? <AiOutlineMinus/> : <AiOutlinePlus />}</span>
      </button>
      </header>
      
      <p>{open && info}</p>
    </div>
  );
};

export default Question;
