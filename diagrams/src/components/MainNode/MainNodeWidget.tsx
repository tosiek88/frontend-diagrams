import { MainNodeModel } from "./MainNodeModel";
import { DiagramEngine, PortModel } from "@projectstorm/react-diagrams";
import React from "react";
import { MainPort } from "./MainPorts";
import { MainPortModel } from "./MainPortModel";

export interface MainNodeWidgetProps {
    node: MainNodeModel;
    engine: DiagramEngine;
    size?: number;
}
//Node means phisical element like switchboard
export class MainNodeWidget extends React.Component<MainNodeWidgetProps> {
    public InputPorts: JSX.Element[] = [];
    public OutputPorts: JSX.Element[] = [];

    constructor(props: MainNodeWidgetProps) {
        super(props);
        this.generatePorts();
    }

    private generatePort = (it: PortModel) => {
        return (
            <MainPort
                key={it.getID()}
                port={it as MainPortModel}
                node={this.props.node}
                engine={this.props.engine}
            />
        );
    };

    private generatePorts = () => {
        const { input, output } = this.props.node.getInOutPorts();
        this.InputPorts = input.map(this.generatePort);
        this.OutputPorts = output.map(this.generatePort);
    };

    render() {
        return (
            <div className="main">
                <div className="node-title">{this.props.node.name}</div>
                <div className="container-left">{this.InputPorts}</div>
                <div className="container-right">{this.OutputPorts}</div>
            </div>
        );
    }
}
