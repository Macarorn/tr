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

function Home() {
  return (
    <div
      className="min-h-svw bg-linear-65 from-purple-500 to-pink-500 bg-cover bg-center flex items-center justify-center"
    >
      <div className="bg-black bg-opacity-70 backdrop-blur-md rounded-2xl p-10 text-center text-white w-full max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-2">Strooper</h1>
        <hr className="border-purple-500 w-20 mx-auto mb-4" />
        <p className="text-sm text-gray-300 mb-8">
          Un juego para probar tu habilidad y destreza
        </p>

        <Link to="/juego">
          <button className="bg-gradient-to-r from-pink-500 to-blue-500 px-12 py-3 rounded-lg text-xl font-semibold shadow-lg mb-6 hover:scale-105 transition-transform">
            Jugar
          </button>
        </Link>

        <div className="flex justify-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium">
            Ajustes
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md text-sm font-medium">
            Puntajes
          </button>
          <button className="bg-pink-300 hover:bg-pink-400 px-4 py-2 rounded-md text-sm font-medium text-black">
            Ayuda
          </button>
        </div>
      </div>
    </div>
  )
}


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
        <Link to="/">
          <h1 className="text-green-400 text-7xl font-extrabold cursor-pointer hover:underline">
            Purpura
          </h1>
        </Link>
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}
