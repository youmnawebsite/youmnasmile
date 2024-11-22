'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const questions = [
  {
    question: "إيه أكتر حاجة بتحبها يمنى؟",
    options: ["الشوكولاتة", "النوم", "تزعّلني!"],
    correctAnswer: 0
  },
  {
    question: "لو يمنى طلبت حاجة، أعمل إيه؟",
    options: ["أجيبها فوراً", "أقول حاضر وبعدين أهرب", "أفكر، وأرجع أجيبها برضه"],
    correctAnswer: 0
  }
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = () => {
    if (selectedAnswer !== null) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }
  }

  if (showResult) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
        <h2 className="text-3xl font-bold mb-8">شايفة؟ أنا حافظك صم. سامحيني بقى!</h2>
        <Link href="/gift">
          <Button className="text-xl py-4 px-6 rounded-full">الهدية التالية</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h2 className="text-3xl font-bold mb-8">{questions[currentQuestion].question}</h2>
      <RadioGroup className="mb-8" onValueChange={(value) => setSelectedAnswer(parseInt(value))}>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2 space-x-reverse">
            <RadioGroupItem value={index.toString()} id={`option-${index}`} />
            <Label htmlFor={`option-${index}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
      <Button onClick={handleAnswer} disabled={selectedAnswer === null} className="text-xl py-4 px-6 rounded-full">
        {currentQuestion < questions.length - 1 ? "السؤال التالي" : "إنهاء الاختبار"}
      </Button>
    </div>
  )
}

