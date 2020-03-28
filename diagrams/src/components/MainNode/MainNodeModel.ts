import {
    NodeModel,
    NodeModelGenerics,
    PortModelAlignment,
    PortModel
} from "@projectstorm/react-diagrams";
import { MainPortModel } from "./MainPortModel";

export interface MainNodeModelGenerics {
    name: string;
    aligment?: PortModelAlignment;
}

export class MainNodeModel extends NodeModel<
    NodeModelGenerics & MainNodeModelGenerics
    > {
    private inPorts: PortModel[] = [];
    private outPorts: PortModel[] = [];
    public name: string;
    constructor(props: MainNodeModelGenerics) {
        super({
            type: "basic"
        });

        this.name = props.name;
    }

    public getInOutPorts(): { input: PortModel[]; output: PortModel[] } {
        return { input: this.inPorts, output: this.outPorts };
    }

    public addInputPort(name: string) {
        const portModel = new MainPortModel(name, PortModelAlignment.LEFT);
        this.addPort(portModel);
        this.inPorts.push(portModel);
    }

    public addOutputPort(name: string) {
        const portModel = new MainPortModel(name, PortModelAlignment.RIGHT);
        this.addPort(portModel);
        this.outPorts.push(portModel);
    }
}
