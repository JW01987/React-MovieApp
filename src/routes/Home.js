import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "./card.css";

function Home() {
  let [loading, setLoading] = useState(true);
  let [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const res = await response.json();
    setMovies(res.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <h1 className="mainTitle">Top Movies</h1>
      <div className="gridContainer">
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

export default Home;
