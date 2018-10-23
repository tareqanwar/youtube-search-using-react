import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Profile = () => {
  return (
    <Card>
      <Card.Content>
        <Image
          size="mini"
          floated="right"
          shape="circular"
          bordered
          src="https://avatars1.githubusercontent.com/u/1341548?s=460&v=4"
        />
        <Card.Header>Tareq Anwar</Card.Header>
        <Card.Description>
          Programmer
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://twitter.com/trqnwr" target="_blank">
          <Icon name="twitter" />
          Twitter
        </a>{' '}
        <a href="https://github.com/tareqanwar" target="_blank">
          <Icon name="github" />
          GitHub
        </a>
      </Card.Content>
    </Card>
  );
};

export default Profile;
