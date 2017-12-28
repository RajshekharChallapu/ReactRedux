//import
import React, {Component} from 'react';

// SearchBar class now as access to all of react components
class SearchBar extends Component {

    constructor(props) {
        /* calling parent method with super..props(passing data) are immutable.. */
        super(props);
        /* React components can have state by setting this.state in the constructor..lets store value of searchbar in state.. and read the user input  */
        this.state = { term: ''};
    }

    // must have render method to get all
    render() {
        // handling user inputs with property onChange
return (
    <div className ="search-bar">
        <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}/>

    </div>
        );
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);

    }
}

// export componenet
export default SearchBar;