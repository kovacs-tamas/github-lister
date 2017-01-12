import React from 'react';
import {Component} from 'react';

import SearchBar from '../containers/search_bar';
import RepoList from '../containers/repo_list';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <RepoList />
            </div>
        );
    }
}
