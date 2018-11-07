import _ from 'lodash';
import React, {Component} from 'react';
import YTSearch from 'youtube-api-v3-search';
import { Header, Container, Grid, Divider, Icon } from 'semantic-ui-react';

const API_KEY = 'AIzaSyBh5xn0vGLJSNaclSUm8gvEbtr2F2mJ2wY';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null,
      term: null
    };

    this.videoSearch(this.state.term);
  }

  videoSearch(term) {
    let options = {
      part:'snippet',
      type:'video'
    };

    if(term)
      options.q = term;
    else
      options.chart = 'mostPopular';

    YTSearch(API_KEY, options, (error, results) => {
      if(!error){
        this.setState({ 
          videos: results.items,
          selectedVideo: results.items[0]
        });
      }
    });
  };

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <Container>
          <Header>
            <SearchBar onSearchTermChange={videoSearch}/>
          </Header>
          <Grid columns={2} divided>
              <VideoDetails video={this.state.selectedVideo} />
              <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} 
              />
          </Grid>
          <Divider />
          <p>
            Made with <Icon name="heart" color="red" /> by Tareq Anwar
          </p>
        </Container>
      </div>
    );
  };
}

export default App;
