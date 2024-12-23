// export * from './MyAnnotationHandler';
import React from "react";
import ReactDOM from "react-dom";
import { MyCopilot } from "./MyCopilot";

ReactDOM.render(
    <React.StrictMode>
        <MyCopilot />
    </React.StrictMode>,
    document.getElementById("container")
);
