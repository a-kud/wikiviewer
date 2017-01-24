import React from "react";

class SearchResults extends React.Component {

    render() {
        let snippet = this.props.searchData ?  this.props.searchData.query.search[0].snippet : null;
        if (snippet) {
            console.log(snippet)
            return(
                <div className="search-results">
                    { snippet }
                </div>
            );
        } else {return null;}
    }
}

export default SearchResults;
