import * as React from "react";
import { FunctionComponent } from "react";
import { DiagramElement, ElementProps } from "../element/element";
import "./Diagram.css";

interface DiagramProps {
    elements: ElementProps[];
}

export const Diagram: FunctionComponent<DiagramProps> = ({
    elements
}: DiagramProps) => {
    return (
        <div className="Diagram">
            {console.log(elements)}
            <DiagramElement name={elements[0].name} />
        </div>
    );
};
