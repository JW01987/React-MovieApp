import { useEffect, useState } from "react";

function App() {
  let [toDo, setToDo] = useState("");
  let [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    if (toDo === "") return;
    setToDos((c) => [toDo, ...c]);
    setToDo("");
  };

  return (
    <div className="App">
      <h1>My To Do({toDos.length})</h1>
      <div>
        <form>
          <input type="text" value={toDo} onChange={onChange} />
          <button onClick={addTodo}>✅Add</button>
        </form>
      </div>
      <hr />
      <ul>
        {toDos.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
