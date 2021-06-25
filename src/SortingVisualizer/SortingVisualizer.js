import { React, useState, useEffect } from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from "./SortingAlgorithms/mergeSort";

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

  const mergSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "blueviolet";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 20);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 20);
      }
    }
  };

  console.log(array);
  return (
    <div className="background">
      <h1 className="title">Sorting Visualizer</h1>
      <p>Visualize an array being sorted with the Merge Sort algorithm.</p>
      <div className="array-container">
        {array.length > 0 ? (
          array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: "blueviolet",
                height: `${value}px`,
              }}
            ></div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <button onClick={resetArray}>Reset Array</button>
      <button onClick={mergSort}>Sort</button>
    </div>
  );
};
/////////

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
