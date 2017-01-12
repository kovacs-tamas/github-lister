import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchRepos} from '../actions/index';

class SearchBar extends Component {

    constructor(props) {

        super(props);

        this.state = {name: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({name: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchRepos(this.state.name);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Search for Github users"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchRepos}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
