import createEngine, {
    PortModelAlignment,
    DiagramEngine
} from "@projectstorm/react-diagrams";
import axios from "axios";
import * as React from "react";
import { Component } from "react";
import "./App.css";
import { Diagram } from "./components/diagram/diagram";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { SimplePortFactory } from "./components/MainNode/SimplePortFactory";
import { MainPortModel } from "./components/MainNode/MainPortModel";
import { MainNodeFactory } from "./components/MainNode/MainFactoryModel";

type AppProps = {
    msg?: string;
};

export class App extends Component<AppProps> {
    state = {
        elements: []
    };
    private engine: DiagramEngine;
    constructor(props: AppProps) {
        super(props);
        this.initEngine();
    }
    private initEngine = () => {
        this.engine = createEngine();

        this.engine
            .getPortFactories()
            .registerFactory(
                new SimplePortFactory("basic", config => new MainPortModel())
            );
        this.engine.getNodeFactories().registerFactory(new MainNodeFactory());
    };

    getData = async () => {
        const instance = axios.create({ baseURL: "http://localhost:4000" });
        const data = await instance.get("element");
        return data;
    };

    diagram = () => {
        if (this.state.elements.length > 0) {
            return (
                <Diagram
                    elements={this.state.elements}
                    engine={this.engine as DiagramEngine}
                />
            );
        } else {
            return null;
        }
    };

    componentDidMount() {
        this.getData().then(({ data }) => {
            this.setState({ elements: data });
        });
    }

    render() {
        return (
            <div className="container">
                <Header title="Header" />
                {this.diagram()}
                <Footer title="Footer" />
            </div>
        );
    }
}
