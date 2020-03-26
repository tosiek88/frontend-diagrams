import { MainNodeModel } from "./MainNodeModel";
import * as React from "react";
import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { DiagramEngine } from "@projectstorm/react-diagrams-core";
import { MainNodeWidget } from "./MainNodeWidget";

export class MainNodeFactory extends AbstractReactFactory<
    MainNodeModel,
    DiagramEngine
    > {
    constructor() {
        super("basic");
    }

    generateReactWidget(event: any): JSX.Element {
        return <MainNodeWidget engine={this.engine} node={event.model} />;
    }

    generateModel(event: any) {
        return new MainNodeModel();
    }
}
