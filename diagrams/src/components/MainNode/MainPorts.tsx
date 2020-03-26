import React from "react";
import { PortWidget, DiagramEngine } from "@projectstorm/react-diagrams";
import styled from "@emotion/styled";
import { MainNodeModel } from "./MainNodeModel";
import "./MainPort.scss";

export const ConnectionName = styled.div`
  margin-top: 0px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 0.6em;
  color: white;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  margin-top: 2px;
  height: 15px;
  display: flex;
  /* border: 1px solid blue; */
`;

export interface MainPortArgs {
    node: MainNodeModel;
    engine: DiagramEngine;
    size?: number;
}
// TODO Should be FC? Statless?
export class MainPort extends React.Component<MainPortArgs> {
    render() {
        return (
            <Wrapper>
                <PortWidget
                    port={this.props.node.getPort("basic")}
                    engine={this.props.engine}
                    style={{ background: "blue" }}
                    className="left"
                />
                <ConnectionName>A0299</ConnectionName>
            </Wrapper>
        );
    }
}
