import { useState } from "react";

const quizData = [
  {
    question: "What is the capital of India?",
    options: [
      { text: "Delhi", isCorrect: true },
      { text: "Mumbai", isCorrect: false },
      { text: "Kolkata", isCorrect: false },
      { text: "Pune", isCorrect: false },
    ],
  },
  {
    question: "What is the national animal of India?",
    options: [
      { text: "Lion", isCorrect: false },
      { text: "Tiger", isCorrect: false },
      { text: "Elephant", isCorrect: false },
      { text: "Cow", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Australia?",
    options: [
      { text: "Sydney", isCorrect: false },
      { text: "Melbourne", isCorrect: false },
      { text: "Canberra", isCorrect: true },
      { text: "Perth", isCorrect: false },
    ],
  },
  {
    question: "What is the national fruit of India?",
    options: [
      { text: "Mango", isCorrect: true },
      { text: "Apple", isCorrect: false },
      { text: "Orange", isCorrect: false },
      { text: "Banana", isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [question,displayedQuest]=useState(0);
  const [selected,setSelected]=useState([])
  const [answers,setAns]=useState([])

  return <div>
    <h1>Quiz App</h1>
    
    {quizData.slice(question,question+1).map((data,index)=>{
      return <div key={index}>
        <h2>{data.question}</h2>
        {data.options.map((option)=>(
          <button>{option.text}</button>
        ))}
      </div>
    })}
  </div>;
};

export default Quiz;
