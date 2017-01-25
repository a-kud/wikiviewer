import React from "react";
import SearchRow from "./SearchRow"

class SearchResults extends React.Component {

    render() {
        // console.log(json)
        let numOfRows = this.props.searchData ?  this.props.searchData.query.search.length : null;
        if (numOfRows) {
            let json = this.props.searchData;
            let search = this.props.searchData.query.search;
            let rows = [...Array(numOfRows)].map((x, i) => {
                return <SearchRow
                    key={i + 1}
                    link={`https://en.wikipedia.org/wiki/${search[i].title}`}
                    snippet={search[i].snippet} />})
            return(
                <div className="search-results"/* dangerouslySetInnerHTML={{__html: snippet}}*/>
                    {rows}
                </div>
            );
        } else {return null;}
    }
}

export default SearchResults;
