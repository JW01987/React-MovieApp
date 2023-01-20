import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
function Genre() {
  let [loading, setLoading] = useState(true);
  let [movies, setMovies] = useState([]);
  const { genre } = useParams();
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?genre=${genre}&sort_by=rating`
    );
    const res = await response.json();
    setMovies(res.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  });

  return (
    <div className="App">
      <h1>
        {`Best ${genre} Movies `}
        {loading ? null : `(${movies.length})`}{" "}
      </h1>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            rating={movie.rating}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  );
}

export default Genre;
