import { useState } from "react";

const CounterDate = () => {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  const displayedDate = new Date(startDate);
  displayedDate.setDate(startDate.getDate() + count);

  function incrementCount() {
    setCount((prevCount) => prevCount + steps);
  }
  function decrementCount() {
    setCount((prevCount) => prevCount - steps);
  }
  function handelClick() {
    setCount(0);
    setSteps(1);
    setStartDate(new Date());
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        maxWidth: "400px",
        margin: "50px auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(e) => setSteps(+e.target.value)}
          style={{ width: "80%", marginBottom: "10px" }}
        />
        <label style={{ display: "block", fontWeight: "bold" }}>
          Steps: {steps}
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={incrementCount}
          style={{
            padding: "8px 12px",
            marginRight: "10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
        >
          +
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
          style={{
            width: "50px",
            textAlign: "center",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />{" "}
        <button
          onClick={decrementCount}
          style={{
            padding: "8px 12px",
            marginLeft: "10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#f44336",
            color: "white",
            cursor: "pointer",
          }}
        >
          -
        </button>
      </div>

      <div style={{ marginBottom: "20px", fontSize: "16px" }}>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <b>{displayedDate.toDateString()}</b>
      </div>

      {count !== 0 || steps !== 1 ? (
        <button
          onClick={handelClick}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#2196F3",
            color: "white",
            cursor: "pointer",
          }}
        >
          RESET
        </button>
      ) : null}
    </div>
  );
};

export default CounterDate;
