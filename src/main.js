import React from "react";
import ReactDom from "react-dom";
import SearchForm from "./components/SearchForm";

const container = document.querySelector(".container");

ReactDom.render(<SearchForm />, container);

if (module.hot) {
    module.hot.accept();
}
