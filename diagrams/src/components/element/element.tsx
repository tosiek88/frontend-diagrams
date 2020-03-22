import * as React from "react";
import { FunctionComponent } from "react";

export interface ElementProps {
    name?: string;
    connections?: [];
}

export const DiagramElement: FunctionComponent<ElementProps> = (
    props: ElementProps
) => {
    return <div>{props.name}</div>;
};
