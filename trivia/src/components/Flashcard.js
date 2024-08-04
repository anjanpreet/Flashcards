import "../styles/flashcard.css";
import { useState } from "react";

let data = [
  {
    id: 0,
    question:
      "In what country did the first Starbucks open outside of North America?",
    answer: "Japan",
  },
  {
    id: 1,
    question: "In a website browser address bar, what does “www” stand for?",
    answer: "World Wide Web",
  },
  {
    id: 2,
    question:
      "Where were the Declaration of Independence, the Constitution, and the Bill of Rights stored during World War II?",
    answer: "Fort Knox",
  },
  {
    id: 3,
    question: " What is the tiny piece at the end of a shoelace called?",
    answer: "An aglet",
  },
  {
    id: 4,
    question: "Which company's slogan is 'You're in good hands?'",
    answer: "Allstate",
  },
  {
    id: 5,
    question: "Who was the first televised President?",
    answer: "Franklin D. Roosevelt",
  },
];
function Flashcard() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(selectedId !== id ? id : null);
  }
  return (
    <>
      {data.map((card) => (
        <div
          style={selectedId === card.id ? { backgroundColor: "green" } : {}}
          id="card"
          onClick={() => handleClick(card.id)}
        >
          {selectedId === card.id ? (
            <p style={{ color: "white" }} id="question-answer">
              {card.answer}
            </p>
          ) : (
            <p id="question-answer">{card.question}</p>
          )}
        </div>
      ))}
    </>
  );
}

export default Flashcard;
