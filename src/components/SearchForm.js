import React from "react";

class SearchForm extends React.Component {
    render() {
        return(
            <form id="search-form">
                <input type="text"></input>
                <button type="button" value="update">Search</button>
                <button type="button" value="delete">Random Article</button>
            </form>
        );
    }
}

export default SearchForm;
