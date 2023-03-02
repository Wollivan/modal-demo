import "./App.css";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [modalShow, setModalShow] = useState(false);

  function handleModal() {
    // switch modalShow value from true to false and vice versa
    setModalShow(!modalShow);
    console.log(modalShow);
  }

  return (
    <div className="App">
      <h1>Conditional Rendering</h1>
      <button onClick={handleModal}>Hide/Show the modal</button>
      {modalShow && <Modal handleModal={handleModal} />}
    </div>
  );
}

export default App;
