import * as React from "react";
import { FunctionComponent } from "react";
import axios from "axios";

import "./Diagram.css";
type DiagramProps = {
  title: string;
  paragraph?: string;
};

export const Diagram: FunctionComponent<DiagramProps> = ({
  title,
  paragraph = "Hello Paragraph"
}) => {
  const getData = async () => {
    const instance = axios.create({ baseURL: "http://localhost:4000" });
    const result = await instance.get("element");
    console.log(result);
  };

  return (
    <div className="Diagram">
      <div onClick={getData}>{title}</div>
      <div>{paragraph}</div>
    </div>
  );
};
