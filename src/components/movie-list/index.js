import React from "react";
import "./index.css";

function MovieList() {
  const [movieYear, setMovieYear] = React.useState("");
  const [moviesList, setMoviesList] = React.useState([]);
  const [hasFetched, setHasFetched] = React.useState(false);

  const handleSearchMovie = async () => {
    if (!movieYear) {
      return;
    }
    setHasFetched(false);
    fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${movieYear}`)
      .then((response) => response.json())
      .then((data) => {
        setMoviesList(data);
        setHasFetched(true);
      });
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          onChange={(e) => setMovieYear(e.target.value)}
          value={movieYear}
          type="number"
          className="large"
          placeholder="Enter Year eg 2015"
          data-testid="app-input"
        />
        <button
          onClick={handleSearchMovie}
          className=""
          data-testid="submit-button"
        >
          Search
        </button>
      </section>


        <ul className="mt-50 styled" data-testid="movieList">
          {moviesList?.data?.map((movie) => (
            <li key={movie.imdbID} className="slide-up-fade-in py-10">
              {movie.Title}
            </li>
          ))}
        </ul>
      

      {movieYear && hasFetched && !movieYear?.data?.length (
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">
          No Results Found
        </div>
      )}
    </div>
  );
}

export default MovieList;
