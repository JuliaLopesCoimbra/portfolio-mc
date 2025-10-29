"use client";
import React from "react";
import { FaWhatsapp, FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function handleWhatsAppClick() {
  window.open(
    "https://wa.me/5531996367096?text=Quero%20garantir%20minha%20vaga%20na%20Muscle%20Club!",
    "_blank"
  );
}

function PatternBG() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="pointer-events-none absolute -left-1/4 top-1/2 h-[120vh] w-[120vh] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.4), rgba(237,233,254,0.25) 50%, transparent 75%)",
        }}
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dashedLinesS6"
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
        <rect width="100%" height="100%" fill="url(#dashedLinesS6)" />
      </svg>
    </div>
  );
}

function Item({
  type,
  children,
}: {
  type: "bad" | "good";
  children: React.ReactNode;
}) {
  return (
    <li
      className={cn(
        "flex items-start gap-2 rounded-xl px-3 py-2 text-sm leading-snug",
        type === "bad" ? "text-red-100" : "text-green-100"
      )}
    >
      {type === "bad" ? (
        <FaTimesCircle className="mt-0.5 flex-shrink-0 text-[18px] text-red-500" />
      ) : (
        <FaCheckCircle className="mt-0.5 flex-shrink-0 text-[18px] text-green-600" />
      )}
      <span className="text-left">{children}</span>
    </li>
  );
}

export default function SectionComparison() {
  return (
    <section
      id="comparacao"
      className="relative isolate overflow-hidden py-16 sm:py-24"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(800px 500px at 50% 85%, rgba(168,85,247,0.18), transparent 60%)",
      }}
    >
      {/* <PatternBG /> */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 text-center">
          <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Outras consultorias <span className="text-violet-700">x</span> Muscle Club
          </h2>
          <p className="mt-2 text-sm text-white/80">
            Veja o que nos diferencia e porque nossos alunos conseguem consistência, suporte e resultado real.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Outras consultorias */}
            <div className="rounded-3xl p-6 shadow-sm backdrop-blur">
              <h3 className="mb-4 text-lg font-semibold text-red-500">
                Outras consultorias
              </h3>
              <ul className="space-y-2">
                <Item type="bad">
                  Entregam treinos e dietas prontos ou feitos por robô, sem personalização pra sua realidade.
                </Item>
                <Item type="bad">
                  Falta acompanhamento: após te enviarem o plano, somem e não te dão o suporte que você precisa para evoluir.
                </Item>
                <Item type="bad">Suporte lento ou inexistente.</Item>
                <Item type="bad">
                  Demora para ver resultados de estética e performance.
                </Item>
                <Item type="bad">
                  Sem contato com o especialista de verdade, apenas assistentes.
                </Item>
                <Item type="bad">
                  Planos difíceis de seguir, não cabem na sua rotina.
                </Item>
              </ul>
            </div>

            {/* Muscle Club */}
            <div className="rounded-3xl p-6 shadow-sm backdrop-blur">
              <h3 className="mb-4 text-lg font-semibold text-green-500">
                Muscle Club
              </h3>
              <ul className="space-y-2">
                <Item type="good">
                  Treinos e dietas 100% personalizados para você. Sem IA ou ctrl+c/ctrl+v.
                </Item>
                <Item type="good">
                  Planos simples, práticos e possíveis de seguir. Treino e dieta feitos para caber na sua rotina, não o contrário.
                </Item>
                <Item type="good">Contato direto com o especialista responsável.</Item>
                <Item type="good">App para visualizar treinos e dieta.</Item>
                <Item type="good">Suporte via WhatsApp com resposta em até 24h.</Item>
                <Item type="good">
                  Acesso gratuito à Muscle Club Academy. Te ensinamos o que te prescrevemos.
                </Item>
              </ul>
            </div>
          </div>

          {/* CTA centralizado */}
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Pronto para alcançar o melhor shape da sua vida com acompanhamento de verdade?
              </h3>
              <p className="text-sm text-white/80">
                Clique no botão abaixo, escolha seu plano e inicie agora sua evolução.
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className={cn(
                "inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition justify-center",
                "bg-violet-600 text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
              )}
              aria-label="Garantir vaga"
            >
              <FaWhatsapp className="text-lg" /> GARANTIR VAGA
            </button>

            <strong className="text-red-600 text-[1.5vh] mt-2">
              ATENÇÃO: Nossas vagas são limitadas para garantir a qualidade do seu acompanhamento.
            </strong>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}
