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

  function CustomPage() {
    return (
      <div className="min-h-screen rounded-2xl bg-linear-65 from-purple-500 to-pink-500 bg-cover bg-center flex items-center justify-center">
        <div className="bg-black bg-opacity-70 backdrop-blur-md rounded-2xl p-10 text-center text-white w-full max-w-2xl mt-10 mb-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Personalizado
          </h1>
          <hr className="border-purple-500 w-100 mx-auto mb-4" />
          <p className="text-sm text-gray-300 mb-8">
            Aquí puedes modificar las configuraciones del juego y crear un juego a
            tu medida
          </p>
          <div className="w-full max-w-lg px-4">
            <Fieldset className="ml-20 space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
              <Field className="flex flex-col">
                <Label className="text-left text-sm/6 font-medium text-white">
                  Niveles
                </Label>
                <Description className="text-left text-xs/6 text-white/50">
                  Opciones de tiempo por palabra:
                </Description>
                <div className="relative">
                  <Select
                    className={clsx(
                      "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                      "*:text-black"
                    )}
                  >
                    <option>Dios: 1 segundo por palabra.</option>
                    <option>Veterano: 2 segundos por palabra.</option>
                    <option>Novato: 3 segundos por palabra.</option>
                    <option>Personalizado</option>
                  </Select>
                  <span className="group pointer-events-none absolute mt-2.5 top-2.5 right-2.5 size-4 fill-white/60">
                    <BiChevronDown />
                  </span>
                </div>
              </Field>

              <Field>
                <div className="flex flex-col items-left my-6">
                  <label
                    htmlFor="quantity-input"
                    className="text-left block mb-2 text-sm font-medium text-white"
                  >
                    Tiempo por palabra
                  </label>
                  <Description className="text-left text-xs/6 text-white/50">
                  Puedes modificar cuánto se muestra la palabra en seg.
                  </Description>
                  <div className="flex justify-center items-center w-full mt-2">
                    <div className="relative flex align-center justify-center items-center max-w-[8rem]">
                      <button
                        type="button"
                        className="bg-white/5 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-none rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-0 focus:outline-none"
                        onClick={() => {
                          const input = document.getElementById(
                            "quantity-input"
                          ) as HTMLInputElement;
                          if (input)
                            input.value = String(
                              Math.max(0, Number(input.value) - 1)
                            );
                        }}
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        className="border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 bg-white/5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue="3"
                        required
                        maxLength={5}
                        pattern="[0-9]*"
                      />
                      <button
                        type="button"
                        className="bg-white/5 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-none rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-0 focus:outline-none"
                        onClick={() => {
                          const input = document.getElementById(
                            "quantity-input"
                          ) as HTMLInputElement;
                          if (input)
                            input.value = String(
                              Math.min(99999, Number(input.value) + 1)
                            );
                        }}
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Field>
              
              <Field>
                <div className="flex flex-col items-left mt-6">
                  <label
                    htmlFor="quantity-input"
                    className="text-left block mb-2 text-sm font-medium text-white"
                  >
                    Duración total del juego
                  </label>
                  <Description className="text-left text-xs/6 text-white/50">
                  Puedes modificar cuánto durará el juego en seg.
                  </Description>
                  <div className="flex justify-center items-center w-full mt-2">
                    <div className="relative flex align-center justify-center items-center max-w-[8rem]">
                      <button
                        type="button"
                        className="bg-white/5 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-none rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-0 focus:outline-none"
                        onClick={() => {
                          const input = document.getElementById(
                            "quantity-input"
                          ) as HTMLInputElement;
                          if (input)
                            input.value = String(
                              Math.max(0, Number(input.value) - 1)
                            );
                        }}
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        className="border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 bg-white/5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue="30"
                        required
                        maxLength={5}
                        pattern="[0-9]*"
                      />
                      <button
                        type="button"
                        className="bg-white/5 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-none rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-0 focus:outline-none"
                        onClick={() => {
                          const input = document.getElementById(
                            "quantity-input"
                          ) as HTMLInputElement;
                          if (input)
                            input.value = String(
                              Math.min(99999, Number(input.value) + 1)
                            );
                        }}
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Field>
            </Fieldset>
          </div>
          <Link to="/juego">
            <button className="mt-5 bg-gradient-to-r from-pink-500 to-blue-500 px-12 py-3 rounded-lg text-xl font-semibold shadow-lg mb-6 hover:scale-105 transition-transform">
              Iniciar
            </button>
          </Link>
          <Link to="/">
            <button className="ml-5 mt-5 bg-gradient-to-r from-pink-500 to-blue-500 px-12 py-3 rounded-lg text-xl font-semibold shadow-lg mb-6 hover:scale-105 transition-transform">
              Volver
            </button>
          </Link>
        </div>
      </div>
    );
  }

  export default CustomPage;
