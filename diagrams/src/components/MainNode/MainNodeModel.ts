import {
    NodeModel,
    NodeModelGenerics,
    PortModelAlignment
} from "@projectstorm/react-diagrams";
import { MainPortModel } from "./MainPortModel";

export interface MainNodeModelGenerics {
    name: string;
}

export class MainNodeModel extends NodeModel<
    NodeModelGenerics & MainNodeModelGenerics
    > {
    constructor() {
        super({
            type: "basic"
        });
        this.addPort(new MainPortModel(PortModelAlignment.LEFT));
    }
}
