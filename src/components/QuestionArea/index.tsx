import { Question } from '@/types/Question'
import React, { useState } from 'react'

type Props = {
  question: Question
  count: number
  onAnswer: (key: number) => void
}
const QuestionArea = ({question, count, onAnswer}: Props) => {
  const [checkAnswer, setCheckAnswer] = useState<number | null>(null)
  const handleClick = (key: number) => {
    if(checkAnswer === null){
      setCheckAnswer(key)
      
      setTimeout(() => {
        onAnswer(key)
        setCheckAnswer(null)
      }, 3000);
    }
  }
  return (
    <>
      <div className="flex flex-col gap-3 pb-4 border-b border-gray-500">

        <h1 className="text-xl font-bold">{question.question}</h1>
        <div className="flex flex-col gap-2">
         {
          question?.options.map((item, key) => {
            return(
              <div 
              onClick = {() => handleClick(key)}
              key = {key}  className={`px-2 py-2 rounded-md bg-blue-400 border border-blue-600 hover:bg-blue-200
              ${checkAnswer !== null ? 'cursor-auto': ' cursor-pointer hover:opacity-60'}
              ${checkAnswer !== null && checkAnswer === key && checkAnswer === question.answer && "bg-green-400 border-green-600 "}
              ${checkAnswer !== null && checkAnswer === key && checkAnswer !== question.answer && 'bg-red-400  border-red-600'}
              `}
              >
                {item}
              </div>
            )
          })
         }
        </div>
      </div>
    </>
  )
}

export default QuestionArea