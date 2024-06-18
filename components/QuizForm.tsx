"use client";

import { useState } from 'react';
import { Button } from './ui/button';

const questions = [
  { id: 1, question: "What is 1 + 1?", options: ["1", "2", "3", "4"] },
  { id: 2, question: "What is 2 + 2?", options: ["2", "3", "4", "5"] },
  { id: 3, question: "What is 3 + 3?", options: ["5", "6", "7", "8"] },
  { id: 4, question: "What is 4 + 4?", options: ["6", "7", "8", "9"] },
  { id: 5, question: "What is 5 + 5?", options: ["8", "9", "10", "11"] },
  { id: 6, question: "What is 6 + 6?", options: ["10", "11", "12", "13"] },
  { id: 7, question: "What is 7 + 7?", options: ["12", "13", "14", "15"] },
  { id: 8, question: "What is 8 + 8?", options: ["14", "15", "16", "17"] },
  { id: 9, question: "What is 9 + 9?", options: ["16", "17", "18", "19"] },
  { id: 10, question: "What is 10 + 10?", options: ["18", "19", "20", "21"] },
  { id: 11, question: "What is 11 + 11?", options: ["20", "21", "22", "23"] },
];

const QuizForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(null));
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
      const totalScore = updatedAnswers.reduce((acc, answer) => acc + answer, 0);
      setScore(totalScore);
      setIsQuizCompleted(true);

      // Optionally, send the answers to the server
      await submitQuizAnswers(updatedAnswers, totalScore);
    }
  };

  if (isQuizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-4">Quiz Completed</h1>
        <p className="text-2xl">Your score: {score}</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">{currentQuestion.question}</h1>
      <div className='flex flex-col gap-4 lg:flex-row lg:gap-12'>
        {currentQuestion.options.map((option, index) => (
            <Button
            key={index}
            onClick={() => handleAnswer(index)}
            variant='outline'

            className="hover:bg-foreground"
            >
            {option}
            </Button>
        ))}
      </div>
    </div>
  );
};

const submitQuizAnswers = async (answers: number[], score: number) => {
  const response = await fetch('/api/quiz/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answers, score }),
  });
  const result = await response.json();
  return result;
};

export default QuizForm;
