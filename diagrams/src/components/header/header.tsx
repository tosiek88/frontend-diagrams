import * as React from "react";
import { FunctionComponent } from "react";
import "./Header.css";

type HeaderProps = {
  title: string;
};

export const Header: FunctionComponent<HeaderProps> = ({ title }) => (
  <div className="Header">{title}</div>
);
