"use client";
import React from "react";
import {
  FaUsers,
  FaGraduationCap,
  FaBook,
  FaGift,
  FaCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";


export default function SectionBonusRefatorado() {
  return (
    <section
      id="bonus"
      className="relative isolate overflow-hidden py-16 sm:py-24"
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
      >
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <header className="max-w-3xl">
            <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">
              Bônus exclusivos para membros
            </h2>
            <p className="mt-2 text-sm text-neutral-700">
              Ao entrar para a comunidade, você desbloqueia benefícios que
              aceleram sua evolução e mantêm sua motivação em alta.
            </p>
          </header>

          {/* ==== BLOCO 1 – ACADEMY (com duas fotos) ==== */}
          <div
            className="mt-10 grid items-center gap-8 rounded-3xl border border-violet-200/60 bg-white/70 p-6 md:grid-cols-2 md:p-10"
            style={{
              // border:"solid 1px red",
              background:
                "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.18), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(34,211,238,0.14), transparent 60%), radial-gradient(800px 500px at 50% 85%, rgba(168,85,247,0.14), transparent 60%)",
            }}
          >
            <div
            // style={{border:"solid 1px blue"}}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-violet-700 ring-1 ring-violet-200">
                <FaGraduationCap className="h-3.5 w-3.5" />
                <span>Muscle Club Academy</span>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900">
                Aulas práticas, baseadas em evidência — no seu ritmo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Tenha acesso à plataforma com trilhas de nutrição e treinamento,
                atualizadas e objetivas. Estude do <strong>notebook</strong> ou
                do <strong>celular</strong>, acompanhando materiais e
                exercícios.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                {[
                  "Trilhas organizadas por objetivo (perda de gordura, hipertrofia, performance)",
                  "Aulas curtas, só o que importa para aplicar no dia a dia",
                  "Materiais de apoio, checklists e atualizações recorrentes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheck className="mt-[3px] h-4 w-4 flex-shrink-0 text-violet-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Imagens exatamente como solicitado */}
           {/* Imagens com comportamento responsivo (sem sobreposição no mobile) */}
<div className="relative">
  {/* Notebook (principal) */}
  <motion.img
    initial={{ opacity: 0, y: 20, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    src="img/platform/noteaula.png"
    alt="Aulas no notebook"
    className="relative z-10 mx-auto w-full max-w-[520px] rounded-2xl object-cover"
  />

  {/* Celular: empilhado abaixo no mobile, sobreposto no desktop */}
  <motion.img
    initial={{ opacity: 0, y: 16, rotate: -6 }}
    whileInView={{ opacity: 1, y: 0, rotate: -2 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
    viewport={{ once: true }}
    src="img/platform/cellaula.png"
    alt="Aulas no celular"
    className="
      relative mx-auto mt-4 w-[160px] rounded-2xl p-2
      translate-x-0 translate-y-0    /* sem deslocamento no mobile */
      md:absolute md:-right-2 md:-bottom-6 md:mx-0 md:mt-0 md:w-[200px]
      md:translate-x-2 md:translate-y-2 md:z-20
    "
  />
</div>

          </div>
          {/* ==== BLOCO 2 – COMUNIDADE + PULSEIRA VIP (imagem ao lado) ==== */}
          <div
            className="mt-10 rounded-3xl border border-violet-200/60 bg-white/70 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8"
            style={{
              background:
                "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.18), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(34,211,238,0.14), transparent 60%)",
            }}
          >
            {/* texto */}
            <div className="flex-1">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-violet-700 ring-1 ring-violet-200">
                <FaUsers className="h-3.5 w-3.5" />
                <span>Comunidade MC</span>
              </div>

              <h3 className="text-2xl font-semibold text-neutral-900">
                Networking que acelera resultados
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Participe de um ambiente com pessoas que têm os mesmos
                objetivos. Troque experiências, tire dúvidas e mantenha a
                motivação em alta com desafios e checkpoints.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  <FaGift className="h-3.5 w-3.5" />
                  Pulseira VIP Member inclusa
                </span>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-200">
                  Encontros e desafios mensais
                </span>
              </div>
            </div>

            {/* imagem ao lado */}
            <div className="relative flex-shrink-0 w-[220px] h-[220px]">
              <img
                src="img/platform/pulseira.png"
                alt="Pulseira VIP Member"
                className="absolute inset-0 m-auto h-full w-auto object-contain drop-shadow-xl"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-50 blur-2xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(139,92,246,0.25), transparent 70%)",
                }}
              />
            </div>
          </div>
          {/* ==== BLOCO 3 – EBOOKS/GUIAS (visual natural e sem fundo branco) ==== */}
          <div className="mt-10 rounded-3xl border border-violet-200/30 bg-transparent relative overflow-hidden">
            <div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_320px] md:p-8">
              {/* texto */}
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-violet-50/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-violet-700 ring-1 ring-violet-200/50 backdrop-blur-sm">
                  <FaBook className="h-3.5 w-3.5" />
                  <span>Biblioteca de E-books e Guias</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  Conteúdo direto ao ponto — sempre à mão
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                  Acesso a todos os e-books e guias para consultar fórmulas,
                  protocolos e checklists. Atualizações incluídas para membros.
                </p>
              </div>

              {/* imagem “natural” com efeito difuso */}
              <div className="relative flex justify-center items-center">
                <motion.img
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  src="img/platform/ebook.png"
                  alt="E-books e guias"
                  className="relative z-10 w-auto max-h-[200px] md:max-h-[240px] object-contain rounded-[32px] shadow-2xl drop-shadow-2xl"
                />
                {/* brilho e sombra difusa */}
                <div
                  className="absolute inset-0 -z-10 blur-3xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(139,92,246,0.25), transparent 70%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}
