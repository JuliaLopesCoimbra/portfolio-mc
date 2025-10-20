"use client";
import { useMemo } from "react";
import { FaWhatsapp } from "react-icons/fa";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function handleWhatsAppClick() {
  window.open(
    "https://wa.me/5531996367096?text=Quero%20ser%20o%20pr%C3%B3ximo%20resultado%20da%20Muscle%20Club!",
    "_blank"
  );
}

function PatternBG() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="pointer-events-none absolute -left-1/3 top-1/2 h-[140vh] w-[140vh] -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.45), rgba(237,233,254,0.35) 50%, transparent 75%)",
        }}
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dashedLinesS3" width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="50" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6 6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashedLinesS3)" />
      </svg>
    </div>
  );
}

/** Card simples com fotos Antes/Depois (lado a lado), sem textos */
function ResultThumb({ beforeSrc, afterSrc }: { beforeSrc: string; afterSrc: string }) {
  // Detecta se é uma das imagens especiais
  const isTopAligned = afterSrc.includes("person3after") || afterSrc.includes("person7after") || afterSrc.includes("person3before");

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-violet-200/60 bg-white/80 p-2 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid grid-cols-2 gap-2">
        <div className="relative aspect-[3/5] w-full overflow-hidden rounded-xl ring-1 ring-violet-200/70">
          <img
            src={beforeSrc}
            alt="Antes"
              className={cn(
              "h-full w-full object-cover transition group-hover:scale-[1.03]",
              isTopAligned && "object-top" // 👈 aplica somente às imagens que precisam
            )}
          />
          <span className="absolute left-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white">Antes</span>
        </div>
        <div className="relative aspect-[3/5] w-full overflow-hidden rounded-xl ring-1 ring-violet-200/70">
          <img
            src={afterSrc}
            alt="Depois"
            className={cn(
              "h-full w-full object-cover transition group-hover:scale-[1.03]",
              isTopAligned && "object-top" // 👈 aplica somente às imagens que precisam
            )}
          />
          <span className="absolute right-2 top-2 rounded-full bg-violet-600/90 px-2 py-0.5 text-[10px] font-semibold text-white">Depois</span>
        </div>
      </div>
    </div>
  );
}


export default function SectionResults() {
  // Quantos pares você quer listar
  const TOTAL = 14;
  const BASE = "img/results"; // ajuste se sua pasta for diferente

  const pairs = useMemo(
    () =>
      Array.from({ length: TOTAL }, (_, i) => {
        const idx = i + 1;
        return {
          before: `${BASE}/person${idx}before.jpg`,
          after: `${BASE}/person${idx}after.jpg`,
        };
      }),
    [TOTAL]
  );

  return (
    <section
      id="results"
      className="relative isolate overflow-hidden py-16 sm:py-24"
      style={{ background: "radial-gradient(circle at 50% 20%, #ffffff, #ede9fe 70%)" }}
    >
      <PatternBG />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">Resultados reais</h2>
        <p className="mt-2 max-w-prose text-sm text-neutral-700">
          Antes e depois dos nossos membros. Foco em consistência e acompanhamento próximo.
        </p>

        {/* Grid 3 colunas (2 no mobile), cards pequenos */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {pairs.map((p, i) => (
            <ResultThumb key={i} beforeSrc={p.before} afterSrc={p.after} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            onClick={handleWhatsAppClick}
            className={cn(
              "inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition",
              "bg-violet-600 text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
            )}
          >
            <FaWhatsapp className="text-lg" /> Quero ser o próximo
          </button>
          <span className="text-xs text-neutral-600">Acompanhamento diferencial dentro da comunidade</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}
