import * as React from "react";
import { FunctionComponent } from "react";

import "./Footer.css";

type FooterProps = {
    title: string;
    paragraph?: string;
};

export const Footer: FunctionComponent<FooterProps> = ({
    title,
    paragraph = "Hello Footer"
}) => <div className="Footer">{`${title} ${paragraph}`}</div>;
