import React from "react";

class SearchForm extends React.Component {


    render() {
        return(
            <form id="search-form">
                <input type="text" id="seachbar" onChange={(e) => this.props.handleChange(e)}></input>
                <button type="button" id="btn-search" onClick={() => {
                    console.log(`searchTerm is ${this.props.searchTerm}`);
                }}>Search</button>
                <button type="button" id="btn-random">Random Article</button>
            </form>
        );
    }
}

export default SearchForm;
