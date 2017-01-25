import React from "react";

class SearchRow extends React.Component {

    render() {
        return (
            <div className="search-row">
                <a href={`https://en.wikipedia.org/wiki/${this.props.title}`}>{this.props.title}</a>
                <p  dangerouslySetInnerHTML={{__html: this.props.snippet}}></p>
            </div>
        )
    }
}

export default SearchRow;
