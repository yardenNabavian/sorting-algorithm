import { React, useState, useEffect } from "react";
import "./SortingVisualizer.css";

///////////
const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    let newArray = [];
    for (let i = 0; i < 30; i++) {
      newArray.push(randomIntFromInterval(20, 400));
    }
    setArray(newArray);
  };

  useEffect(resetArray, []);

  console.log(array);
  return (
    <div className="background">
      <h1 className="title">Sorting Visualizer</h1>
      <div className="array-container">
        {array.length > 0 ? (
          array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <button onClick={resetArray}>Reset Array</button>
    </div>
  );
};
/////////

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
