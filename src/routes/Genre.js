import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
import styled from "./Genre.module.css";
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
    <div style={{ height: "100%" }}>
      <h1 className={styled.maintitle}>
        {`Best ${genre} Movies `}
        {loading ? null : `(${movies.length})`}{" "}
      </h1>
      <div className={styled.gridContainer}>
        {loading ? (
          <h1 style={{ color: "white" }}>Loading...</h1>
        ) : (
          movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              rating={movie.rating}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={
                movie.summary.length < 200
                  ? movie.summary
                  : movie.summary.slice(
                      0,
                      movie.summary.lastIndexOf(" ", 200)
                    ) + " ..."
              }
              genres={movie.genres}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Genre;
