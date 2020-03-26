import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { DiagramEngine, DiagramModel } from "@projectstorm/react-diagrams";
import * as events from "events";
import * as React from "react";
import { ElementProps } from "../element/element";
import { MainNodeModel } from "../MainNode/MainNodeModel";
import "./Diagram.scss";

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
            let node = new MainNodeModel();
            node.setPosition(100, 150 * (-index + 1));
            this.nodes.push(node);
        });
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
