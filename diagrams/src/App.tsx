import * as React from "react";
import { Component } from "react";
import { Diagram } from "./components/diagram/diagram";
import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import axios from "axios";

type AppProps = {
    msg?: string;
};

export class App extends Component<AppProps> {
    state = {
        elements: []
    };

    private diagram: any = {};
    componentDidMount() {
        this.getData().then(({ data }) => {
            this.setState({ elements: data });
            console.log(this.state);
        });
    }

    getData = async () => {
        const instance = axios.create({ baseURL: "http://localhost:4000" });
        const data = await instance.get("element");
        return data;
    };

    preRenderDiagram = () => {
        if (this.state.elements.length > 0) {
            return <Diagram elements={this.state.elements} />;
        } else {
            return null;
        }
    };

    render() {
        return (
            <div className="container">
                <Header title="Header" />
                {this.preRenderDiagram()}
                <Footer title="Footer" />
            </div>
        );
    }
}
