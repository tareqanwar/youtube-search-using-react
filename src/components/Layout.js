import React from 'react';
import { Header, Container, Grid, Divider, Icon } from 'semantic-ui-react';

import SearchBar from './SearchBar';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <SearchBar />
      </Header>
      <Grid columns={2} divided>
        {children}
      </Grid>
      <Divider />
      <p>
        Made with <Icon name="heart" color="red" /> by Tareq Anwar
      </p>
    </Container>
  );
};

export default Layout;
