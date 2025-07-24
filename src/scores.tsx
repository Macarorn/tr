import React from "react";
import { Link } from "react-router-dom";
import {
  Description,
  Field,
  Fieldset,
  Label,
  Legend,
  Select,
} from "@headlessui/react";
import clsx from "clsx";
import { BiChevronDown } from "react-icons/bi";

function ScoresPage() {
  return (
    <div className="min-h-screen rounded-2xl bg-linear-65 from-purple-500 to-pink-500 bg-cover bg-center flex items-center justify-center">
      <div className="bg-black bg-opacity-70 backdrop-blur-md rounded-2xl p-10 text-center text-white w-full max-w-2xl mt-10 mb-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Puntajes</h1>
        <hr className="border-purple-500 w-100 mx-auto mb-4" />
        <p className="text-sm text-gray-300 mb-8">
          Estos son los 5 mejores puntajes en local
        </p>
        <div className="w-full max-w-lg px-4">
          <Fieldset className="ml-20 space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-start space-x-4">
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      1
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      1:35 pm
                    </p>
                  </div>
                  <div className="flex-row min-w-0">
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    20%
                  </div>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Porcentaje de aciertos
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      2
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      1:35 pm
                    </p>
                  </div>
                  <div className="flex-row min-w-0">
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    70%
                  </div>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Porcentaje de aciertos
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      3
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      1:35 pm
                    </p>
                  </div>
                  <div className="flex-row min-w-0">
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    70%
                  </div>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Porcentaje de aciertos
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      4
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      1:35 pm
                    </p>
                  </div>
                  <div className="flex-row min-w-0">
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    70%
                  </div>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Porcentaje de aciertos
                    </p>
                  </div>
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      5
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      1:35 pm
                    </p>
                  </div>
                  <div className="flex-row min-w-0">
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    70%
                  </div>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Porcentaje de aciertos
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </Fieldset>
        </div>
        <Link to="/">
          <button className="ml-5 mt-5 bg-gradient-to-r from-pink-500 to-blue-500 px-12 py-3 rounded-lg text-xl font-semibold shadow-lg mb-6 hover:scale-105 transition-transform">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ScoresPage;
