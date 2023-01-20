import { useNavigate } from "react-router-dom";
import styled from "./Nav.module.css";

function Nav() {
  let navigate = useNavigate();
  return (
    <div>
      <ul className={styled.navbar}>
        <li onClick={() => navigate(`/`)}>Home</li>
        <GenreNav genre="Documentary" navigate={navigate} />
        <GenreNav genre="Sci-Fi" navigate={navigate} />
        <GenreNav genre="Romance" navigate={navigate} />
        <GenreNav genre="Action" navigate={navigate} />
        <GenreNav genre="Horror" navigate={navigate} />
      </ul>
    </div>
  );
}
function GenreNav({ genre, navigate }) {
  return (
    <li
      onClick={() => {
        navigate(`/genre/${genre}`);
      }}
    >
      {genre}
    </li>
  );
}

export default Nav;
