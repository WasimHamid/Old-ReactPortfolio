import React from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>React Projects</h1>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>Express Projects</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>Javascript Projects</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Express</Tab>
          <Tab>Javascript</Tab>
        </Tabs>
        <section>{this.toggleCategories()}</section>
      </div>
    );
  }
}
export default Projects;
