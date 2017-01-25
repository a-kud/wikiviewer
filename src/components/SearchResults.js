import React from "react";
import SearchRow from "./SearchRow"

class SearchResults extends React.Component {
    render() {
        // console.log(json)
        let numOfRows = this.props.searchData ?  this.props.searchData.query.search.length : null;
        if (numOfRows) {
            let json = this.props.searchData,
                search = this.props.searchData.query.search;

            let rows = [...Array(numOfRows)].map((x, i) => {
                return <SearchRow
                    key={i + 1}
                    title={`${search[i].title}`}
                    snippet={search[i].snippet} />})


            let container = document.querySelector(".container");
            container.setAttribute("style", "height: initial");
            return(
                <div className="search-results"/**/>
                    {rows}
                </div>
            );
        } else {return null;}
    }
}

export default SearchResults;
