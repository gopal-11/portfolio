import React from "react";

function Academic() {
  return (
    <div>
      <h2>
        <center>Academic Details</center>
      </h2>

      <table>
        <tr>
          <th>Year</th>
          <th>Degree/Examination</th>
          <th>Institutin/Board</th>
          <th>CGPA/Percentage</th>
        </tr>
        <tr>
          <td>2021</td>
          <td>B.Tech (Computer Science)</td>
          <td>Ujjain Engineering College, Ujjain</td>
          <td>7.35/10</td>
        </tr>
        <tr>
          <td>2016</td>
          <td>HSSC</td>
          <td>Jawahar Navodaya Vidhyalaya, Multhan</td>
          <td>82.4%</td>
        </tr>
        <tr>
          <td>2014</td>
          <td>SSC</td>
          <td>Jawahar Navodaya Vidhyalaya, Multhan</td>
          <td>9.2/10</td>
        </tr>
      </table>
    </div>
  );
}

export default Academic;
