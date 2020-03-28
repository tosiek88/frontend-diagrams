import {
    DiagramEngine,
    PortModel,
    PortWidget
} from "@projectstorm/react-diagrams";
import React from "react";
import { MainNodeModel } from "./MainNodeModel";
import "./MainPort.scss";
import { ConnectionName, Container } from "./StyledComponentsMainPort";
import { MainPortModel } from "./MainPortModel";

export interface MainPortArgs {
    node: MainNodeModel;
    engine: DiagramEngine;
    size?: number;
    port: MainPortModel;
}
// TODO Should be FC? Statless?
export const MainPort = (props: MainPortArgs) => {
    return (
        <Container>
            <PortWidget
                port={props.port as PortModel}
                engine={props.engine}
                style={{ background: "blue" }}
                className={props.port.getOptions().alignment}
            />
            <ConnectionName aligment={props.port.getOptions().alignment}>
                {props.port.getOptions().name}
            </ConnectionName>
        </Container>
    );
};
