import * as React from "react";
import { FunctionComponent } from "react";
import { DiagramElement, ElementProps } from "../element/element";
import "./Diagram.css";

import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import * as SRD from "@projectstorm/react-diagrams";
interface DiagramProps {
    elements: ElementProps[];
    engine: DiagramEngine;
}

export const Diagram: FunctionComponent<DiagramProps> = ({
    elements,
    engine
}: DiagramProps) => {
    const returnModel = () => {
        const defaultModel = new SRD.DiagramModel();
        engine.setModel(defaultModel);
    };
    returnModel();
    return (
        <div className="Diagram">
            <CanvasWidget engine={engine} />
            <DiagramElement name={elements[0].name} />
        </div>
    );
};
