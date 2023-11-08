import React, { useState } from "react";
document.title = "Color Flipper";
function App() {
  const [a, setA] = useState("rgb(0, 0, 0)");
  let flip = () => {
    let first = Math.floor(Math.random() * 256);
    let second = Math.floor(Math.random() * 256);
    let third = Math.floor(Math.random() * 256);
    let a = `rgb(${first}, ${second}, ${third})`;
    document.body.style.backgroundColor = a;
    setA(a);
    let h1Elements = document.getElementsByClassName("h1-app");
    h1Elements[0].style.color = a;
    let btn1 = document.getElementsByClassName("btn");
    btn1[0].style.backgroundColor = a;
  };
  return (
    <div className="App">
      <h1 className="h1-app">{a}</h1>
      <button onClick={flip} className="btn">
        Change Color
      </button>
    </div>
  );
}

export default App;
