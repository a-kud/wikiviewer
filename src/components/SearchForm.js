import React from "react";

class SearchForm extends React.Component {

    handleClick() {
        this.props.getSearch(this.props.searchTerm);
    }

    render() {
        return(
            <form id="search-form">
                <input type="text" id="seachbar" onChange={(e) => this.props.onChange(e)}></input>
                <button type="button" id="btn-search" onClick={() => this.handleClick() }>Search</button>

                <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">
                    <button type="button" id="btn-random">Random Article</button>
                </a>

            </form>
        );
    }
}

export default SearchForm;
