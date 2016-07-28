import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from "../app/config/routes";

const rootHtml = (
    <Router history={ browserHistory } routes={ routes } />
);

render( rootHtml, document.getElementById( "react-root" ) );
