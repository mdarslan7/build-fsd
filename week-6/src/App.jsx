import { useState } from "react";

function App() {
  return (
    <>
      <HeaderWithButton />
      <Header title="Header2" />
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Arslan");

  function updateTitle() {
    setTitle("Updated Title " + Math.random());
  }

  return (
    <>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
    </>
  );
}

export default App;
