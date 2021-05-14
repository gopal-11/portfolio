import React from "react";
import technohubImage from "../Images/technohub.png";
function Technohub() {
  return (
    <div>
      <img src={technohubImage}></img>
      <div className="details">
        <br />
        <h1>
          <center>Techno Hub</center>
        </h1>
        <ul>
          <li>
            Techno Hub is a Full Stack WebApp to book various PC/Camera
            services.
          </li>
          <li>
            Features: Listing of various service providers from where a user can
            book a service according to his/her choice.
          </li>
          <li>Role: Developer | Tech</li>
          <li>Stack: HTML5, CSS, react-Bootstrap , ReactJS</li>
        </ul>
      </div>
    </div>
  );
}

export default Technohub;
