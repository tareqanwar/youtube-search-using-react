import React from 'react';
import { Grid, Search } from 'semantic-ui-react';

const SearchBar = () => {
    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <Search 
                    placeholder='Search...'
                />
            </Grid.Column>
        </Grid>
    );
};

export default SearchBar;