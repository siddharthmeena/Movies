import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import NavBar from "./components/NavBar";
import moviedb from "./api/moviedb";

const FEATURED =
  "https://api.themoviedb.org/3/discover/movie?api_key=dbaa7bf07ae236679ffcdb74c18d7bb2&language=en-US&sort_by=popularity.desc&include_adult=true";
const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const onFormSubmit = async (item) => {
    const response = await moviedb.get("/search/movie", {
      params: {
        query: item,
      },
    });
    setMovies(response.data.results);
  };

  return (
    <div className="container">
      <div className="navbar">
        <NavBar onSubmit={onFormSubmit} />
      </div>
      <div className="movie-container">
        {movies.length > 0
          ? movies.map((movie) => {
              return <Movie key={movie.id} {...movie} />;
            })
          : ""}
      </div>
    </div>
  );
};
export default App;
//https://api.themoviedb.org/3/search/movie?api_key=dbaa7bf07ae236679ffcdb74c18d7bb2&language=en-US&query=it&page=1&include_adult=false

//img : https://api.themoviedb.org/3/movie/488671/images?api_key=dbaa7bf07ae236679ffcdb74c18d7bb2&language=en-US
