import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink key={movie.id} to={`/movies/${movie.id}`} 
            activeClassName="link underline hot-pink bg-black pa-2"
            className="link no-underline dim black saved-movie"
          >
              {movie.title}
          </NavLink>
        ))}
        <Link to="/" className="home-button link no-underline dim black">Home</Link>
      </div>
    );
  }
}
