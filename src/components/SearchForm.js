from React import "react";

class SearchForm extends React.Component {
    render() {
        return(
            <form>
                <button type="submit" name="action" value="update">Update</button>
                <button type="submit" name="action" value="delete">Delete</button>
            </form>
        );
    }
}

export default SearchForm;
