import React from 'react';
import { Grid, Input, Divider } from 'semantic-ui-react';

import './SearchBar.css';

const SearchBar = () => {
    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <Divider hidden />
                <Input 
                    fluid
                    icon='search'
                    placeholder='Search...'
                />
                <Divider hidden />
            </Grid.Column>
        </Grid>
    );
};

export default SearchBar;