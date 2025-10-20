"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLeaf, FaBolt, FaUsers } from "react-icons/fa6";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function handleWhatsAppClick() {
  window.open(
    "https://wa.me/5531996367096?text=Ol%C3%A1%2C%20quero%20entrar%20na%20comunidade%20Muscle%20Club!",
    "_blank"
  );
}

function Background() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* Mesh gradient principal */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(800px 500px at 50% 85%, rgba(168,85,247,0.18), transparent 60%)",
        }}
      />

      {/* Vignette sutil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_55%,rgba(0,0,0,0.35)_100%)]" />

      {/* Grade diagonal */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M36 0H0V36" fill="none" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Noise para textura */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.6\\'/></svg>')",
        }}
      />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/50 bg-white/10 px-3 py-1 text-xs tracking-wide text-violet-100 backdrop-blur">
      {children}
    </span>
  );
}

function CTA() {
  return (
    <div className="mt-10 flex w-full flex-col items-start gap-3 sm:flex-row">
      <button
        onClick={handleWhatsAppClick}
        className={cx(
          "group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium transition",
          "bg-violet-600 text-white",
          "hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
        )}
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp className="text-base transition group-hover:scale-110" />
        Começar agora
      </button>

      <a
        href="#results"
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10"
      >
        Ver resultados
      </a>
    </div>
  );
}

function Portrait({ src, name, role, className = "" }: { src: string; name: string; role: string; className?: string }) {
  return (
    <div className={cx("relative overflow-hidden rounded-3xl p-1", className)}>
      {/* Moldura com gradiente animado sutil */}
      <div className="absolute -inset-[1px] " />
      <div className="relative rounded-2xl  bg-white/5 p-2 backdrop-blur">
        <div className="aspect-[3/5] w-full overflow-hidden rounded-xl">
          <img src={src} alt={name} className="h-full w-full object-cover" />
        </div>
        <div className="mt-3">
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-violet-200/80">{role}</p>
        </div>
      </div>
    </div>
  );
}

function RightShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Glow orbs
      <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-violet-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-6 top-24 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" /> */}

      {/* Cartão com os 3 sócios em layout de colagem premium */}
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 shadow-2xl backdrop-blur">
        <div className="relative flex items-end justify-center">
          {/* Imagem central maior */}
          <div className="z-20 -mb-6 w-1/2">
            <Portrait src="img/socios/jam.png" name="Ana Souza" role="Mentora • Nutri" />
          </div>

          {/* Sócio à esquerda (menor e deslocado) */}
          <div className="absolute left-0 top-1/2 w-1/3 -translate-y-1/2 -rotate-3">
            <Portrait src="img/socios/joao.png" name="João Henrique" role="Coach • Treino" />
          </div>

          {/* Sócio à direita (menor e deslocado) */}
          <div className="absolute right-0 top-1/2 w-1/3 -translate-y-1/2 rotate-3">
            <Portrait src="img/socios/heithor.png" name="Matheus Lima" role="Coach • Hábitos" />
          </div>
        </div>

        {/* Selo/assinatura no rodapé do cartão */}
        <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="flex -space-x-2">
            <img src="img/avatar/avatar1.jpeg" className="h-8 w-8 rounded-full ring-2 ring-white/10" alt="" />
            <img src="img/avatar/avatar2.jpeg" className="h-8 w-8 rounded-full ring-2 ring-white/10" alt="" />
            <img src="img/avatar/avatar3.jpeg" className="h-8 w-8 rounded-full ring-2 ring-white/10" alt="" />
            <div className="grid h-8 w-8 place-items-center rounded-full bg-violet-500/20 text-xs font-medium text-violet-100 ring-2 ring-white/10">
              +300 membros
            </div>
          </div>
          <span className="text-xs text-violet-100">Junte-se à comunidade</span>
        </div>
      </div>
    </div>
  );
}


const Hero: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      <Background />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10 lg:pt-24">
        {/* Coluna Esquerda – Texto */}
        <div className="relative z-10">
          <div className="mb-5 flex flex-wrap gap-2">
            <Pill>
              <FaUsers className="text-violet-300" /> Comunidade Muscle Club
            </Pill>
            <Pill>
              <FaLeaf className="text-violet-300" /> 100% Natural
            </Pill>
            <Pill>
              <FaBolt className="text-violet-300" /> Plano simples de seguir
            </Pill>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-4xl lg:text-4xl">
            Já pensou alcançar o melhor <span className="bg-violet-700  bg-clip-text text-transparent">shape</span> da sua vida treinando menos e com um plano alimentar fácil de seguir?
          </h1>

          <p className="mt-4 max-w-prose text-base/relaxed text-violet-100/90">
            Com a Muscle Club isso é possível. Tudo isso de forma natural e sem ter a genética do CBUM
          </p>

          <CTA />

         
<div className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-center">
  <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur">
    <div className="text-2xl font-semibold text-white">2000+</div>
    <div className="mt-1 text-xs text-violet-200/80">shapes transformados</div>
  </div>

  <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur">
    <div className="text-2xl font-semibold text-white">3</div>
    <div className="mt-1 text-xs text-violet-200/80">mentores dedicados</div>
  </div>

  <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur">
    <div className="text-2xl font-semibold text-white">97%</div>
    <div className="mt-1 text-xs text-violet-200/80">adesão ao plano</div>
  </div>
</div>

        </div>

        {/* Coluna Direita – Cartão com 3 sócios */}
        <div className="relative z-10">
          <RightShowcase />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
    </section>
  );
};

export default Hero;
