import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const COLORS = [
  { name: 'Amarillo', class: 'text-yellow-400' },
  { name: 'Azul', class: 'text-blue-500' },
  { name: 'Naranja', class: 'text-orange-500' },
  { name: 'Negro', class: 'text-black' },
  { name: 'Blanco', class: 'text-white' },
  { name: 'Rojo', class: 'text-red-500' },
  { name: 'Verde', class: 'text-green-500' },
  { name: 'Purpura', class: 'text-purple-600' },
]

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)]
}

function getRandomWord() {
  return COLORS[Math.floor(Math.random() * COLORS.length)].name
}

function CustomGamePage() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [startTime, setStartTime] = useState(Date.now())
  const [reactionTimes, setReactionTimes] = useState<number[]>([])
  const [showWord, setShowWord] = useState(true)
  const [wordObj, setWordObj] = useState({ word: '', color: { name: '', class: '' } })
  const [timeLeft, setTimeLeft] = useState(30)
  const [alert, setAlert] = useState('')
  const [wordsShown, setWordsShown] = useState(0)
  const [gameFinished, setGameFinished] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wordTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setWordObj({ word: getRandomWord(), color: getRandomColor() })
    setStartTime(Date.now())
    setCurrent(0)
    setCorrect(0)
    setWrong(0)
    setReactionTimes([])
    setShowWord(true)
    setTimeLeft(10)
    setAlert('')
    setWordsShown(1)
  }, [])

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!)
          setGameFinished(true)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current!)
  }, [])

  useEffect(() => {
    if (showWord) {
      wordTimerRef.current = setTimeout(() => {
        nextWord()
      }, 3000)
      return () => clearTimeout(wordTimerRef.current!)
    }
  }, [wordObj, showWord, timeLeft])


  useEffect(() => {
  if (gameFinished) {
    const totalAnswers = correct + wrong;
    const percent = totalAnswers ? Math.round((correct / totalAnswers) * 100) : 0;

    navigate('/resultados', {
      state: {
        correct,
        wrong,
        total: totalAnswers,
        percent,
        time: 30,
        avgReaction: reactionTimes.length
          ? (reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length).toFixed(2)
          : 0,
        mode: "Normal"
      },
    })
  }
}, [gameFinished, navigate, correct, wrong, reactionTimes])

  function handleCheck() {
    if (wordObj.word === wordObj.color.name) {
      setCorrect(c => c + 1)
    } else {
      setWrong(w => w + 1)
      setAlert('¡Incorrecto!')
      setTimeout(() => setAlert(''), 1000)
    }
    setReactionTimes(rt => [...rt, (Date.now() - startTime) / 1000])
    nextWord()
  }

  function handleWrong() {
    if (wordObj.word !== wordObj.color.name) {
      setCorrect(c => c + 1)
    } else {
      setWrong(w => w + 1)
      setAlert('¡Incorrecto!')
      setTimeout(() => setAlert(''), 1000)
    }
    setReactionTimes(rt => [...rt, (Date.now() - startTime) / 1000])
    nextWord()
  }

  function nextWord() {
    if (timeLeft > 0) {
      setWordObj({ word: getRandomWord(), color: getRandomColor() })
      setStartTime(Date.now())
      setShowWord(true)
      setWordsShown(ws => ws + 1)
    } else {
      finishGame()
    }
  }



  function finishGame() {
    clearInterval(timerRef.current!)
    clearTimeout(wordTimerRef.current!)
    setGameFinished(true)
  }

  return (
    <div className="rounded-4xl min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 flex flex-col p-4">
      <header className="flex items-center justify-between text-white text-sm">
        <div className="flex-1 flex justify-around">
          <div className="flex flex-col items-center gap-1">
            {wordsShown}
            <span>Palabras desplegadas</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            {correct}
            <span>Correctas</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            {wrong}
            <span>Incorrectas</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            {timeLeft} s
            <span>Tiempo restante</span>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        {showWord && (
          <h1 className={`text-7xl font-extrabold cursor-pointer ${wordObj.color.class}`}>
            {wordObj.word}
          </h1>
        )}
        {alert && (
          <div className="mt-6 text-red-500 text-2xl font-bold">{alert}</div>
        )}
      </main>
      <footer className="flex flex-col gap-4">
        <div className="flex justify-center gap-20 bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-4">
          <button
            className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
            onClick={handleCheck}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <button
            className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
            onClick={handleWrong}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default CustomGamePage



