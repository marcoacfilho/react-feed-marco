import React from "react";
import ReactDOMClient from "react-dom/client";
import Main from "./main";
const mount = document.getElementById("app");
const root = ReactDOMClient.createRoot(mount);

root.render(<Main />);