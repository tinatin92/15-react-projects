import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';



function App() {
  const [questionData, setQuestionData] = useState(data)
  return (
    <section className='section'>
      
      <div className='container'>
      <h3>Questions and Answers about login</h3>
        <div>
        {questionData.map(question => {
          return (
            <SingleQuestion key={question.id} {...question}/>
          )
        })}
        </div>
      </div>

    </section>
  )
}

export default App;
