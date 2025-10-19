import Link from "next/link";
import React from "react";


export default function About() {
  const experiences = [
    {

      title: "serviços gerais",
      company: "Bar e Restaurante Santana",
      period: "2018 - 2024",
      description: "Empresa familiar onde atuei em várias áreas, onde desenvolvi muitas Soft-Skills principalmente a comunicação que foi muito importante para meu crescimento profissional e pessoal pois lidava diretamente com o público e era um pouco timido.",
      skills: ["Atendimento ao cliente", "Trabalho em equipe", "Gestão de tempo"]
      
    },
    {
      
      title: "Desenvolvedor Full Stack e Arquiteto de Soluções",
      company: "Banco Pan / BTG Pactual - Aprendiz",
      period: "07/2024 - 10/2025",
      description: "Aqui foi onde tive minha primeira oportunidade para trabalhar com tecnologia, neste período atuei em duas equipes, uma que trabalhava como Platform Engineering onde consegui capacitar mais minha habilidades em back e front-end, e o outro time trabalhava com arquitetura técnica e de solução, onde desenvolvi muito minhas Hard Skills.",
      skills: ["Angular", "Node.js", "AWS", "Micro-serviços", "Docker, Podman", "Kubernetes", "TypeScript", "Java",  ]
    },

  ];

  const learningCycle = [
    {
      icon: "🎵",
      phase: "Música",
      description: "Sou apaixonado por musica e ouço praticamente todos os generos musicais, e sei tocar bateria e teclado."
  
    },
    {
      icon: "⚽",
      phase: "futebol",
      description: "Sou apaixonado por futebol, jogo com frequência e sou palmerense 💚"
      
    },
    {
      icon: "📚",
      phase: "Aprendizado",
      description: "Adoro aprender coisas novas, seja por meio de cursos, livros ou tutoriais online. Estou sempre buscando expandir meus conhecimentos."
  
    },
    {
      icon: "🎮",
      phase: "Jogos e Filmes",
      description: "Sou fã de jogos e filmes, gosto de jogar e assistir filmes nas horas vagas"
  
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Seção Principal */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            José Gabriel
          </h1>

          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-300 italic mb-6 font-medium">
            "Transformando ideias em algo real."
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios e oportunidades para criar soluções inovadoras.
          </p>

          <Link href="/contact" passHref>
            <button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold rounded-full px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Entre em contato
            </button>
          </Link>
        </div>

        {/* Sobre Mim */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">👨‍💻</span>
            Sobre Mim
          </h2>

          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Olá! Sou o José Gabriel, movido por curiosidade, criatividade e café. Desde cedo,
              sempre tive vontade de entender como as coisas funcionam e de transformar ideias em algo real.
               O que começou como pura curiosidade por tecnologia acabou se tornando uma verdadeira paixão.
            </p>

            <p>
              Gosto de aprender coisas novas, explorar ferramentas,
              testar ideias e ver como a inovação pode melhorar a vida das pessoas de um jeito simples e inteligente.
              Pra mim, tecnologia não é só sobre código ou sistemas é sobre resolver problemas, conectar pessoas e criar experiências que fazem sentido.
            </p>

            <p>
              Tenho um olhar curioso sobre o futuro e acredito que pensar diferente,
              colaborar e nunca parar de aprender são as chaves pra continuar evoluindo nesse mundo que muda o tempo todo.
            </p>

            <p>
              Fora do mundo da tecnologia, sou apaixonado por música, futebol, videogames, xadrez e momentos em família a acredito que boas conexões humanas são tão importantes quanto qualquer avanço.
            </p>

            <p>
              Meu objetivo é continuar aprendendo, compartilhando e contribuindo com projetos que realmente importam dentro e fora do universo digital.
            </p>
          </div>

        </div>

    
        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            Curiosidades sobre mim
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {learningCycle.map((phase, index) => (
              <div key={index} className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{phase.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{phase.phase}</h3>
                </div>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiência Profissional */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">💼</span>
            Trajetória Profissional
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Linha conectora */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-violet-500 to-purple-600"></div>
                )}

                <div className="flex items-start space-x-4">
                  {/* Ponto da timeline */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 bg-gray-700 rounded-xl p-6 border border-gray-600">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <span className="text-violet-400 font-medium">{exp.period}</span>
                    </div>

                    <p className="text-purple-300 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-gradient-to-r from-violet-500/20 to-purple-600/20 text-violet-300 text-sm rounded-full border border-violet-500/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-700 rounded-xl border border-gray-600">
            <p className="text-gray-300 text-center">
              🚀 <strong className="text-white">Próximos Passos:</strong> 
              Sempre em busca de novos desafios que me permitam crescer como Profissional e como pessoa,
               e que eu possa contribuir com soluções inovadoras para problemas complexos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
