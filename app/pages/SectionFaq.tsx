"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
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
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dashedLinesS10" width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="50" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6 6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashedLinesS10)" />
      </svg>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-violet-200 bg-white/85 p-4 shadow-sm backdrop-blur">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-semibold text-neutral-900">{question}</span>
        <FaChevronDown
          className={`ml-2 h-4 w-4 text-violet-600 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      {open && <p className="mt-2 text-sm text-neutral-700">{answer}</p>}
    </div>
  );
}

export default function SectionFAQ() {
  const faqs: FAQItemProps[] = [
    {
      question: "Em quanto tempo recebo meu planejamento?",
      answer:
        "Após o preenchimento da anamnese, seu plano é entregue em até 5 dias úteis.",
    },
    {
      question: "Preciso ter experiência com treino ou nutrição?",
      answer:
        "Não. Nosso método funciona tanto para iniciantes quanto para quem já treina, sempre adaptando o plano ao seu nível e necessidades.",
    },
    {
      question: "Como funciona o suporte e a comunicação com o especialista?",
      answer:
        "Você terá contato direto com quem criou o seu plano, podendo tirar dúvidas e receber ajustes rápidos.",
    },
    {
      question: "Quanto tempo até ver resultados?",
      answer:
        "Os resultados começam a aparecer nas primeiras semanas, mas o tempo varia conforme disciplina, objetivos e rotina. O importante é que você terá acompanhamento constante para acelerar sua evolução.",
    },
    {
      question: "E se eu não conseguir seguir a dieta ou treino?",
      answer:
        "Você nunca fica sozinho. Nosso acompanhamento é semanal e oferecemos suporte individual para adaptar seu plano à sua realidade, garantindo que seja viável e sustentável.",
    },
    {
      question: "Vocês trabalham com atletas?",
      answer:
        "Sim, trabalhamos com atletas de diferentes modalidades e resultados comprovados em campeonatos, desde fisiculturismo até a corrida. Nosso foco é entregar o melhor planejamento para você alcançar seu objetivo, independentemente de você ser atleta ou apenas viver o lifestyle.",
    },
  ];

  return (
    <section id="duvidas" className="relative isolate overflow-hidden py-16 sm:py-24" 
    style={{
          background:
            "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(800px 500px at 50% 85%, rgba(168,85,247,0.18), transparent 60%)",
        }}>
      {/* <PatternBG /> */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
 
> 
      <div className="relative mx-auto w-full max-w-4xl px-6 md:px-10">
       
        <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="mt-2 max-w-prose text-sm text-white/90">
          Reunimos as dúvidas mais comuns para você ter clareza de como funciona o acompanhamento da Muscle Club.
        </p>

        <div className="mt-8 grid gap-4">
          {faqs.map((f, i) => (
            <FAQItem key={i} {...f} />
          ))}
        </div>
      </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}
