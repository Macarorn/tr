import React from 'react'
import './App.css'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import GamePage from './GamePage'
import ResultsPage from './results'
import CustomPage from './custom'
import ScoresPage from './scores'
import CustomGamePage from './CustomGamePage'

function Home() {
  return (
    <div
      className="min-h-screen rounded-2xl bg-linear-65 from-purple-500 to-pink-500 bg-cover bg-center flex items-center justify-center"
    >
      <div className="bg-black bg-opacity-70 backdrop-blur-md rounded-2xl p-10 text-center text-white w-full max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Strooper</h1>
        <hr className="border-purple-500 w-100 mx-auto mb-4" />
        <p className="text-sm text-gray-300 mb-8">
          Un juego para probar tu habilidad y destreza
        </p>
        <Link to="/juego">
          <button className="bg-gradient-to-r from-pink-500 to-blue-500 px-12 py-3 rounded-lg text-xl font-semibold shadow-lg mb-6 hover:scale-105 transition-transform">
            Jugar
          </button>
        </Link>
        <div className="flex justify-center gap-4">
          <Link to="/personalizado">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium">
            Personalizado
          </button>
          </Link>
          <Link to="/puntajes">
          <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md text-sm font-medium">
            Puntajes
          </button>
          </Link>
          {/* <button className="bg-pink-300 hover:bg-pink-400 px-4 py-2 rounded-md text-sm font-medium text-black">
            Ayuda
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego" element={<GamePage />} />
        <Route path="/resultados" element={<ResultsPage />} />
        <Route path="/personalizado" element={<CustomPage />} />
        <Route path="/puntajes" element={<ScoresPage />} />
        <Route path="/juego-personalizado" element={<CustomGamePage />} />
      </Routes>
    </BrowserRouter>
  )
}
