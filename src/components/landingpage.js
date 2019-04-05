import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <br />

            <div className="banner-text">
              <h1>Wasim Hamid</h1>
              <h1>Junior Developer</h1>

              <p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB</p>

              <div className="social-links">
                <a
                  href="http://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/WasimHamid"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
