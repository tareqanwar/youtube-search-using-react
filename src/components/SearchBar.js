import React, { Component } from 'react';
import { Grid, Input, Divider } from 'semantic-ui-react';

class SearchBar extends Component {
    render() {
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
    }
};

export default SearchBar;