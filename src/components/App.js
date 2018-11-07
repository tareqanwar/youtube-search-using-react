import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBh5xn0vGLJSNaclSUm8gvEbtr2F2mJ2wY';

YTSearch({key: API_KEY, term: 'Tareq'}, function(data) {
  console.log(data);
});

import Layout from './Layout';
import Loading from './Loading';

const App = () => {
  return (
      <div>
        <Layout>
        </Layout>`
      </div>
  );
};

export default App;
