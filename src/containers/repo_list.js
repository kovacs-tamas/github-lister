import React, {Component} from 'react';
import {connect} from 'react-redux';

class RepoList extends Component {

    renderRepo(repo) {

        return (
            <li key={repo.id}><a href={repo.html_url} target="_blank">{repo.full_name}</a></li>
        );
    }

    displayError(message) {
        return (
            <div className="alert alert-danger">
                <strong>Error!</strong> {message}
            </div>
        );
    }

    noRepos() {
        return (
            <div className="alert alert-warning">
                <strong>Sorry!</strong> The requested user doesn’t have any repositories you can view.
            </div>
        );
    }

    render() {

        if (this.props.repos.error) {
            switch (this.props.repos.status) {
                case 404:
                    return this.displayError('The requested user not found');
                    break;

                default:
                    return this.displayError('Something went wrong, please try it again!');
            }
        }
        else {

            if (typeof  this.props.repos.data == 'undefined') {
                return (<div></div>);
            }

            if (this.props.repos.data.length) {
                return (
                    <ul>
                        {this.props.repos.data.map(this.renderRepo)}
                    </ul>
                );
            }
            else {
                return this.noRepos();
            }
        }
    }
}

function mapStateToProps({repos}) {
    return {repos};
}

export default connect(mapStateToProps)(RepoList);
