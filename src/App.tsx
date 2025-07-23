import React from 'react'
import './App.css'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  AiOutlineAppstore,
  AiOutlinePause,
  AiOutlineClockCircle,
  AiOutlineCheck,
  AiOutlineClose,
} from 'react-icons/ai'
import { FaClipboardList } from 'react-icons/fa'

// Página principal (ahora será el juego)
function Home() {
  return (
    <div className="rounded-4xl flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
      <h2 className="text-4xl font-bold mb-4">¡Bienvenido al Juego!</h2>
      <p>Aquí irá el contenido del juego.</p>
      <Link to="/juego">
        <button className="mt-8 px-6 py-3 bg-green-500 rounded-lg text-white font-bold hover:bg-green-600 transition">
          Iniciar
        </button>
      </Link>
    </div>
  )
}

// Página del inicio (ahora será la portada)
function GamePage() {
  return (
    <div className="rounded-4xl min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 flex flex-col p-4">
      {/* HEADER */}
      <header className="flex items-center justify-between text-white text-sm">
        {/* Métricas */}
        <div className="flex-1 flex justify-around">
          <div className="flex flex-col items-center gap-1">
            <AiOutlineAppstore size={20} />
            <span>28 Palabras</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaClipboardList size={20} />
            <span>Correctas</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <AiOutlineClockCircle size={20} />
            <span>12 s Tiempo</span>
          </div>
        </div>
        {/* Botón de pausa */}
        <button className="text-white">
          <AiOutlinePause size={24} />
        </button>
      </header>
      {/* PALABRA PRINCIPAL */}
      <main className="flex-1 flex items-center justify-center">
        <Link to="/"><h1 className="text-green-400 text-7xl font-extrabold cursor-pointer hover:underline">Purpura</h1></Link>
      </main>
      {/* FOOTER */}
      <footer className="flex flex-col gap-4">
        {/* Bonus */}
        <div className="self-end text-white text-sm">0 Bonus</div>
        {/* Controles */}
        <div className="flex justify-around bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-4">
          <button className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
            <AiOutlineCheck />
          </button>
          <button className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
            <AiOutlineClose />
          </button>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
