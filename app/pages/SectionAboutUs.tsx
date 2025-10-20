"use client";
import React from "react";
import { FaInstagram, FaEnvelope, FaYoutube, FaWhatsapp } from "react-icons/fa";

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
    className="w-full object-cover object-top sm:h-[30rem] lg:h-[35rem]" // Ajuste a altura conforme necessário
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
      bio: "Especialista em nutrição voltada para performance e resultados sustentáveis.Experiência internacional em preparação física e coachinExperiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.g para alto rendimento.",
      image: "img/socios/joao2.jpg",
      socials: {
        instagram: "https://www.instagram.com/joaoherker",
        email: "mailto:joaovictorherker@gmail.com",
        youtube: "https://www.youtube.com/@joaovictorherker",
        whatsapp: "https://wa.me/5516997572671?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
      },
    },
    {
      name: "Heitor Andrade",
      role: "Personal Trainer",
      bio: "Treinador com foco em hipertrofia, performance e prevenção de lesões.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.",
      image: "img/socios/heithor2.jpg",
      socials: {
        instagram: "https://www.instagram.com/_heitorandrade?igsh=c3Y5OXBhcGs1OHZh",
        email: "mailto:heitorandradessss@gmail.com",
      
        whatsapp: "https://wa.me/55619311-9395?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
       
      },
    },
    {
      name: "Jan Keller",
      role: "Coach de Bodybuilding",
      bio: "Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.Experiência internacional em preparação física e coaching para alto rendimento.",
      image: "img/socios/jam2.jpg",
      socials: {
        instagram: "Instagram.com/kellerestevam",
        email: "mailto:jankeller583@gmail.com",
       
        whatsapp: "https://wa.me/55319745-0000?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
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

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
       
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}
