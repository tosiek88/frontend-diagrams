import * as React from "react";
import { FunctionComponent } from "react";

import "./Diagram.css";
type DiagramProps = {
  title: string;
  paragraph?: string;
};

export const Diagram: FunctionComponent<DiagramProps> = ({
  title,
  paragraph = "Hello Paragraph"
}) => {
  return (
    <div className="Diagram">
      <div>{title}</div>
      <div>{paragraph}</div>
    </div>
  );
};
