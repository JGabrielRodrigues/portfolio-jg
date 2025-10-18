"use client";


import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between w-full mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center">
          <p className="text-2xl font-bold text-gray-800">Portfólio do JG</p>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
              >
                Sobre Mim
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
              >
                Projetos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão do menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          {isOpen ? (
            // Ícone de fechar (X)
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Ícone de menu (três linhas)
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden bg-white/95 border-t border-gray-200 shadow-md animate-slideDown">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-medium shadow"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
