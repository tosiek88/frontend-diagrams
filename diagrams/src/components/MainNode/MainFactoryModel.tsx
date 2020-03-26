import { MainNodeModel } from "./MainNodeModel";
import * as React from "react";
import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { DiagramEngine } from "@projectstorm/react-diagrams-core";

export class MainNodeFactory extends AbstractReactFactory<
    MainNodeModel,
    DiagramEngine
    > {
    constructor() {
        super("basic");
    }

    generateReactWidget(event: any): JSX.Element {
        return <div>test</div>;
    }

    generateModel(event: any) {
        return new MainNodeModel();
    }
}
