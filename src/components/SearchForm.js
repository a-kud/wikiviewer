import React from "react";

class SearchForm extends React.Component {

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
            <form id="search-form">
                <input type="text" id="seachbar"></input>
                <button type="button" id="btn-search" onClick={() => {
                    alert("Search");
                }}>Search</button>
                <button type="button" id="btn-random">Random Article</button>
            </form>
        );
    }
}

export default SearchForm;
