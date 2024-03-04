import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));


  function handleSubmit(e) {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors)

    } catch (error) {
      console.log(error);
      setError(true);
    }

  
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
          className={`${error ? 'error' : null}`}
            placeholder="#f15025"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            change color
          </button>
        </form>
      </section>
      <section className="colors">
       {list.map((color, index) => {
        
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
       })}
      </section>
    </>
  );
}

export default App;
