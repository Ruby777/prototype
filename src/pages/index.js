import React from "react";
import Footer from "../components/footer";
import JobsList from "../components/job";
import DatePickerComponent from "../components/datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CountryPicker from "../components/countrypicker";
import './../assets/index.scss';



const IndexPage = props => (

  <div className="main">
    <div className="jumbo">
      <div>
        <div className="protoHeader">
          <div className="prototype">Prototype</div>
          <div className="workwithus">Work with us</div>
          <div className="hire">How we hire</div>
        </div>  
      </div>
      <hr className="protohr"></hr>

      <p>EVERYTHING STARTS WHILE A PROTOTYPE</p>
      <a href="#" className="join">JOIN US</a>
    </div>


    <div className="protoJobType">  
      <div className="managerjobs">
        <p>I'M LOOKING FOR</p>
        <h6>MANAGERIAL JOBS</h6>
      </div>
      <div className="devjobs">
        <p>I'M LOOKING FOR</p>
        <h6>DEVELOPEMENT JOBS</h6>
      </div>
      <div className="showme"> 
        <p>SHOW ME</p>
        <h6>ALL JOBS</h6>
      </div>
    </div>

    <DatePickerComponent/>
    <CountryPicker/>
    <select>
      <option value="gender">Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <JobsList/>
    <button className="loadMore">LOAD MORE</button>
    <Footer />
  </div>
);

export default IndexPage;
