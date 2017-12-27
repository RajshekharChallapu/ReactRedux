//import
import React, {Component} from 'react';

// SearchBar class now as access to all of react components
class SearchBar extends Component {

    constructor(props) {
        /* calling parent method with super */
        super(props);
        /* React components can have state by setting this.state in the constructor..lets store value of searchbar in state.. and read the user input  */
        
        this.state = { term: ''};
    }

    // must have render method to get all
    render() {
        // handling user inputs with property onChange
return (
    <div>
        <input
            value={this.state.term}
            onChange={event => this.setState({term: event.target.value})}/>

    </div>
        );
    }
}

// export componenet
export default SearchBar;