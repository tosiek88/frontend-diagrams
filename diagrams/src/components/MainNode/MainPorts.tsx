import {
    DiagramEngine,
    PortModel,
    PortWidget
} from "@projectstorm/react-diagrams";
import React from "react";
import { MainNodeModel } from "./MainNodeModel";
import "./MainPort.scss";
import { MainPortModel } from "./MainPortModel";
import { ConnectionName, Container } from "./StyledComponentsMainPort";

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
                className={props.port.getOptions().alignment}
            />
            <ConnectionName aligment={props.port.getOptions().alignment}>
                {props.port.getOptions().name}
            </ConnectionName>
        </Container>
    );
};
