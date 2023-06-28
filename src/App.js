import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Moviecard } from "./Components/Moviecard";
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";

const API_KEY = "15f9be9d2037a0dad57635bbfc2428a0";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=15f9be9d2037a0dad57635bbfc2428a0";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=15f9be9d2037a0dad57635bbfc2428a0&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getAllMovies = () => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchedMovies = () => {
    axios
      .get(SEARCHAPI + search)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);

  return (
    <div className="App">
      <div className="row">
        <MovieListHeading heading="Movies" />
      </div>
      <header>
        <SearchBox search={search} setSearch={setSearch} />
      </header>
      <main className="movies">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <Moviecard key={movie.id} movie={movie} />)}
      </main>
    </div>
  );
}

export default App;
