import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "./Movie.module.css";
function Movie({ id, coverImg, title, summary, genres, rating }) {
  return (
    <div className={styled.imageContainer}>
      <img src={coverImg} alt={title} />
      <div className={styled.imageDescription}>
        <h2>
          <Link to={`/Movie/${id}`}>{title}</Link>{" "}
          <span>{`(${rating} / 10)`}</span>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
