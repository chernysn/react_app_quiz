import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import questionSets from "./quizData";
import Card from "./questionCard";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { id, question, choices, correct } = questionSets[currentQuestion];
  const [countPoints, setCountPoints] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [endGame, setEndGame] = useState("");
  const [quizAgain, setQuizAgain] = useState(0);
  const [theEnd, setTheEnd] = useState(false);

  const handleResponseSelection = (event) => {
    setResult(event.target.value);
  };

  const nextQuestion = () => {
    if (result === "") {
      requiredMessage();
    } else {
      if (currentQuestion < questionSets.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        getPoints();
      } else {
        setTheEnd(true);
        getPoints();
      }
      setResult("");
      setTimeout(() => {}, 1000);
    }
  };

  const getPoints = () => {
    setCountPoints((prevCountPoints) => {
      const newPoints =
        correct === result ? prevCountPoints + 10 : prevCountPoints;
      if (newPoints > prevCountPoints) {
        setFeedbackMessage("Correct!");
      } else {
        setFeedbackMessage("Incorrect!");
      }
      setTimeout(() => {
        setFeedbackMessage("");
      }, 1000);

      return newPoints;
    });
  };

  const requiredMessage = () => {};

  const getResults = (e) => {
    setEndGame(`Your score is: ${countPoints}!`);
    setQuizAgain(1);
    e.preventDefault();
  };

  return (
    <>
      <div className="main">
        <form>
          {theEnd === false ? (
            <div key={id} className="quiz">
              <div className="correct_tick">{feedbackMessage}</div>
              <div>
                <h2>Question {id}</h2>
                <p>{question}</p>
                {choices.map((choice, index) => (
                  <p key={index}>
                    <input
                      type="radio"
                      required
                      name={`questionGroupName${id}`}
                      value={choice}
                      onChange={(event) => handleResponseSelection(event)}
                    />{" "}
                    {choice}
                  </p>
                ))}
              </div>
              <div>
                <button onClick={nextQuestion}>Next</button>
              </div>
            </div>
          ) : (
            <div className="quiz" style={{ alignItems: "center" }}>
              <button
                type="submit"
                style={{
                  width: "80%",
                  height: "4em",
                  fontSize: "2em",
                  margin: "1em auto",
                }}
                onClick={(e) => {
                  getResults(e);
                }}
              >
                {" "}
                Get Results!
              </button>
              <div className="result">
                <p>{endGame}</p>
                <button type="submit" style={{ opacity: quizAgain }}>
                  Try again?
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
