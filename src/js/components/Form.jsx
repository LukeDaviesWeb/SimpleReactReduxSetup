import React, { Component } from 'react';
import uuidv1 from 'uuid';
// 1) add connect
import { connect } from 'react-redux';
// 2) add action
import { addArticle } from '../actions/index';

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

// 3) add mapDispatchToProps func this to so you can dispatch an action to the reducer
function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

// 4) use connect to add mapdispatch to props
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
