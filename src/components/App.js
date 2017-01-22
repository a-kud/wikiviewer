import React from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResults: null,
            searchTerm: null,
        };
        this.handleChange = this.handleChange.bind(this); // http://bit.ly/2jD3JTD
        this.getSearchResults = this.getSearchResults.bind(this);
    }

    handleChange(e) {
        this.setState({searchTerm: e.target.value});
    }

    //term - string
    // returns Object
    getSearchResults(term) {
        let baseUrl = "https://en.wikipedia.org/w/api.php",
            urlSearch = `?action=query&list=search&srlimit=50&format=json&origin=*&srsearch=${term}`;
            let request = new Request(baseUrl + urlSearch/*, {mode: "cors"}*/),
            result;

        result = fetch(request).then((resp) => resp.json()).then((json) => {
            this.setState({searchResults: json});
            return json;
        });
        return result;
    }

    render() {
        return(
            <div className="app">
            <SearchForm searchTerm={this.state.searchTerm}
                        getSearch={this.getSearchResults}
                        onChange={this.handleChange}/>
            <SearchResults />
            </div>
        );
    }
}

export default App;
