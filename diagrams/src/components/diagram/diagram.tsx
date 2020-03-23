import { CanvasWidget } from "@projectstorm/react-canvas-core";
import {
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramEngine,
    DiagramModel
} from "@projectstorm/react-diagrams";
import * as React from "react";
import { ElementProps } from "../element/element";
import "./Diagram.scss";

interface DiagramProps {
    elements: ElementProps[];
    engine: DiagramEngine;
}

export class Diagram extends React.Component<DiagramProps> {
    constructor({ elements, engine }: DiagramProps) {
        super({ elements, engine });
    }

    render() {
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
        this.props.engine.setModel(model);

        return (
            <div className="Diagram">
                <CanvasWidget engine={this.props.engine} />
            </div>
        );
    }
}
