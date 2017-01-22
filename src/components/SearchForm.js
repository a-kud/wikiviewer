import React from "react";

class SearchForm extends React.Component {

    render() {
        return(
            <form id="search-form">
                <input type="text" id="seachbar" onChange={(e) => this.props.onChange(e)}></input>
                <button type="button" id="btn-search" onClick={() => {
                    this.props.getSearch(this.props.searchTerm);
                }}>Search</button>
                <button type="button" id="btn-random">
                    <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Random Article</a>
                </button>
            </form>
        );
    }
}

export default SearchForm;
