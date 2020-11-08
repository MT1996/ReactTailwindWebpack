import * as React from "react";
import * as ReactDOM from "react-dom";
import {Hello} from "./HelloComponent/Hello.Component";

export interface HelloProps {
    compiler: string;
    framework: string;
}

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app-root")
);