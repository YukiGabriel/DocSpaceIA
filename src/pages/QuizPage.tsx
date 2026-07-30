import { useState, useMemo } from 'react'
import { quizQuestions } from '../data/quiz'

export default function QuizPage() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)
  const [questions, _] = useState(() => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 10)
  })

  const handleAnswer = (i: number) => {
    if (answered !== null) return
    setAnswered(i)
    if (i === questions[current].correct) setScore((s) => s + 1)
  }

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1)
      setAnswered(null)
    } else {
      setFinished(true)
    }
  }

  const restart = () => {
    setCurrent(0)
    setScore(0)
    setAnswered(null)
    setFinished(false)
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <main className="h-full bg-gray-900 overflow-y-auto">
        <div className="px-4 py-16 max-w-lg mx-auto text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-white mb-4">Quiz Finalizado!</h1>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">{pct}%</span>
            </div>
            <p className="text-gray-300 text-lg mb-2">
              Você acertou <span className="text-blue-400 font-bold">{score}</span> de{' '}
              <span className="text-blue-400 font-bold">{questions.length}</span> perguntas
            </p>
            <p className="text-gray-500 mb-6">
              {pct === 100 ? 'Perfeito! Você é um astrônomo nato!' :
               pct >= 70 ? 'Muito bom! Seu conhecimento espacial é impressionante.' :
               pct >= 40 ? 'Bom trabalho! Continue estudando o cosmos.' :
               'Continue explorando! O universo tem muito a ensinar.'}
            </p>
            <button
              onClick={restart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-blue-600/25"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </main>
    )
  }

  const q = questions[current]

  return (
    <main className="h-full bg-gray-900 overflow-y-auto">
      <div className="px-4 py-16 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Quiz Astronômico</h1>
          <p className="text-gray-400">Pergunta {current + 1} de {questions.length}</p>
          <div className="w-full bg-gray-700 rounded-full h-1.5 mt-4 max-w-xs mx-auto">
            <div
              className="bg-blue-600 h-1.5 rounded-full transition-all"
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold text-white mb-6 leading-relaxed">{q.question}</h2>
          <div className="space-y-3">
            {q.options.map((opt, i) => {
              const isCorrect = i === q.correct
              const isSelected = i === answered
              let bg = 'bg-gray-800 hover:bg-gray-700 border-gray-700/50'
              if (answered !== null) {
                if (isCorrect) bg = 'bg-emerald-900/50 border-emerald-600'
                else if (isSelected) bg = 'bg-red-900/50 border-red-600'
                else bg = 'bg-gray-800/30 border-gray-700/30 opacity-50'
              }
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className={`w-full text-left flex items-center gap-3 p-4 rounded-xl border transition ${bg}`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                    answered !== null
                      ? isCorrect ? 'bg-emerald-600 text-white' : isSelected ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-500'
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-gray-200">{opt}</span>
                </button>
              )
            })}
          </div>

          {answered !== null && (
            <button
              onClick={next}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition shadow-lg shadow-blue-600/25"
            >
              {current < questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
