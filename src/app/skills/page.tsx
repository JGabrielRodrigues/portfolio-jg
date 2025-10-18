import React from "react";
import Image from "next/image";

const hardSkills = [

  { name: "JavaScript", imageUrl: "/imgProject/javascript.png", level: 50},
  { name: "Java", imageUrl: "/imgProject/java.webp", level: 40 },
  { name: "SQL", imageUrl: "/imgProject/mySql.png", level: 40 },
  { name: "React", imageUrl: "/imgProject/react.png", level: 40 },
  { name: "Angular", imageUrl: "/imgProject/angular.png", level: 50 },
  { name: "Python", imageUrl: "/imgProject/python-imagem.png", level: 40 },
  { name: "Node.js", imageUrl: "/imgProject/nodee-js.png", level: 30 },
  { name: "AWS", imageUrl: "/imgProject/aws-logo.png", level: 30 },
  { name: "Micro-Serviços", imageUrl: "/imgProject/microservices.png", level: 30 },
];

const softSkills = [
  "Comunicação",
  "Trabalho em equipe",
  "Resolução de problemas",
  "Adaptabilidade",
  "Organização",
  "Pensamento crítico",
  "Gestão do tempo",
  "Criatividade",
  "Proatividade",
  "Inteligência emocional",
];

export default function Skills() {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Minhas Habilidades
      </h1>

      {/* Hard Skills */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-purple-300 text-center">Hard Skills</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
          {hardSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-6 bg-white/5 rounded-xl p-5 shadow-md backdrop-blur-sm border border-white/10 hover:scale-[1.02] transition-transform"
            >
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                width={60}
                height={60}
                className="rounded-md object-contain"
              />

              <div className="w-full">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="text-sm text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-8 text-blue-300 text-center">Soft Skills</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 text-white py-4 px-6 rounded-xl border border-white/10 shadow backdrop-blur-sm hover:scale-[1.02] transition-transform"
            >
              <p className="text-lg font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
