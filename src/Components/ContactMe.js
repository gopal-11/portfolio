import { Card, Button } from "react-bootstrap";
const ContactMe = () => {
  return (
    <>
      <br />
      <br />
      <Card>
        <Card.Header>
          <h3>
            <center>Contact Details</center>
          </h3>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              <ul>
                <li>Mobile No. : 8827404770</li>
                <li>Email : gopalbhilotiya98@gmail.com</li>
                <li>LinkedIn: gopal-bhilotiya-05b280187</li>
              </ul>
            </p>
            <footer className="blockquote-footer">@ Gopal Bhilotiya </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};
export default ContactMe;
