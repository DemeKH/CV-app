import { useState } from "react";
import AddInfoForm from "./components/AddInfoForm";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="app">
      <AddInfoForm isOpen={isFormOpen} />
      <button onClick={() => setIsFormOpen(true)}>Edit</button>
      <button onClick={() => setIsFormOpen(false)}>submit</button>
    </div>
  );
}

export default App;
