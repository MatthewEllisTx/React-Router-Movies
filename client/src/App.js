import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    function getMovies() {
      console.log('here')
      fetch('http://localhost:5000/api/movies')
        .then(response => response.json())
        .then( response => {console.log(response); setMovieList(response)})
        .catch(error => {
          console.error('Server Error', error);
        })
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch>

        <Route path='/movies/:movieID'>
          <Movie />
        </Route>

        <Route path='/'>
          <MovieList movies={movieList}/>
        </Route>

      </Switch>
    </div>
  );
}
