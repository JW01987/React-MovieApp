import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let [loading, setLoading] = useState(true);
  let [movie, setMovies] = useState([]);
  const { id } = useParams();
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const res = await response.json();
    setMovies(res.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <MovieDetail
          title={movie.title}
          coverImg={movie.medium_cover_image}
          rating={movie.rating}
          description={movie.description_full}
          genres={movie.genres}
        />
      )}
    </div>
  );
}
function MovieDetail({ title, coverImg, rating, description, genres }) {
  return (
    <>
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <h3>rating({rating}/10)</h3>
      <p>{description}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </>
  );
}
export default Detail;
