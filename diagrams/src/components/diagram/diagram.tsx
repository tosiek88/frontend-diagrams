import { CanvasWidget } from "@projectstorm/react-canvas-core";
import {
    DefaultNodeModel,
    DiagramEngine,
    DiagramModel
} from "@projectstorm/react-diagrams";
import * as events from "events";
import * as React from "react";
import { ElementProps } from "../element/element";
import { MainNodeModel } from "../MainNode/MainNodeModel";
import "./Diagram.scss";
import { DiamondNodeModel } from "../custom-node/DiamondNodeModel";

interface DiagramProps {
    elements: ElementProps[];
    engine: DiagramEngine;
}

export class Diagram extends React.Component<DiagramProps> {
    private model: DiagramModel = new DiagramModel();
    private nodes = this.model.getModels();
    private diagramEvents = new events.EventEmitter();

    private Init() {
        this.diagramEvents.emit(`init`, `Init of Diagram`);
    }

    private preRender() {
        this.props.elements.forEach((el, index) => {
            let node = new DefaultNodeModel({
                name: el.name,
                color: "rgb(0,192,255)"
            });
            node.setPosition(100, 100 * (-index + 1));
            this.nodes.push(node);
        });

        let node2 = new DiamondNodeModel();
        this.nodes.push(node2);
        node2.setPosition(250, 108);

        this.model.addAll(...this.nodes);
        this.props.engine.setModel(this.model);
    }

    public onInit(fn: () => void) {
        this.diagramEvents.on(`init`, fn);
    }

    render() {
        this.Init();
        this.preRender();

        return (
            <div className="Diagram">
                <CanvasWidget engine={this.props.engine} />
            </div>
        );
    }
}
