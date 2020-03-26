import { MainNodeModel } from "./MainNodeModel";
import styled from "@emotion/styled";
import { DiagramEngine, PortWidget } from "@projectstorm/react-diagrams";
import React from "react";

export interface MainNodeWidgetProps {
    node: MainNodeModel;
    engine: DiagramEngine;
    size?: number;
}

export let Port = styled.div`
  width: 16px;
  height: 16px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 1);
  }
`;

export class MainNodeWidget extends React.Component<MainNodeWidgetProps> {
    render() {
        console.log(this.props, `MAIN NODE `);
        return (
            <div
                className={"main"}
                style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                    background: "blue"
                }}
            >
                <PortWidget
                    port={this.props.node.getPort("basic")}
                    engine={this.props.engine}
                >
                    <Port />
                </PortWidget>
                <PortWidget
                    port={this.props.node.getPort("basic")}
                    engine={this.props.engine}
                >
                    <Port />
                </PortWidget>
            </div>
        );
    }
}
