import React from "react";
import ReactDOM  from "react-dom";
import {BrowserRouter} from "react-router-dom"
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";

import App from "./App"

const user = storageUtils.getUser();
memoryUtils.user=user;

ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>,
document.getElementById("root")
)