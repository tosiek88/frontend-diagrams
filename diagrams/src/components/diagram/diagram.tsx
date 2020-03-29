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
        // Foreach elements generate node
        this.props.elements.forEach((el, index) => {
            let node = new MainNodeModel({ name: el.name as string });
            el.connections?.forEach(conn => {
                if (conn.flow === "input") {
                    node.addInputPort(conn.label);
                } else {
                    node.addOutputPort(conn.label);
                }
            });

            node.addOutputPort("P0010");
            node.setPosition(100, 100 * (index + 1));
            this.nodes.push(node);
        });
        console.debug(this.nodes);
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
