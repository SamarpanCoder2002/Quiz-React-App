import { useState, useEffect } from "react";
import loader from "./loader.jpg";

import "./App.css";

function MainArea({ questionAnswerSet }) {
  return (
    <div className="main-area">
      {questionAnswerSet.map((element) => {
        return (
          <div
            className="card-container"
            key={questionAnswerSet.indexOf(element)}
          >
            <div className="front-view">
              <p>
                <b>{element.question}</b>
              </p>
              <ul>
                {element.answerOptions.map((option) => {
                  return (
                    <li key={element.answerOptions.indexOf(option)}>
                      {element.answerOptions.indexOf(option) + 1}. {option}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="back-view">{element.correctAnswer}</div>
          </div>
        );
      })}
    </div>
  );
}

function StartWork() {
  const [questionAnswerSet, setQuestionAnswerSet] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=50&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        if (questionAnswerSet.length === 0) {
          console.log(data);
          let tempContainer = [];
          data.results.forEach((element) => {
            let tempAnswerOptions = element.incorrect_answers.concat(
              element.correct_answer
            );

            tempContainer.push({
              question: element.question,
              answerOptions: tempAnswerOptions.sort(() => Math.random() - 0.4),
              correctAnswer: element.correct_answer,
            });
          });

          setQuestionAnswerSet(tempContainer);
        }
      });
  }, [questionAnswerSet]);

  if (questionAnswerSet.length === 0)
    return (
      <div className="start-work">
        <img src={loader} alt="loader" />
      </div>
    );

  return (
    <div className="container">
      <h1>General Knowledge</h1>
      <MainArea questionAnswerSet={questionAnswerSet} />
    </div>
  );
}

export default StartWork;
