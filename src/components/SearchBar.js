import React, { Component } from 'react';
import { Grid, Input, Divider } from 'semantic-ui-react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    render() {
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Divider hidden />
                    <Input 
                        fluid
                        icon='search'
                        value={this.state.term}
                        onChange={event => this.setState({ term: event.target.value} )}
                        placeholder='Search...'
                    />
                    <Divider hidden />
                </Grid.Column>
            </Grid>
        );
    }
};

export default SearchBar;