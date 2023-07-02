import React, { Component } from 'react';
import {Tab, Tabs} from "react-mdl";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {  activeTab: 0 };
    }
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>JS/HTML/CSS</Tab>
                    <Tab>Spring/Java</Tab>
                    <Tab>Angular/TypeScript</Tab>
                    <Tab>React/JavaScript</Tab>
                </Tabs>
            </div>
        )
    }
}

export default Project;
