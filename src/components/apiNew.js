import React, { useState, useEffect } from "react";
// import "../../App.css";

function Quiz() {
  const [question, setItems] = useState([]);
  const [widthCount, setWidth] =useState(window.screen.width);
  useEffect(() => {
    fetchItems();
  }, []);
  const actualWidth = () => {
    console.log(window.innerWidth);
  setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    console.log("event add");
    return () => {
      window.removeEventListener("resize", actualWidth);
      console.log("event remove");
    }
  });
 
  const fetchItems = async () => {
    const data = await fetch(
      "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple"
    );

    const question = await data.json();
    // console.log("helo",question);
    setItems(question);
  };

  console.log("hi", question.results);

  return (
    <div>
    <h2> {widthCount}</h2>
    <br/>
      <h1>QUIZ PAGE</h1>
      {question.results &&
        question.results.map(items => {
          return (
            <div>
              <ul>
                <li>{items.question}</li>
                <li>{items.correct_answer} {items.incorrect_answers}</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}
export default Quiz;
