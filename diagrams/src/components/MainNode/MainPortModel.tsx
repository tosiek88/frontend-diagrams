import {
    DefaultLinkModel,
    LinkModel,
    PortModel,
    PortModelAlignment
} from "@projectstorm/react-diagrams";

export class MainPortModel extends PortModel {
    constructor(name: string, alignment?: PortModelAlignment) {
        super({
            type: "basic",
            name: name,
            alignment: alignment
        });
    }

    createLinkModel(): LinkModel {
        return new DefaultLinkModel();
    }
}
