import {
    NodeModel,
    NodeModelGenerics,
    PortModelAlignment
} from "@projectstorm/react-diagrams";
import { MainPortModel } from "./MainPortModel";

export interface MainNodeModelGenerics {
    name: string;
    aligment: PortModelAlignment;
}

export class MainNodeModel extends NodeModel<
    NodeModelGenerics & MainNodeModelGenerics
    > {
    constructor() {
        super({
            type: "basic"
        });
        this.addInputPort();
        this.addOutputPort();
    }

    public addInputPort() {
        this.addPort(new MainPortModel(PortModelAlignment.LEFT));
    }

    public addOutputPort() {
        this.addPort(new MainPortModel(PortModelAlignment.RIGHT));
    }
}
