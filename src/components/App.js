import React from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResults: {},
        };
    }
    render() {
        return(
            <div className="app">
            <SearchForm />
            <SearchResults />
            </div>
        );
    }
}

export default App;
