import React from "react";
import hubIssugiteImage from "../Images/githubissue.png";
function GithubIssue() {
  return (
    <div>
      <img src={hubIssugiteImage}></img>
      <div className="details">
        <br />
        <h1>
          <center>GithubIssue Page</center>
        </h1>
        <ul>
          <li>
            Github Issue Page gives the list of issues of a particular user
          </li>
          <li>
            Features: Github issue page, Takes user name and repository name as
            input, and prints the open issues.
          </li>
          <li>Role: Developer</li>
          <li>Tech Stack: ReactJS, CSS, React-Bootstrap, Git</li>
        </ul>
      </div>
    </div>
  );
}

export default GithubIssue;
