import "./styles.css";
import { useState } from "react";

export default function App() {
  const [boxes, setBoxes] = useState(["box1", "box2", "box3"]);
  const [boxIndex, setBoxIndex] = useState(null);

  function onDragStartBox(index) {
    setBoxIndex(index);
  }

  function onDropBox(index) {
    const newBoxes = [...boxes];
    const currBox = newBoxes.splice(boxIndex, 1)[0];
    newBoxes.splice(index, 0, currBox);
    setBoxes(newBoxes);
  }

  return (
    <div className="container">
      {boxes.map((item, index) => {
        return (
          <div
            className="box"
            draggable
            onDragStart={() => onDragStartBox(index)}
            onDrop={() => onDropBox(index)}
            onDragOver={(e) => e.preventDefault()}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
