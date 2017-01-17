import React from "react";

class SearchForm extends React.Component {
    render() {
        return(
            <form>
                <input type="text"></input>
                <button type="submit" name="action" value="update">Update</button>
                <button type="submit" name="action" value="delete">Delete</button>
            </form>
        );
    }
}

export default SearchForm;
