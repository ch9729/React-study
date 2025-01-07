import { useState } from "react";

function Gugudan() {
  const [number, setNumber] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleGenerate = () => {
    const num = parseInt(number);
    if (isNaN(num) || num < 1 || num > 9) {
      alert("1에서 9 사이의 숫자를 입력하세요.");
      return;
    }
    const newResults = [];
    for (let i = 1; i <= 9; i++) {
      newResults.push(`${num} x ${i} = ${num * i}`);
    }
    setResults(newResults);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>구구단</h1>
      <div>
        <input
          type="number"
          placeholder="숫자를 입력하세요 (1-9)"
          value={number}
          onChange={handleChange}
          style={{
            padding: "10px",
            marginRight: "10px",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleGenerate}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          생성
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        {results.map((result, index) => (
          <p key={index} style={{ fontSize: "18px", margin: "5px 0" }}>
            {result}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Gugudan;
