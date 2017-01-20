import React from "react";

class SearchForm extends React.Component {
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
