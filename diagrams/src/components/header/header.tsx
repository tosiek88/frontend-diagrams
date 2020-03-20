import * as React from "react";
import { FunctionComponent } from "react";

type HeaderProps = {
  title: string;
};

export const Header: FunctionComponent<HeaderProps> = ({ title }) => (
  <div>{title}</div>
);
