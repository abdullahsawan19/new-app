import { useState } from "react";

const CounterDate = () => {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  function incrementSteps() {
    setSteps((prevSteps) => prevSteps + 1);
  }
  function decrementSteps() {
    setSteps((prevSteps) => prevSteps - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + steps);
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + steps);
      return newDate;
    });
  }
  function decrementCount() {
    setCount((prevCount) => prevCount - steps);
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - steps);
      return newDate;
    });
  }

  const containerStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  };

  const buttonStyle = {
    fontSize: "20px",
    padding: "10px 20px",
    margin: "10px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  };

  const titleStyle = {
    fontSize: "22px",
    margin: "10px 0",
  };

  const dateStyle = {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <div>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          onClick={incrementSteps}
        >
          +
        </button>
        <h1 style={titleStyle}>Steps{steps}</h1>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          onClick={decrementSteps}
        >
          -
        </button>
      </div>
      <div>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          onClick={incrementCount}
        >
          +
        </button>{" "}
        <h1 style={titleStyle}>Counter {count}</h1>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          onClick={decrementCount}
        >
          -
        </button>{" "}
      </div>
      <div style={dateStyle}>
        {" "}
        <h2>
          {count} days from today is {date.toDateString()}
        </h2>
      </div>
    </div>
  );
};

export default CounterDate;
