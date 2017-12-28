import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//importing component from search_bar.js file
import SearchBar from './components/search_bar';

// const used when declare variable never gonna change.. Youtube API key..console.developers.google.com
const API_KEY = 'AIzaSyD3ZvPZ-B1YSrOxwyWxdlA9Fe1yQ7CC6xI';

/* Parent component(class based)..class component used whenever v want use state...functional based takes properties and return static..jsx */
class App extends Component {
    constructor(props) {
        super(props);
        //for data pulling
        this.state = {
            videos: [],
            selectedVideo:null
        };
this.videoSearch('raj');

    }
videoSearch(term){
YTSearch({
    key: API_KEY,
    term: term
}, (videos) => {
    this.setState({
        videos: videos, selectedVideo: videos[0]
    });

});

}

    render(){
        const videoSearch = _.debounce((term) =>{this.videoSearch(term)},300);
    return (
< div >
 <SearchBar onSearchTermChange={videoSearch}/> 

<VideoDetail  video = {this.state.selectedVideo}/>

 <VideoList 
 onVideoSelect={selectedVideo => this.setState({selectedVideo})}
 videos ={this.state.videos}/> 
 < /div>
    );
}
}
ReactDOM.render(< App / >, document.querySelector('.container'));