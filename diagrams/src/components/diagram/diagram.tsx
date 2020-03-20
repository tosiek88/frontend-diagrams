import * as React from "react";
import { FunctionComponent } from "react";

type DiagramProps = {
  title: string;
  paragraph?: string;
};

export const Diagram: FunctionComponent<DiagramProps> = ({
  title,
  paragraph = "Hello Paragraph"
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{paragraph}</div>
    </div>
  );
};
