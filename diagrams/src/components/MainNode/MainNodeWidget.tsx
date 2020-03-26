import { MainNodeModel } from "./MainNodeModel";
import styled from "@emotion/styled";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import React from "react";
import { MainPort } from "./MainPorts";

export interface MainNodeWidgetProps {
    node: MainNodeModel;
    engine: DiagramEngine;
    size?: number;
}

export class MainNodeWidget extends React.Component<MainNodeWidgetProps> {
    constructor(props) {
        super(props);
        console.log(props);
    }
    private generatePorts = () => { };

    render() {
        this.generatePorts();
        return (
            <div className="main">
                <div className="node-title">Name</div>
                <MainPort node={this.props.node} engine={this.props.engine} />
            </div>
        );
    }
}
