import "../App.css";
import Home from "./Home";
import Academic from "./Academic";
import Covid from "./Covid";
import Technohub from "./Technohub";
import GithubIssue from "./GithubIssue";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ContactMe from "./ContactMe";
function App() {
  return (
    <div className="App">
      {/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Link to="/">Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <div className="main-header">
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ fontSize: "xx-large" }}>Portfolio</span>
        <Link to="/" style={{ float: "right" }}>
          <button>Home</button>
        </Link>
      </div>

      <Switch>
        <Route exact path="/academic" component={Academic} />
        <Route exact path="/project" component={null} />
        <Route exact path="/project/covid" component={Covid} />
        <Route exact path="/project/technohub" component={Technohub} />
        <Route exact path="/project/githubissue" component={GithubIssue} />
        <Route exact path="/contact" component={ContactMe} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Link to="/contact">
        <span>
          <h3>Contact Me</h3>
        </span>
      </Link>

      <Link to="/academic">
        <span>
          <h3>Academic Records</h3>
        </span>
      </Link>
      <Link to="project">
        <span>
          <h3>Projects</h3>
        </span>
      </Link>
      <br />
      <ul>
        <li>
          <Link to="/project/covid">
            <span>Covid Tracker</span>
          </Link>
        </li>
        <li>
          <Link to="/project/technohub">
            <span>Technohub </span>
          </Link>
        </li>
        <li>
          <Link to="/project/githubissue">
            <span>GithubIssue Page</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
