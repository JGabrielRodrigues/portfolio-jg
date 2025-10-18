import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Contact Links */}
        <div className="bg-gray-800/70 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Conecte-se Comigo
          </h3>

          <div className="space-y-6">
            <a
              href="https://www.linkedin.com/in/jgabriel-rodrigues/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-200 group hover:scale-[1.02] border border-gray-600"
            >
              <FaLinkedin className="text-blue-400 group-hover:text-blue-500 transition-colors" size={32} />
              <div>
                <p className="font-semibold text-white text-lg">LinkedIn</p>
                <p className="text-gray-300">Conecte-se profissionalmente</p>
              </div>
            </a>

            <a
              href="https://github.com/JGabrielRodrigues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-200 group hover:scale-[1.02] border border-gray-600"
            >
              <FaGithub className="text-white group-hover:text-gray-300 transition-colors" size={32} />
              <div>
                <p className="font-semibold text-white text-lg">GitHub</p>
                <p className="text-gray-300">Veja meus projetos e código</p>
              </div>
            </a>

            <a
              href="mailto:josegabrielsantana19@gmail.com"
              className="flex items-center gap-6 p-6 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-200 group hover:scale-[1.02] border border-gray-600"
            >
              <FaEnvelope className="text-purple-400 group-hover:text-purple-500 transition-colors" size={32} />
              <div>
                <p className="font-semibold text-white text-lg">E-mail</p>
                <p className="text-gray-300">Entre em contato direto</p>
              </div>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 São Paulo, Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
