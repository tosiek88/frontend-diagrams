import * as React from "react";
import { FunctionComponent } from "react";
import { DiagramElement, ElementProps } from "../element/element";
import "./Diagram.css";

import { DiagramEngine } from "@projectstorm/react-diagrams";
import {
    DiagramModel,
    DefaultNodeModel,
    DefaultLinkModel
} from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { DemoCanvasWidget } from "./DemoCanvasWidget";
interface DiagramProps {
    elements: ElementProps[];
    engine: DiagramEngine;
}

export const Diagram: FunctionComponent<DiagramProps> = ({
    elements,
    engine
}: DiagramProps) => {
    //1) setup the diagram engine

    //2) setup the diagram model

    var model = new DiagramModel();
    console.log(model);

    //3-A) create a default node
    var node1 = new DefaultNodeModel({
        name: "Node 1",
        color: "rgb(0,192,255)"
    });
    node1.setPosition(100, 100);
    let port1 = node1.addOutPort("Out");

    //3-B) create another default node
    var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
    let port2 = node2.addInPort("In");
    node2.setPosition(400, 100);

    // link the ports
    let link1 = port1.link<DefaultLinkModel>(port2);
    link1.getOptions().testName = "Test";
    link1.addLabel("Hello World!");

    //4) add the models to the root graph
    model.addAll(node1, node2, link1);

    //5) load model into engine
    engine.setModel(model);
    return (
        <div className="Diagram">
            <DemoCanvasWidget>
                <CanvasWidget engine={engine} />
            </DemoCanvasWidget>
            <DiagramElement name={elements[0].name} />
        </div>
    );
};
