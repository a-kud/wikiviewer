import React from "react";
import htmlparser from "htmlparser";

class SearchResults extends React.Component {

    parseSnippet(s) {
        //let re = /<\/?span\sclass="\w+">*(\w+)<\/span\>/
        // var handler = new htmlparser.DefaultHandler((err, dom) => {
        //     if(err) {
        //         console.error(`Error while pasring: ${err}`);
        //     } else {
        //         console.log(dom);
        //     }
        // });
        // var parser = new htmlparser.Parser(handler);
        // parser.parseComplete(s);
        // //console.log(JSON.stringify(handler.dom, null, 2));
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(s, "text/html");
        // console.log(htmlDoc.getElementsByTagName("body"));
        return htmlDoc.getElementsByTagName("body")[0].innerHTML;
    }

    render() {
        let snippet = this.props.searchData ?  this.props.searchData.query.search[0].snippet : null;
        if (snippet) {
            console.log(snippet)
            return(
                <div className="search-results" dangerouslySetInnerHTML={{__html: snippet}}>
                    // { this.parseSnippet(snippet) }
                </div>
            );
        } else {return null;}
    }
}

export default SearchResults;
