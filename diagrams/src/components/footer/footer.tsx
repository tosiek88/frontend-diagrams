import * as React from "react";
import { FunctionComponent } from "react";

type FooterProps = {
  title: string;
  paragraph?: string;
};

export const Footer: FunctionComponent<FooterProps> = ({
  title,
  paragraph = "Hello Footer"
}) => <div>{paragraph}</div>;
