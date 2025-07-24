import React from "react";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

function ResultsPage() {
  const location = useLocation();
  const {
    correct = 0,
    wrong = 0,
    total = 0,
    percent = 0,
    time = 0,
    avgReaction = 0,
    mode = "Normal",
  } = location.state || {};

  const shareText = `Jugué Strooper (${mode}) y obtuve ${correct} correctas de ${total} palabras (${percent}%). Mi tiempo de reacción promedio fue ${avgReaction} segundos. ¿Puedes superarme?`;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https://strooper-app.com&quote=${encodeURIComponent(
    shareText
  )}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}&url=https://strooper-app.com`;

  return (
    <div className="min-h-screen rounded-2xl bg-linear-65 from-purple-500 to-pink-500 bg-cover bg-center flex items-center justify-center">
      <div className="bg-black mt-10 mb-10 bg-opacity-70 backdrop-blur-md rounded-2xl p-10 text-center text-white w-full max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Resultados</h1>
        <hr className="border-purple-500 w-100 mx-auto mb-4" />
        <p className="text-sm text-gray-300 mb-8">Tu puntuación final es de:</p>
          
        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400"> 
          <li className="flex items-center">
            Total palabras mostradas:
            <strong className="text-white ml-3">{correct + wrong}</strong>
          </li>
          <li className="flex items-center">
            Palabras correctas:
            <strong className="text-white ml-3">{correct}</strong>
          </li> 
          <li className="flex items-center">
            Palabras incorrectas:
            <strong className="text-white ml-3">{wrong}</strong>
          </li>
          <li className="flex items-center">
            Puntaje total:
            <strong className="text-white ml-3">{correct - wrong}</strong>
          </li>
          <li className="flex items-center">
            Porcentaje de aciertos:
            <strong className="text-white ml-3">{percent}%</strong>
          </li>
          <li className="flex items-center">
            Tiempo total:
            <strong className="text-white ml-3">{time}</strong>
          </li>
          <li className="flex items-center">
            Promedio de tiempo de reacción:
            <strong className="text-white ml-3 text-sm">
              {avgReaction} segundos
            </strong>
          </li>
          <li className="flex items-center">
            Modo de juego:
            <strong className="text-white ml-3 text-sm">{mode}</strong>
          </li>
        </ul>
        <Link to="/juego">
          <button className="mt-5 bg-gradient-to-r from-pink-500 to-blue-500 px-12 py-3 rounded-lg text-xl font-semibold shadow-lg mb-6 hover:scale-105 transition-transform">
            Jugar de nuevo
          </button>
        </Link>
        <Link to="/">
          <button className="ml-5 mt-5 bg-gradient-to-r from-pink-500 to-blue-500 px-12 py-3 rounded-lg text-xl font-semibold shadow-lg mb-6 hover:scale-105 transition-transform">
            Volver
          </button>
        </Link>
        <h2 className="text-2xl font-bold mb-4">Comparte tus resultados</h2>
        <div className="flex justify-center gap-4">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <AiFillFacebook size={24} />
            <span className="w-full ml-1">Facebook</span>
          </a>
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <AiFillTwitterCircle size={24} />
            <span className="w-full ml-1">Twitter (X)</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
