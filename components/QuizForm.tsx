"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const questions = [
  {
    id: 1,
    title: "Current Digital Content Usage",
    question:
      "Do you currently create digital content for your business (e.g., social media posts, videos, graphics)?",
    options: ["Yes", "Yes, about once a month on avarage", "No"],
  },
  {
    id: 2,
    title: "Digital Content Quality",
    question: "How would you rate the quality of your current digital content?",
    options: [
      "High (professional quality, engaging)",
      "Medium (adequate but could be improved)",
      "Low (needs significant improvement)",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    question: "Do you have a digital marketing strategy in place?",
    options: [
      "Yes, a comprehensive one",
      "Somewhat, but it could be more detailed",
      "No, we don’t have one",
    ],
  },
  {
    id: 4,
    title: "Technical Infrastructure",
    question:
      "Do you have reliable internet connectivity in your store/restaurant/office?",
    options: ["Yes, always", "Occasionally", "Rarely or never"],
  },
  {
    id: 5,
    title: "Technical Infrastructure",
    question:
      "Do you have the necessary hardware (screens, mounts, etc.) to support digital signage?",
    options: [
      "Yes, we are fully equipped",
      "Partially, but we need more",
      "No, we need to purchase hardware",
    ],
  },
  {
    id: 6,
    title: "Budget and Investment",
    question:
      "Do you have a budget allocated for digital signage installation and maintenance?",
    options: [
      "Yes, we have a dedicated budget",
      "Somewhat, but it’s limited",
      "No, we have not allocated a budget",
    ],
  },
  {
    id: 7,
    title: "Content Management",
    question:
      "Do you have a team or person responsible for managing digital content?",
    options: [
      "Yes, a dedicated team/person",
      "Part-time responsibility",
      "No, we need to assign someone",
    ],
  },
  {
    id: 8,
    title: "Content Management",
    question:
      "Are you familiar with content management systems (CMS) for digital signage?",
    options: [
      "Yes, we have experience",
      "Somewhat, but we need more training",
      "No, we need guidance",
    ],
  },
  {
    id: 9,
    title: "Customer Engagement",
    question:
      "Do you currently use any form of digital signage or displays in your business?",
    options: ["Yes, extensively", "Occasionally", "No, not at all"],
  },
  {
    id: 10,
    title: "Customer Engagement",
    question:
      "How important is customer engagement and experience to your business?",
    options: ["Very important", "Somewhat important", "Not very important"],
  },
  {
    id: 11,
    title: "Marketing and Promotion",
    question:
      "How often do you run promotions, events, or introduce new products that you want to highlight to customers?",
    options: ["Frequently", "Occasionally", "Rarely or never"],
  },
  {
    id: 12,
    title: "Marketing and Promotion",
    question:
      "Would you be interested in using interactive features (touchscreens, QR codes) to enhance customer experience?",
    options: [
      "Yes, definitely",
      "Maybe, but we need more information",
      "No, we’re not interested",
    ],
  },
];

const QuizForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    new Array(questions.length).fill(null)
  );
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleAnswer = async (answerIndex: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answerIndex + 1;
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate the score when the quiz is completed
      const totalScore = updatedAnswers.reduce(
        (acc, answer) => acc + answer,
        0
      );
      setScore(totalScore);
      setIsQuizCompleted(true);

      // Optionally, send the answers to the server
      await submitQuizAnswers(updatedAnswers, totalScore);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (isQuizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-4">Quiz Completed</h1>
        <p className="text-2xl mb-48">Your score: {score}</p>
        <Link className='hover:underline cursor-pointer' href="/">
        back to main
        </Link>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center container h-screen p-12">
      <div className="flex flex-col justify-between w-full h-1/4 mb-32">
        <Button
          onClick={handleBack}
          className="max-w-max text-foreground font-bold py-2 px-4 rounded mr-2"
          variant="outline"
          disabled={currentQuestionIndex === 0}
        >
          {`${"<"}`}
        </Button>
        <div className="w-full h-2 bg-gray-200">
          <div
            className="h-full bg-blue-500" 
            style={{ width: `${progress}%` }}
          ></div>
          <p className="text-sm my-2">
            {currentQuestionIndex + 1} / {questions.length}
          </p>
        </div>

        <div className="flex justify-self-start ">
          
        </div>
        <h1 className="text-3xl mb-12">{currentQuestion.title}</h1>
      </div>
      {/* ahahahahhahahahahahhahahahahhahahahhahahahahhahahahahahhahahahahhahahahhahahahahhahahahahahhahahahahhahahahha */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-12">{currentQuestion.question}</h1>
      <div>
        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(index)}
            variant="outline"
            className="max-w-lg text-wrap hover:bg-opacity-50 px-12 w-full mb-4 text-xl"
          >
            {option}
          </Button>
        ))}
      </div>
      </div>
      
    </div>
  );
};

const submitQuizAnswers = async (answers: number[], score: number) => {
  const response = await fetch("/api/quiz/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answers, score }),
  });
  const result = await response.json();
  return result;
};

export default QuizForm;