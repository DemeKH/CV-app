import { useState } from "react";
import AddInfoForm from "./components/AddInfoForm";
import CV from "./components/CV";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(true);

  return (
    <div className="app ">
      {isFormOpen && <AddInfoForm setIsFormOpen={setIsFormOpen} />}
      {!isFormOpen && <CV setIsFormOpen={setIsFormOpen} />}
    </div>
  );
}

export default App;
