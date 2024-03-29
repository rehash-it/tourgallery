import React from "react";
import { BrowserRouter as Router, Link,withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="annie-main-menu">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    );
  }
}

export default withRouter(Navbar);
