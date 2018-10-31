import React from 'react';
import { Grid, Search } from 'semantic-ui-react';

const SearchBar = () => {
    return (
        <Grid>
            <Grid.Column centered columns={2}>
                <Search 
                    placeholder='Search...' 
                />
            </Grid.Column>
        </Grid>
    );
};

export default SearchBar;