import React from "react";
import covidImage from "../Images/covid.png";
function Covid() {
  return (
    <div>
      <img src={covidImage}></img>
      <div className="details">
        <br />
        <h1>
          <center>Covid Tracker</center>
        </h1>
        <ul>
          <li>Analyze the effect of COVID-19</li>
          <li>Features: Record number of Active, Recovered and Total cases.</li>
          <li>Role: Developer</li>
          <li>Tech Stack: ReactJS, HTML, CSS, JavaScript, Web Api</li>
        </ul>
      </div>
    </div>
  );
}

export default Covid;
