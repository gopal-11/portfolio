import { Card, Button } from "react-bootstrap";

import Gopal from "../Images/gopal.jpg";
import "../styles.css";
import Academic from "./Academic";
import Covid from "./Covid";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
const Home = () => {
  return (
    <>
      <br />
      <br />
      <div className="profileImage">
        <Card>
          <Card.Body>
            <img src={Gopal} style={{ height: "400px" }}></img>
            <blockquote className="blockquote mb-0">
              <p>
                <h3>Gopal Bhilotiya</h3>
              </p>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Home;
