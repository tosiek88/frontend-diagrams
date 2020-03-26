import {
    NodeModel,
    NodeModelGenerics,
    PortModelAlignment,
    PortModel
} from "@projectstorm/react-diagrams";
import { MainPortModel } from "./MainPortModel";

export interface MainNodeModelGenerics {
    name: string;
    aligment: PortModelAlignment;
}

export class MainNodeModel extends NodeModel<
    NodeModelGenerics & MainNodeModelGenerics
    > {
    private inPorts: PortModel[] = [];
    private outPort: PortModel[] = [];
    constructor() {
        super({
            type: "basic"
        });
        this.addInputPort();
        this.addOutputPort();
    }

    public addInputPort() {
        const portModel = new MainPortModel(PortModelAlignment.LEFT);
        this.addPort(portModel);
        this.inPorts.push(portModel);
    }

    public addOutputPort() {
        const portModel = new MainPortModel(PortModelAlignment.RIGHT);
        this.addPort(portModel);

        this.outPort.push(portModel);
    }
}
