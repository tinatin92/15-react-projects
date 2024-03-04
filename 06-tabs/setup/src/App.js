import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';


function App() {
  const[loading, setloading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(2);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs);
    setloading(false)
  }

  useEffect( () => {
    fetchJobs()
  }, [])

  if(loading){
    return <section className='section loading'>
      <h1>Loading...</h1>
    </section>
  }



  const  {title, company, dates, duties} = jobs[value]

  return <section className='section'>
    <div className='title'>
      <h2>experiense</h2>
      <div className='underline'></div>
    </div>
    <div className='jobs-center'>
       <div className='btn-container'>
        {
          jobs.map((job, index) => {
            return <button className={`job-btn ${index === value && 'active-btn'}`} onClick={() => setValue(index)} key={job.id}>{job.company}</button>
          })
        }
       </div>

      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{dates}</p>
        {duties.map((duty, index) => {
          return <div key={index} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'/>
            <p>{duties}</p>
          </div>
        })}
      </article>
    </div>

  </section>
}

export default App
