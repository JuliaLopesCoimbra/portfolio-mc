"use client";
import { FaRegCircleXmark } from "react-icons/fa6";
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
      {/* brilho radial roxo/indigo */}
      <div
        className="pointer-events-none absolute -right-1/3 top-1/2 h-[140vh] w-[140vh] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.35), rgba(79,70,229,0.25) 50%, transparent 75%)",
        }}
      />
      {/* linhas diagonais sutis */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dashedLinesS2"
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
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashedLinesS2)" />
      </svg>

      {/* leve vinheta para foco no centro */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_60%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li
      className={cn(
        "group relative mx-auto flex w-full items-start gap-3 rounded-2xl border border-violet-300/40 text-white px-4 py-3 shadow-sm backdrop-blur transition",
        "hover:-translate-y-0.5 hover:shadow-md border border-white/10 text-white   bg-white/5 backdrop-blur"
      )}
    >
      {/* Badge com X vermelho estilizado */}
      <span
        className={cn(
          "mt-0.5 grid h-7 w-7 place-items-center rounded-full text-red-600 ring-1 ring-red-200",
          "bg-[conic-gradient(from_180deg_at_50%_50%,theme(colors.red.500/.18),theme(colors.red.600/.22),transparent_65%)]",
          "transition group-hover:scale-105"
        )}
        aria-hidden
      >
        <FaRegCircleXmark className="text-[18px] drop-shadow-[0_0_6px_rgba(239,68,68,0.35)]" />
      </span>

      <span className="text-sm ">{children}</span>

      {/* acento lateral ao hover (discreto) */}
      <span className="pointer-events-none absolute inset-y-1 left-1 w-0.5 rounded-full bg-gradient-to-b from-red-400/70 via-red-500/60 to-red-400/70 opacity-0 transition group-hover:opacity-100" />
    </li>
  );
}

export default function SectionPain() {
  return (
    <section
      id="dor"
      className="relative isolate overflow-hidden py-16 sm:py-24"
     style={{
          background:
            "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(800px 500px at 50% 85%, rgba(168,85,247,0.18), transparent 60%)",
        }}
    >
      <PatternBG />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 md:px-10">
        {/* Bloco centralizado */}
        <div className="w-full max-w-2xl text-center">
         

          <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Você já tentou de tudo, mas...
          </h2>

          {/* Bullets: centralizados e responsivos */}
          <ul className="mt-6 grid gap-3 sm:grid-cols-1 text-white ">
            <Bullet>A dieta é impossível de seguir com sua rotina?</Bullet>
            <Bullet>
              O treino é genérico e não traz resultados? (parece Ctrl C + Ctrl V)
            </Bullet>
            <Bullet>Você não sabe se está fazendo certo?</Bullet>
            <Bullet>Sente que está jogando dinheiro fora?</Bullet>
            <Bullet>Tem lesões ou limitações ignoradas?</Bullet>
          </ul>

          {/* Box de reforço */}
          <div className="mx-auto mt-6 w-full rounded-2xl border border-violet-300/50 text-white   bg-white/5 p-4 text-lx1
            shadow-sm">
            <strong className="text-violet-800 ">O PROBLEMA NUNCA FOI VOCÊ.</strong>{" "}
            Foi a falta de um acompanhamento e de um<strong> MÉTODO</strong> que
            respeita a sua realidade.
          </div>

          {/* CTA central */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleWhatsAppClick}
              className={cn(
                "inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition",
                "bg-violet-600 text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
              )}
              aria-label="Garantir vaga"
            >
              <FaWhatsapp className="text-lg" /> GARANTIR VAGA
            </button>
         
          </div>
        </div>
      </div>

      {/* divisor */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
    </section>
  );
}
