import * as React from "react";
import { Component } from "react";
import { Diagram } from "./components/diagram/diagram";
import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

type AppProps = {
  msg: string;
};

export class App extends Component<AppProps> {
  static defaultProps = {
    msg: "App Hello"
  };
  render() {
    return (
      <div className="App">
        <Header title="Header" />
        <Diagram title="Main Diagram" />
        <Footer title="Footer" />
      </div>
    );
  }
}
