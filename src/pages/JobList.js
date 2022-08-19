import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';

const JobList = () => {

  let [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    let response = await axios.get('https://localhost:5000/api/jobs', { headers: { 'Content-Type': 'application/json', 'accept': 'application/json'}});

    if ( response.status === 200 ) {
      setJobs(response.data)
    }
  }

  useEffect(() => {
    getJobs()
  })

  return (
    <section className="container my-5">
        <div className="row">
          <div className="list-group list-group-light">

          { jobs.map(job => (
            <Link to={`/job/details/${job.id}`} state={{job: job}} className="list-group-item list-group-item-action px-3 border-0 my-2 active" aria-current="true" key={`${job.id}`}>
              <div className="row">
                <div className="col-10">
                  <h3>
                    { job.jobTitle }
                  </h3>
                  <span>
                    { job.descraption }
                  </span>
                </div>
                <div className="col-2 jobs__list-date">
                  { job.companyName }
                </div>
              </div>
          </Link>
          )) }
          
          </div>
        </div>
    </section>
  )
}

export default JobList