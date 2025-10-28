"use client";

import React, { useMemo, useRef, useCallback } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

/** util pra juntar classes */
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
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dashedLinesS3"
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
        <rect width="100%" height="100%" fill="url(#dashedLinesS3)" />
      </svg>
    </div>
  );
}

/** Card simples com fotos Antes/Depois (lado a lado) */
function ResultThumb({ beforeSrc, afterSrc }: { beforeSrc: string; afterSrc: string }) {
  const isTopAligned =
    afterSrc.includes("person3after") ||
    afterSrc.includes("person7after") ||
    afterSrc.includes("person3before");

  return (
    <div
      className={cn(
        // centralização no snap
        "snap-center shrink-0",
        // largura responsiva: 1/2/3 por viewport
        "basis-[85%] sm:basis-[48%] md:basis-[31%]",
        // estética
        "group relative overflow-hidden rounded-2xl border border-violet-200/60 bg-white/80 p-3 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
      )}
    >
      <div className="grid grid-cols-2 gap-2">
        {/* Antes */}
        <div className="relative aspect-[3/5] w-full overflow-hidden rounded-xl ring-1 ring-violet-200/70">
          <img
            src={beforeSrc}
            alt="Antes"
            className={cn(
              "h-full w-full object-cover transition group-hover:scale-[1.03]",
              isTopAligned && "object-top"
            )}
            loading="lazy"
          />
        </div>
        {/* Depois */}
        <div className="relative aspect-[3/5] w-full overflow-hidden rounded-xl ring-1 ring-violet-200/70">
          <img
            src={afterSrc}
            alt="Depois"
            className={cn(
              "h-full w-full object-cover transition group-hover:scale-[1.03]",
              isTopAligned && "object-top"
            )}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default function SectionResults() {
  const TOTAL = 14;
  const BASE = "img/results";

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

  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByViewport = useCallback((dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  }, []);

  return (
    <section
      id="results"
      className="relative isolate overflow-hidden py-16 sm:py-24"
      style={{ background: "radial-gradient(circle at 50% 20%, #ffffff, #ede9fe 70%)" }}
    >
      <PatternBG />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          {/* centraliza textos */}
          <h2 className="text-center text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Resultados reais
          </h2>
          <p className="mt-2 text-center max-w-2xl mx-auto text-sm text-neutral-700">
            Antes e depois dos nossos membros. Foco em consistência e acompanhamento próximo.
          </p>

          {/* CARROSSEL */}
          <div className="relative mt-8">
            {/* Fade lateral */}
           
            {/* Trilho centralizado */}
            <div
              ref={trackRef}
              className={cn(
                "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory snap-always",
                "px-1 py-1 justify-start", // 👈 centraliza quando não há overflow
                "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              )}
              style={{
                WebkitOverflowScrolling: "touch" as any,
                // ajuda o snap a “encaixar” com espacinho nas bordas
                scrollPaddingLeft: "24px",
                scrollPaddingRight: "24px",
              }}
            >
              {pairs.map((p, i) => (
                <ResultThumb key={i} beforeSrc={p.before} afterSrc={p.after} />
              ))}
            </div>

            {/* Botões centralizados */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => scrollByViewport("left")}
                className="rounded-xl border border-violet-200 bg-white/80 px-3 py-2 text-sm font-medium text-violet-700 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                aria-label="Anterior"
              >
                ◀
              </button>
              <button
                onClick={() => scrollByViewport("right")}
                className="rounded-xl border border-violet-200 bg-white/80 px-3 py-2 text-sm font-medium text-violet-700 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                aria-label="Próximo"
              >
                ▶
              </button>
            </div>
          </div>

          {/* CTA centralizada */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center">
            <button
              onClick={handleWhatsAppClick}
              className={cn(
                "inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition",
                "bg-violet-600 text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
              )}
            >
              <FaWhatsapp className="text-lg" /> Quero ser o próximo
            </button>
            <span className="text-xs text-neutral-600">
              Acompanhamento diferencial dentro da comunidade
            </span>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}
