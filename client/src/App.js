import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  renderMovieComp = (props) => {
    /* From ddillert @ https://github.com/ReactTraining/react-router/issues/4105 */
    return (
      <Movie save={this.addToSavedList} {...props} />
    );
  }

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          {/* Replace this Div with your Routes */}
          <Route exact path="/" component={MovieList} />
          {/* <Route path="/movies/:id" component={Movie} /> */}
          <Route path="/movies/:id" render={this.renderMovieComp} />
        </div>
      </div>
    );
  }
}
