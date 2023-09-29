import { Question } from '@/types/Question'
import React from 'react'
type Props = {
  questions: Question[]
  answers: number[]
}
const Results = ({questions, answers}: Props) => {
  return (
    <div>
      {
        questions.map((item, key) => {
          return (
            <div key={key} className="mb-3">
              <div className="font-bold text-xl">
                <span>[{item.answer === answers[key] ? 'Acertou': 'Errou'}] - </span>
                {item.options[item.answer]}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Results