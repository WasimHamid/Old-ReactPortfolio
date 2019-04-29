import React from "react";
import { Grid } from "react-mdl";

class Landing extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <br />

          <div className="banner-text">
            <h1>Wasim Hamid</h1>
            <h2>Junior Developer</h2>

            <p>React | JavaScript | HTML | CSS | Express | MongoDB</p>

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
        </Grid>
      </div>
    );
  }
}

export default Landing;
