"use client";
import React, { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"; 

/** util */
function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Mapeamento de labels */
const CATEGORY_OPTIONS = [
  { key: "dieta", label: "Só dieta" },
  { key: "treino", label: "Só treino" },
  { key: "combo", label: "Dieta + Treino" },
] as const;

const PERIOD_OPTIONS = [
  { key: "mensal", label: "Mensal" },
  { key: "trimestral", label: "Trimestral" },
  { key: "semestral", label: "Semestral" },
] as const;

type CategoryKey = typeof CATEGORY_OPTIONS[number]["key"];
type PeriodKey = typeof PERIOD_OPTIONS[number]["key"];

/** WhatsApp */
function openWhatsApp(categoryLabel: string, periodLabel: string): void {
  const text = `Quero saber melhor sobre o plano da Muscle Club (${categoryLabel} • ${periodLabel})`;
  const url = `https://wa.me/5531996367096?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

/** BG decorativa */
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
            id="dashedLinesS8"
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
        <rect width="100%" height="100%" fill="url(#dashedLinesS8)" />
      </svg>
    </div>
  );
}

/** Benefícios dinâmicos conforme seleção */
function getFeatures(category: CategoryKey, period: PeriodKey): string[] {
  const isDieta = category === "dieta" || category === "combo";
  const isTreino = category === "treino" || category === "combo";
  const isSemestral = period === "semestral";

  const base = [
    "Check-ins semanais (acompanhamento humanizado e próximo)",
    "Suporte diário (respostas em até 24h)",
  ];

  const dieta = isDieta
    ? [
        "Dieta 100% personalizada para seu objetivo",
        "Lista de substituição de alimentos (plano com dieta*)",
        "Prescrição de suplementos (plano com dieta*)",
      ]
    : [];

  const treino = isTreino
    ? [
        "Treino 100% personalizado para seu objetivo",
        "Correções das execuções dos exercícios (plano com treino*)",
      ]
    : [];

  const semestralExtras = isSemestral
    ? [
        "Acesso à Muscle Club Academy (Exclusivo plano semestral)",
        "Pulseira MC (exclusivo para assinantes do plano semestral)",
        "Camiseta MC (exclusivo para assinantes do plano semestral)",
      ]
    : [];

  return [...base, ...dieta, ...treino, ...semestralExtras];
}

/** Tipos do Card */
type PlanCardProps = {
  periodKey: PeriodKey;
  periodLabel: string;
  categoryKey: CategoryKey;
  categoryLabel: string;
};

/** Card de Plano por período */
function PlanCard({
  periodKey,
  periodLabel,
  categoryKey,
  categoryLabel,
}: PlanCardProps) {
  const features = useMemo(
    () => getFeatures(categoryKey, periodKey),
    [categoryKey, periodKey]
  );

  const highlight = periodKey === "semestral";

  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl border bg-white/85 p-6 shadow-sm backdrop-blur transition",
        highlight ? "border-violet-500 ring-2 ring-violet-300" : "border-violet-200"
      )}
    >
      <h3 className="text-lg font-semibold text-neutral-900">{periodLabel}</h3>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-violet-700">Sob consulta</span>
        <span className="text-sm text-neutral-600">/ {periodLabel.toLowerCase()}</span>
      </div>

      <ul className="mt-4 flex-1 space-y-2 text-sm text-neutral-800">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-600" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => openWhatsApp(categoryLabel, periodLabel)}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
      >
        <FaWhatsapp />
        Falar no WhatsApp
      </button>

      <p className="mt-4 text-xs text-neutral-600">
        * Itens marcados com “plano com dieta” só se aplicam a planos que incluam dieta.
        <br />
        * Itens marcados com “plano com treino” só se aplicam a planos que incluam treino.
      </p>
    </div>
  );
}

/** Componente principal */
export default function SectionPlans() {
  const [category, setCategory] = useState<CategoryKey>(CATEGORY_OPTIONS[0].key);
  const [period, setPeriod] = useState<PeriodKey>(PERIOD_OPTIONS[0].key);

  const selectedCategoryLabel =
    CATEGORY_OPTIONS.find((c) => c.key === category)?.label || "";
  const selectedPeriodLabel =
    PERIOD_OPTIONS.find((p) => p.key === period)?.label || "";

  return (
    <section
      id="planos"
      className="relative isolate overflow-hidden py-16 sm:py-24"
      style={{
        background:
          "radial-gradient(1200px 800px at 50% 10%, #28164b 0%, #1a1238 40%, #0f0b25 100%)",
      }}
    >
      <PatternBG />
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
 
><div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Escolha o plano ideal para você
        </h2>
        <p className="mt-2 max-w-prose text-sm text-neutral-100">
          Selecione o tipo de plano e o período. Todos contam com suporte próximo e a qualidade Muscle Club.
        </p>

        {/* Seletores */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tipo de plano */}
          <div>
            <span className="mb-2 block text-sm font-medium text-violet-100">
              Tipo de plano
            </span>
            <div className="flex flex-wrap gap-2">
              {CATEGORY_OPTIONS.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCategory(c.key)}
                  className={cn(
                    "rounded-xl border px-4 py-2 text-sm font-medium transition",
                    category === c.key
                      ? "border-violet-400 bg-violet-600 text-white"
                      : "border-violet-200/50 bg-white/10 text-violet-100 hover:bg-white/20"
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

       
        </div>

        {/* Cards (um por período) */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PERIOD_OPTIONS.map((p) => (
            <PlanCard
              key={p.key}
              periodKey={p.key}
              periodLabel={p.label}
              categoryKey={category}
              categoryLabel={
                CATEGORY_OPTIONS.find((c) => c.key === category)?.label || ""
              }
            />
          ))}
        </div>

        {/* CTA geral */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => openWhatsApp(selectedCategoryLabel, selectedPeriodLabel)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            <FaWhatsapp />
            Quero saber melhor sobre o plano da Muscle Club
          </button>
        </div>
      </div></motion.div>
      

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}
