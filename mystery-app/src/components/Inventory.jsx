
export default function Inventory({ clues }) {
  return (
    <div className="inventory">
      <h2>Briefcase Inventory: 💼</h2>
      {clues.length === 0 && <p>No clues yet.</p>}
      <ul>
        {clues.map((clue, i) => (
          <li key={i}>{clue}</li>
        ))}
      </ul>
    </div>
  );
}