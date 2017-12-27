import React from 'react';
import ReactDOM from 'react-dom';

//importing component from search_bar.js file
import SearchBar from './components/search_bar';

// const used when declare variable never gonna change.. Youtube API key..console.developers.google.com
const API_KEY = 'AIzaSyD3ZvPZ-B1YSrOxwyWxdlA9Fe1yQ7CC6xI';

// ES6....creating new component... ES6 function to =>
const App = () => {
    return (
< div > <SearchBar/> < /div>
    );
};

ReactDOM.render(< App / >, document.querySelector('.container'));