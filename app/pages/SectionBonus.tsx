"use client";
import React from "react";
import { FaUsers, FaGraduationCap, FaBook, FaGift } from "react-icons/fa";
import { motion } from "framer-motion"; 
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function PatternBG() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* brilho radial branco + roxo */}
      <div
        className="pointer-events-none absolute -right-1/3 top-1/2 h-[140vh] w-[140vh] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.40), rgba(237,233,254,0.28) 50%, transparent 75%)",
        }}
      />
      {/* linhas tracejadas diagonais */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dashedLinesS7" width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="50" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6 6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashedLinesS7)" />
      </svg>
    </div>
  );
}

function BonusCard({
  icon,
  title,
  text,
  tag,
  image,
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
  tag?: string;
  image?: string; // opcional: imagem decorativa (ex.: pulseira)
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border
     border-violet-300 bg-white/85 p-5 shadow-sm backdrop-blur"
     style={{
          background:
            "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(800px 500px at 50% 85%, rgba(168,85,247,0.18), transparent 60%)",
        }}>
      <div className="mb-3 flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet-100 text-violet-700">{icon}</span>
        <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
        {tag && (
          <span className="ml-auto rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-violet-600">
            {tag}
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed text-neutral-700">{text}</p>

      {image && (
        <div className="mt-4 rounded-2xl  p-3">
         {image && (
  <div className="mt-4 rounded-2xl p-3">
    {image.includes("aulas.png") || image.includes("ebook.png") ? (
      <img
        src={image}
        alt="Bonus"
        className="mx-auto h-48 w-full rounded-2xl object-cover object-left shadow-md ring-1 ring-violet-200/50 transition-all duration-500 group-hover:scale-[1.05]"
      />
    ) : (
      <img
        src={image}
        alt="Bonus"
        className="mx-auto h-48 object-contain"
      />
    )}
  </div>
)}

        </div>
      )}
    </div>
  );
}

export default function SectionBonus() {
  return (
    <section id="bonus" className="relative isolate overflow-hidden py-16 sm:py-24"
     style={{
  background:
    "radial-gradient(circle at 50% 20%, #ede9fe 0%, #ddd6fe 40%, #c4b5fd 70%)",
}}
>
      {/* <PatternBG /> */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
 
><div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
     
        <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">
          Bônus exclusivos para membros
        </h2>
        <p className="mt-2 max-w-prose text-sm text-neutral-700">
          Ao entrar para a comunidade, você desbloqueia benefícios que aceleram sua evolução e mantêm sua motivação em alta.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <BonusCard
            icon={<FaUsers />}
            title="Comunidade MC"
            tag="Incluso"
            text={
              <>
                Tenha acesso à nossa comunidade e conheça outros membros que, assim como você, estão em busca da sua melhor versão. Além disso, ao fazer parte da nossa comunidade você conquista gratuitamente a Pulseira VIP Member da MC.

              </>
            }
            image="img/platform/pulseira.png"
          />

          <BonusCard
            icon={<FaGraduationCap />}
            title="Muscle Club Academy"
            tag="Acesso grátis"
            text={
              <>
                Tenha acesso gratuito à nossa plataforma. Na MC Academy você terá acesso às melhores aulas sobre nutrição e treinamento com base em evidências. Aqui, você constrói seu melhor físico e conquista muito conhecimento. 

              </>
            }
            image="img/platform/aulas.png"
          />

          <BonusCard
            icon={<FaBook />}
            title="E-books e Guias"
            tag="Biblioteca"
            text={
              <>
                Como se já não bastasse o acesso à plataforma, você também terá acesso a todos os e-books e guias que desenvolvemos, de forma totalmente gratuita.  

              </>
            }
            image="img/platform/ebook.png"
          />
        </div>

       
      </div></motion.div>
      

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}
