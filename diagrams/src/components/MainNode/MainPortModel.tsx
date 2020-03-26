import {
    DefaultLinkModel,
    LinkModel,
    PortModel,
    PortModelAlignment
} from "@projectstorm/react-diagrams";

export class MainPortModel extends PortModel {
    constructor(alignment?: PortModelAlignment) {
        super({
            type: "basic",
            name: "basic",
            alignment: alignment
        });
    }

    createLinkModel(): LinkModel {
        return new DefaultLinkModel();
    }
}
