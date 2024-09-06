import React, { useState } from "react";

const quizData = [
  {
    question: "What is the capital of India?",
    options: [
      { text: "Delhi", correct: true },
      { text: "Mumbai", correct: false },
      { text: "Chennai", correct: false },
      { text: "Kolkata", correct: false },
    ],
  },
  {
    question: "What is the largest country in the world?",
    options: [
      { text: "Russia", correct: true },
      { text: "Canada", correct: false },
      { text: "China", correct: false },
      { text: "USA", correct: false },
    ],
  },
  {
    question: "What is the smallest continent in the world?",
    options: [
      { text: "Africa", correct: false },
      { text: "Antarctica", correct: false },
      { text: "Australia", correct: true },
      { text: "South America", correct: false },
    ],
  },
];

const Quiz = () => {
  const [ans, setAns] = useState([]);
  const [currQuest, setCurrQuest] = useState(0);
  const [selected, setSelected] = useState({});
  const totalScore = quizData.length;

  const selectedAns = (option) => {
    setSelected(option);
    if (option.correct) {
      setAns([...ans, option.text]);
    }
  };

  const marks = ans.length.toString() + "/" + totalScore.toString();

  const nextQuest = (currQuest) => {
    if (currQuest === quizData.length - 1) {
      return;
    }

    setCurrQuest(currQuest + 1);
    setSelected({});
  };

  return (
    <div className="max-w-md mx-auto p-5">
      <h1 className="text-3xl text-center">Quiz Up</h1>

      <div className="bg-blue-gray-800 w-40% h-full text-white p-4 flex items-center justify-center my-2">
        <h2>
          {quizData.slice(currQuest, currQuest + 1).map((o, i) => (
            <div key={i}>
              <h1 key={i}>{o.question}</h1>

              <div className="grid grid-cols-2 place-items-center gap-2 my-5">
                {o.options.map((opt) => (
                  <button
                    className={`${selected === opt ? "text-blue-500" : ""}`}
                    onClick={() => selectedAns(opt)}
                    key={opt.text}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
              <h3
                className="text-center cursor-pointer"
                hidden={currQuest === quizData.length - 1}
                onClick={() => nextQuest(currQuest)}
              >
                Next
              </h3>
            </div>
          ))}
          {currQuest === quizData.length - 1 && (
            <button
              onClick={() => {
                if (currQuest === quizData.length - 1) {
                  setCurrQuest(0);
                  if (marks === "3/3") {
                    alert("Congratulations! You recieved : " + marks);
                  } else if (marks === "2/3") {
                    alert("Not bad! You recieved : " + marks);
                  } else {
                    alert("Bahut bakwaas bhai , try again : "+marks);
                  }
                  setAns([]);
                }
              }}
            >
              Submit
            </button>
          )}
        </h2>
      </div>
    </div>
  );
};

export default Quiz;
