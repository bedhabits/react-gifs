import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      term: event.currentTarget.value
    });

    this.props.searchFunction(event.currentTarget.value);
  }

  render() {
    return (
      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
