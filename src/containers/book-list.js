import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">{this.renderList()}</ul>
    )
  }
}
// BookList component re-renders whenever state of the app changes
function mapStateToProps(state) {
  // whatever returned here shows up as props inside of BookList
  return {
    books: state.books
  }
  // connection between redux and our component (state to props)
}

// anything returned from this function ends up as props on the BookList container
// i.e whatever passed as first arg is available as props
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our
  // reducers (done by bindActionCreators) dispatch passes actions to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
  // selectBook is the action creator imported at the top
}

// promote booklist from a component to a container. it needs to know about
// the new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
