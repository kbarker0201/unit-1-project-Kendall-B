import { useState } from 'react';
import { Link } from 'react-router';
import Inventory from "./Inventory"; 

function GamePage() {
  const [clues, setClues] = useState([]);
  const [message, setMessage] = useState("Search the study for clues…");
  const [complete, setComplete] = useState(false);

  const clueList = ["Mysterious Key", "Note", "Game Token"];

  const handleClue = (name) => {
    //name.preventDefault();
    if (clues.includes(name)) {
      return setMessage(`You've already found the ${name}.`);
    }

    const updated = [...clues, name];
    setClues(updated);
    setMessage(`You found: ${name}`);

    if (updated.length === clueList.length) {
      setComplete(true);
      setMessage("All clues found! A hidden compartment opens…");
    }
  };

  return (
<>
    <div className="game-container">
        <h1>The Study</h1>
      <Link to="/" className="back-btn">← Return</Link>
      <p>{message}</p>

      <div className="room">

        <div className="clue" style={{ top: "53%", left: "15%" }} onClick={() => handleClue("Mysterious Key")}>
          🗝️
        </div>

        <div className="clue" style={{ top: "39%", left: "75%" }} onClick={() => handleClue("Note")}>
          📜
        </div>

        <div className="clue" style={{ top: "75%", left: "40%" }} onClick={() => handleClue("Game Token")}>
          🥮
        </div>
      </div>

      <div className="briefcase">
        {/* <h2>Briefcase Contents: 💼</h2>
        {clues.length === 0 && <p>No clues yet.</p>}
        <ul>{clues.map((c, i) => <li key={i}>{c}</li>)}</ul> */}
        <Inventory clues={clues}/>
      </div>

      {complete && (
        <div className="ending">
          <h2>Mystery Solved!</h2>
          <p>Nancy finds the missing manuscript hidden behind the bookshelf.</p>
        </div>
      )}
    </div>
    </>
  );
}

export default GamePage;