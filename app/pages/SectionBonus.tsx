"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaGraduationCap, FaBook, FaGift, FaCheck } from "react-icons/fa";

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
              Ao entrar para a comunidade, você desbloqueia benefícios que aceleram sua evolução e mantêm sua motivação em alta.
            </p>
          </header>

          {/* ==== BLOCO 1 – ACADEMY (inalterado) ==== */}
          <div
            className="mt-10 grid items-center gap-8 rounded-3xl border border-violet-200/60 bg-white/70 p-6 md:grid-cols-2 md:p-10"
            style={{
              background:
                "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.18), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(34,211,238,0.14), transparent 60%), radial-gradient(800px 500px at 50% 85%, rgba(168,85,247,0.14), transparent 60%)",
            }}
          >
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-violet-700 ring-1 ring-violet-200">
                <FaGraduationCap className="h-3.5 w-3.5" />
                <span>Muscle Club Academy</span>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900">Muscle Club Academy</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Tenha acesso gratuito à nossa plataforma. Na MC Academy você terá acesso às melhores aulas sobre nutrição e treinamento com base em evidências. Aqui, você constrói seu melhor físico e conquista muito conhecimento.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                {[
                  "Trilhas organizadas por objetivo (perda de gordura, hipertrofia, performance)",
                  "Aulas com desempenho para o seu conhecimento",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheck className="mt-[3px] h-4 w-4 flex-shrink-0 text-violet-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              {/* Notebook (principal) */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 mx-auto w-full max-w-[560px]"
              >
                <Image
                  src="/img/platform/academy.png"
                  alt="Aulas no notebook"
                  width={1120}
                  height={700}
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, 560px"
                  priority
                />
              </motion.div>

           
            </div>
          </div>

          {/* ==== BLOCO ÚNICO – Comunidade + Pulseira (coluna esquerda) e E-books (coluna direita) ==== */}
          <div
            className="mt-10 rounded-3xl border border-violet-200/60 bg-white/80 p-6 md:p-10"
            style={{
              background:
                "radial-gradient(1200px 600px at 8% 12%, rgba(124,58,237,0.16), transparent 60%), radial-gradient(900px 500px at 92% 28%, rgba(34,211,238,0.12), transparent 60%)",
            }}
          >
            {/* Importante: no mobile (default) fica empilhado, no md+ fica em duas colunas */}
            <div className="grid gap-10 md:grid-cols-2">
              {/* Coluna 1: Comunidade + Pulseira */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1 w-full">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-violet-700 ring-1 ring-violet-200">
                    <FaUsers className="h-3.5 w-3.5" />
                    <span>Comunidade MC</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-neutral-900">Conexão real + Pulseira VIP</h3>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Tenha acesso à nossa comunidade e conheça outros membros que, assim como você, estão em busca da sua melhor versão. Além disso, ao fazer parte da nossa comunidade você conquista gratuitamente a Pulseira VIP Member da MC.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                    {[
                      "Objetivos compartilhados com outros membros",
                      "Feedbacks da comunidade e da equipe MC",
                      "Pulseira VIP Member inclusa",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheck className="mt-[3px] h-4 w-4 flex-shrink-0 text-violet-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Imagem da pulseira: menor no mobile, maior no desktop */}
                <div className="relative flex-shrink-0">
                  <div className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px]">
                    <Image
                      src="/img/platform/pulseira.png"
                      alt="Pulseira VIP Member"
                      fill
                      className="object-contain drop-shadow-xl"
                      sizes="(max-width: 768px) 220px, 320px"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(139,92,246,0.35), transparent 70%)",
                    }}
                  />
                </div>
              </div>

              {/* Coluna 2: E-books e Guias */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1 w-full">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-violet-700 ring-1 ring-violet-200/60">
                    <FaBook className="h-3.5 w-3.5" />
                    <span>Biblioteca de E‑books e Guias</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-neutral-900">E‑books práticos, direto ao ponto</h3>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Como se já não bastasse o acesso à plataforma, você também terá acesso a todos os e-books e guias que desenvolvemos, de forma totalmente gratuita.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                    {[
                      "Planos alimentares",
                      "Guias de periodização e progressão de carga",
                      "Checklist de hábitos e rotinas ",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheck className="mt-[3px] h-4 w-4 flex-shrink-0 text-violet-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Imagem dos e‑books: responsiva */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-[240px] h-[180px] md:w-[340px] md:h-[260px]"
                  >
                    <Image
                      src="/img/platform/ebook.png"
                      alt="Coleção de e‑books e guias"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 240px, 340px"
                    />
                  </motion.div>

                  {/* brilho difuso */}
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(168,85,247,0.28), transparent 70%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}
