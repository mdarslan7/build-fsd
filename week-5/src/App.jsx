import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Explore MCP",
      "description": "Get into MCP architecture"
    },
    {
      title: "Order Chicken",
      description: "Have a delicious meal"
    }
  ]);
  
  return (
    <div className="main-container">
      {todos.map((todo) => {
        return <Todos title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

function Todos(props) {
  return(
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

// function CustomButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }

//   return(
//     <button onClick={onClickHandler}>Counter {props.count}</button>
//   );
// }

export default App;