import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

//importing component from search_bar.js file
import SearchBar from './components/search_bar';

// const used when declare variable never gonna change.. Youtube API key..console.developers.google.com
const API_KEY = 'AIzaSyD3ZvPZ-B1YSrOxwyWxdlA9Fe1yQ7CC6xI';



// ES6....creating new parent component... ES6 function to =>
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };

YTSearch({
    key: API_KEY,
    term: 'messi'
}, (videos) => {
   this.setState({videos});

});
    }
    render(){
    return (
         < div > 
        <SearchBar/>
        <VideoList videos ={this.state.videos}/>
         < /div>
    );
}
}
ReactDOM.render(< App / >, document.querySelector('.container'));