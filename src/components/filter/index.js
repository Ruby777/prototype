import React, { Component } from 'react';
import './filter.scss';



class FilterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
          nationality: nationality,
          gender: gender
       };
   }

 render(){
      return(
          <section className="container joblist">{
              this.state.jobs.map( (job, index) =>
              <div className="item jobContainer" key={index}>
                  <div className="jobName">{job.jobname}</div>
                  <div className="jobType">{job.jobtype}</div>
                  <div className="postDate">{job.postdate}</div>
                  <div className="description">{job.description}</div>
                  <div className="miniContainer">
                        <p>NATIONALITY</p>
                        <div className="nationality">{job.nationality}</div>
                        <p>SALARY</p>
                        <div className="salary">{job.salary}</div>
                        <p>LAST DATE</p>
                        <div className="lastDate">{job.lastdate}</div>
                  </div>
                  <button className="apply">Apply and offer</button>
              </div>
              )
             }
          </section>
        ) 
    }
};

export default FilterComponent;