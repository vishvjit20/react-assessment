import { useState } from "react";
import Modal from "./components/Modal";
import Users from "./components/Users";

function App() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
