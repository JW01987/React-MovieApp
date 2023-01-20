import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Nav from "./routes/Nav";
import Genre from "./routes/Genre";

function App() {
  return (
    <>
      <Nav />
      <div style={{ margin: "3em" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre/:genre" element={<Genre />}></Route>
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
