import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "web-scraping G1 News",
      description:
        "Web-scraping de notícias do G1, que pega links e títulos automaticamente.",
      gitUrl: "https://github.com/JGabrielRodrigues/web-scraping_G1",
      icon: <FaGithub />, // 👈 Ícone do GitHub
    },
    {
      name: "Ecommerce Pizzaria",
      description:
        "Site de pizzaria com personalização de pedidos. Feito com HTML e CSS avançado.",
      gitUrl: "https://github.com/JGabrielRodrigues/pizzaria-novais",
      icon: <FaGithub />,
    },
    {
      name: "Ecommerce roupas",
      description: "CRUD de uma loja de roupas em PHP.",
      gitUrl: "https://github.com/JGabrielRodrigues/PI-Charlie_crud",
      icon: <FaGithub />,
    },
    {
      name: "Pokedex API",
      description: "Utilização da PokéAPI em React.",
      gitUrl: "https://github.com/JGabrielRodrigues/pokedex-react",
      icon: <FaGithub />,
    },
    {
      name: "Apadrinhe-me",
      description:
        "Rede social criada para ajudar e engajar jovens e crianças a encontrarem padrinhos e madrinhas dispostos a apoiá-los em sua jornada pessoal e profissional.",
      gitUrl: "https://www.linkedin.com/company/apadrinhe-me/?viewAsMember=true",
      icon: <FaLinkedin />, 
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-16"
    >
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Projetos Desenvolvidos
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Abaixo estão alguns projetos construídos para fins de aprendizado,
          prática e portfólio profissional.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-[1.02] transition-transform shadow-xl"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {project.name}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded-full transition"
            >
              {project.icon}
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
