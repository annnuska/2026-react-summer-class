import { useState } from "react";
import "./App.css";
import flashcards from "./data";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  }

  return (
    <div className="container">
      {flashcards.map((card) => (
        <div
          key={card.id}
          className={`card ${selectedId === card.id ? "active" : ""}`}
          onClick={() => handleClick(card.id)}
        >
          <h2>
            {selectedId === card.id
              ? card.answer
              : card.question}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;