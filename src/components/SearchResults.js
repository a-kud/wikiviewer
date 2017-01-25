import React from "react";
import SearchRow from "./SearchRow"

class SearchResults extends React.Component {

    parseSnippet(s) {
        //let re = /<\/?span\sclass="\w+">*(\w+)<\/span\>/
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(s, "text/html");
        // console.log(htmlDoc.getElementsByTagName("body"));
        return htmlDoc.getElementsByTagName("body")[0].innerHTML;
    }

    render() {
        let snippet = this.props.searchData ?  this.props.searchData.query.search[0].snippet : null;
        let numOfRows = this.props.searchData ?  this.props.searchData.query.search.length : null;
        if (numOfRows) {
            let rows = [...Array(numOfRows)].map((x, i) => <SearchRow  key={i + 1}  />)
            return(
                <div className="search-results"/* dangerouslySetInnerHTML={{__html: snippet}}*/>
                    {rows}
                </div>
            );
        } else {return null;}
    }
}

export default SearchResults;
