import React from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResults: {},
            searchTerm: null,
        };
    }

    //term - string
    // returns Object
    getSearchResults(term) {
        let baseUrl = "https://en.wikipedia.org/w/api.php",
            urlSearch = `?action=query&list=search&
                          srsearch=${term}&srlimit=50&format=json`;
        let request = new Request(baseUrl + urlSearch, {mode: "cors"}),
            result;

        result = fetch(request).then((resp) => resp.json()).then((json) => json);
        return result;
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
