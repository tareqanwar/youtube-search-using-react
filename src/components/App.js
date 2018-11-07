import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBh5xn0vGLJSNaclSUm8gvEbtr2F2mJ2wY';

import Layout from './Layout';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    
    YTSearch({key: API_KEY, term: 'Tareq'}, videos => {
      this.setState({ videos})
    });
  }
  render() {
    return (
      <div>
        <Layout>
        </Layout>
      </div>
    );
  };
}

export default App;
