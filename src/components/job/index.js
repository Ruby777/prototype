import React, { Component } from 'react';
import './job.scss';

const jobs = [{
    jobname: "Account Manager" ,
    jobtype: "Management",
    postdate: "7/10/2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    nationality: "UAE",
    salary: "AED 7,000",
    lastdate: "21/10/2018"
}, {
    jobname: "Project Manager" ,
    jobtype: "Management",
    postdate: "7/10/2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    nationality: "UAE",
    salary: "AED 7,000",
    lastdate: "21/10/2018"
}, {
    jobname: "UX/UI" ,
    jobtype: "Development",
    postdate: "7/10/2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    nationality: "UAE",
    salary: "AED 7,000",
    lastdate: "21/10/2018"
}, {
    jobname: "React Developer" ,
    jobtype: "Development",
    postdate: "7/10/2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    nationality: "UAE",
    salary: "AED 7,000",
    lastdate: "21/10/2018"
}];

class JobsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
          jobs:jobs
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

export default JobsList;