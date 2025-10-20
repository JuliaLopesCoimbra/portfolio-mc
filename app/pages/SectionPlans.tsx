"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

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
        className="pointer-events-none absolute -left-1/3 top-1/2 h-[140vh] w-[140vh] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.40), rgba(237,233,254,0.28) 50%, transparent 75%)",
        }}
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dashedLinesS8" width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="50" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6 6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashedLinesS8)" />
      </svg>
    </div>
  );
}

interface PlanCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  highlight?: boolean;
}

function PlanCard({ title, price, period, features, highlight }: PlanCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl border bg-white/85 p-6 shadow-sm backdrop-blur transition",
        highlight ? "border-violet-500 ring-2 ring-violet-300" : "border-violet-200"
      )}
    >
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-violet-700">{price}</span>
        <span className="text-sm text-neutral-600">/{period}</span>
      </div>
      <ul className="mt-4 flex-1 space-y-2 text-sm text-neutral-700">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-600" />
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={handleWhatsAppClick}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
      >
        <FaWhatsapp /> Garantir Vaga
      </button>
    </div>
  );
}

export default function SectionPlans() {
  const plans: PlanCardProps[] = [
    {
      title: "Essencial",
      price: "R$ 149",
      period: "mês",
      features: [
        "Plano individual de dieta OU treino",
        "Ajustes mensais conforme evolução",
        "Suporte por WhatsApp",
        "Acesso à comunidade MC",
      ],
    },
    {
      title: "Completo",
      price: "R$ 249",
      period: "mês",
      features: [
        "Plano completo (dieta + treino)",
        "Ajustes semanais conforme evolução",
        "Contato direto com especialista",
        "Acesso à comunidade MC",
        "Acesso à MC Academy",
      ],
      highlight: true,
    },
    {
      title: "Premium",
      price: "R$ 399",
      period: "mês",
      features: [
        "Plano completo + acompanhamento intensivo",
        "Revisões ilimitadas",
        "Suporte prioritário via WhatsApp (24h)",
        "Acesso à comunidade MC",
        "Acesso à MC Academy",
        "E-books e guias exclusivos",
      ],
    },
  ];

  return (
    <section id="planos" className="relative isolate overflow-hidden py-16 sm:py-24" 
   style={{
        background:
          "radial-gradient(1200px 800px at 50% 10%, #28164b 0%, #1a1238 40%, #0f0b25 100%)",
      }}>
      <PatternBG />
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
      
        <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Escolha o plano ideal para você
        </h2>
        <p className="mt-2 max-w-prose text-sm text-neutral-100">
          Três opções criadas para diferentes necessidades, todas com suporte e qualidade Muscle Club.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <PlanCard key={i} {...p} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}