'use client'
import React, { useState } from 'react'
import QuestionArea from '../QuestionArea'
import { questions } from '@/data/questions'
import { Question } from '@/types/Question'
import Results from '../Results'

const QuizArea = () => {
  const [answers, setAnswers] = useState<number[]>([])
  const [currentCount, setCurrentCount] = useState(0)
  const [listQuestions, setListQuestions] = useState<Question[]>(questions)
  const [showResult, setShowResult] = useState(false)

  const loadNextQuestion = () => {
    if(listQuestions[currentCount + 1]){
      setCurrentCount(currentCount + 1)
    }else{
      setShowResult(true)
    }
  }
  const handleAnswer = (answer: number) => {
     setAnswers([...answers, answer])
     loadNextQuestion()
  }
  const handleRestartButton = () => {
    setAnswers([])
    setCurrentCount(0)
    setShowResult(false)
  }
  
  return (
    <div className="max-w-2xl bg-white p-3 text-black rounded-md shadow shadow-black/80">

      <div className="w-full py-2">
        <h1 className="font-bold text-md pb-4 border-b border-gray-500">Quiz de História</h1>
      </div>
      {
        !showResult && 
        <QuestionArea
        question = {listQuestions[currentCount]}
        count = {currentCount + 1}
        onAnswer = {handleAnswer}
      />
      }
      {
        showResult && 
        <Results 
          questions = {listQuestions}
          answers = {answers}
        />
      }
      
      
      <div className="text-center text-sm pt-5">
        {!showResult && 
          `${currentCount+1} de ${listQuestions.length} pergunta${listQuestions.length === 1?'':'s'}`
        }
        {
          showResult &&
          <button onClick = {handleRestartButton} className="px-3 py-2 rounded-md
           bg-blue-800 text-white">Reniciar quiz</button>
        }
        
      </div>
    </div>
  )
}

export default QuizArea