import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBh5xn0vGLJSNaclSUm8gvEbtr2F2mJ2wY';

import Layout from './Layout';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };
    
    YTSearch({key: API_KEY, term: 'Tareq'}, videos => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div>
        <Layout>
              <VideoDetails video={this.state.selectedVideo} />
              <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} 
              />
        </Layout>
      </div>
    );
  };
}

export default App;
