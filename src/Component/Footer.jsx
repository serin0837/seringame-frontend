import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <section>
          <h4>Serin Jeon serin0837@icloud.com</h4>
          <ul className="social-icons">
            <li>
              <a href="" className="social-icon">
                {" "}
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="" className="social-icon">
                {" "}
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="" className="social-icon">
                {" "}
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
