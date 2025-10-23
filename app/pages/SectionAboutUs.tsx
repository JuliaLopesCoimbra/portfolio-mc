"use client";
import React from "react";
import { FaInstagram, FaEnvelope, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"; 

function PatternBG() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="pointer-events-none absolute -left-1/3 top-1/2 h-[140vh] w-[140vh] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.40), rgba(237,233,254,0.28) 50%, transparent 75%)",
        }}
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dashedLinesS9"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="50"
              stroke="#7c3aed"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashedLinesS9)" />
      </svg>
    </div>
  );
}

interface Member {
  name: string;
  role?: string;
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    email?: string;
    youtube?: string;
    whatsapp?: string;
  };
}

function MemberRow({
  member,
  reverse = false,
}: {
  member: Member;
  reverse?: boolean;
}) {
  return (
    <div
      className={[
        "grid items-stretch gap-6 lg:gap-10",
        "sm:grid-cols-2",
        reverse ? "sm:[&>*:first-child]:order-2" : "",
      ].join(" ")}
    >
      {/* Foto */}
      <div className="relative overflow-hidden rounded-3xl border border-violet-200/70 shadow-sm">
  <img
  src={member.image}
  alt={member.name}
  className={`w-full object-cover sm:h-[30rem] lg:h-[35rem] ${
    member.name === "Heitor Andrade" ? "object-[center_65%]" : "object-top"
  }`}
/>

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
</div>


      {/* Texto + redes sociais */}
      <div className="flex flex-col justify-center rounded-3xl border border-violet-300/50 bg-white/80 p-6 backdrop-blur">
        <h3 className="text-2xl font-semibold text-neutral-900">{member.name}</h3>
        {member.role && (
          <p className="mt-1 text-sm font-medium text-violet-700">{member.role}</p>
        )}
        <p className="mt-3 text-base leading-relaxed text-neutral-700">{member.bio}</p>

        {/* Social icons */}
        <div className="mt-4 flex gap-4 text-violet-600">
          {member.socials.instagram && (
            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-5 w-5 hover:text-violet-800 transition-colors" />
            </a>
          )}
          {member.socials.email && (
            <a href={`mailto:${member.socials.email}`}>
              <FaEnvelope className="h-5 w-5 hover:text-violet-800 transition-colors" />
            </a>
          )}
          {member.socials.youtube && (
            <a href={member.socials.youtube} target="_blank" rel="noopener noreferrer">
              <FaYoutube className="h-5 w-5 hover:text-violet-800 transition-colors" />
            </a>
          )}
          {member.socials.whatsapp && (
            <a href={`https://wa.me/${member.socials.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-5 w-5 hover:text-violet-800 transition-colors" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SectionAboutUs() {
  const members: Member[] = [
    {
      name: "João Herker",
      role: "Nutricionista Esportivo",
      bio: "João Saia Herker é nutricionista graduado, com pós-graduação em Bodybuilding Coach e Metabolismo Humano, especializado em nutrição esportiva, saúde e estética. Também é atleta de fisiculturismo e influenciador digital, reconhecido por traduzir ciência em prática de forma clara e aplicada ao cotidiano. Com experiência sólida na área, já orientou mais de 500 pessoas em processos de transformação física e metabólica — entre elas, pessoas com obesidade, falsos magros, indivíduos com extrema magreza, atletas de luta, maratonistas, atletas híbridos e fisiculturistas. Sua filosofia profissional une teoria e prática em perfeita sintonia, respeitando o metabolismo individual e ajustando o timing das estratégias nutricionais para otimizar resultados. Acredita que a verdadeira evolução é alcançada quando ciência, constância e individualidade caminham juntas.",
      image: "img/socios/joao2.jpg",
      socials: {
        instagram: "https://www.instagram.com/joaoherker",
        email: "mailto:joaovictorherker@gmail.com",
        youtube: "https://www.youtube.com/@joaovictorherker",
        whatsapp: "5516997572671?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
      },
    },
    {
      name: "Heitor Andrade",
      role: "Personal Trainer",
      bio: "Heitor Andrade é Profissional de Educação Física (CREF 015234 G/DF), treinador e especialista em Nutrição Esportiva. Com uma metodologia baseada em ciência e prática, já transformou a vida de mais de 500 alunos, ajudando desde quem busca ganho de massa muscular e redução de gordura corporal, até aqueles que desejam melhorar a qualidade de vida através do exercício físico bem estruturado.Além de treinador, Heitor é influenciador digital, acumulando mais de 200 mil seguidores somando todas as suas redes sociais, onde compartilha diariamente conteúdos sobre treinamento, nutrição e estilo de vida. “Transformo ciência em resultado. Evolua treinando menos e de forma inteligente.”",
      image: "img/socios/heithor2.jpg",
      socials: {
        instagram: "https://www.instagram.com/_heitorandrade?igsh=c3Y5OXBhcGs1OHZh",
        email: "mailto:heitorandradessss@gmail.com",
      
        whatsapp: "556193119395?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
       
      },
    },
    {
      name: "Jan Keller",
      role: "Bodybuilding",
      bio: "Jan Keller é atleta de fisiculturismo natural, praticante de corrida, artes marciais e outras modalidades esportivas. Graduado em Nutrição e empresário no setor fitness, dedica-se a transformar vidas por meio da nutrição esportiva.Com uma abordagem baseada em ciência e consistência, acredita que é possível alcançar um físico saudável e estético sem o uso de esteroides anabolizantes e com flexibilidade na rotina. Sua missão é ajudar cada pessoa a atingir sua melhor versão de forma sustentável, flexível e alinhada ao estilo de vida individual.",
      image: "img/socios/jam2.jpg",
      socials: {
        instagram: "https://www.instagram.com/kellerestevam",
        email: "mailto:jankeller583@gmail.com",
       
        whatsapp: "553197450000?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
      },
    },
  ];

  return (
    <section
      id="sobre"
      className="relative isolate overflow-hidden py-16 sm:py-24"
      style={{
        background: "radial-gradient(circle at 50% 20%, #ffffff, #ede9fe 70%)",
      }}
    >
      <PatternBG />
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
 
>  <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
       
        <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">
          Quem somos nós
        </h2>
        <p className="mt-2 max-w-prose text-sm text-neutral-700">
          Conheça os especialistas por trás da Muscle Club. Profissionais dedicados a transformar vidas com acompanhamento de verdade.
        </p>

        <div className="mt-10 space-y-10 lg:space-y-14">
          {members.map((m, i) => (
            <MemberRow key={i} member={m} reverse={i % 2 === 1} />
          ))}
        </div>
      </div></motion.div>
    

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}
