import React from "react";
import htmlparser from "htmlparser";

class SearchResults extends React.Component {

    parseSnippet(s) {
        //let re = /<\/?span\sclass="\w+">*(\w+)<\/span\>/
        var handler = new htmlparser.DefaultHandler();
        var parser = new htmlparser.Parser(handler);
        parser.parseComplete(s);
        console.log(JSON.stringify(handler.dom, null, 2));
    }

    render() {
        let snippet = this.props.searchData ?  this.props.searchData.query.search[0].snippet : null;
        if (snippet) {
            console.log(snippet)
            return(
                <div className="search-results">
                    { this.parseSnippet(snippet) }
                </div>
            );
        } else {return null;}
    }
}

export default SearchResults;
