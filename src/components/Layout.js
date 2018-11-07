import React from 'react';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import SearchBar from './SearchBar';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <SearchBar />
      </Header>
      {children}
      <Divider />
      <p>
        Made with <Icon name="heart" color="red" /> by Tareq Anwar
      </p>
    </Container>
  );
};

export default Layout;
