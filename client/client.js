import React from "react";
import { render } from "react-dom";
import Home from "../app/home";

const rootHtml = (
    <Home />
);

render( rootHtml, document.getElementById( "react-root" ) );
