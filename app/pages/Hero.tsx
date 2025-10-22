"use client";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLeaf, FaBolt, FaUsers } from "react-icons/fa6";
import { FaStar } from "react-icons/fa"
import { motion } from "framer-motion"; 
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
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <path
              d="M36 0H0V36"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.6"
              strokeWidth="0.6"
            />
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

function RightShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[900px]"
   >
      {/* Linhas diagonais */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="lines"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="#ffffff"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>

      {/* Brilho radial */}
      <div className="absolute -inset-12 bg-[radial-gradient(circle_at_50%_30%,rgba(249,115,22,0.4),transparent_70%)] blur-3xl" />

      <div className="relative aspect-[5/4] overflow-hidden rounded-3xl"
     >
        <Image
          src="/img/teste5.png"
          alt="Showcase"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 900px"
          className="object-contain object-center"
        />
      </div>
  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
  {/* Avatares */}
<div className="flex items-center gap-3">
  {/* Avatares */}
  <div className="flex -space-x-2">
    <img
      src="/img/avatar/avatar1.jpeg"
      className="h-8 w-8 rounded-full ring-[1.5px] ring-[#ffae00]/60"
      alt=""
    />
    <img
      src="/img/avatar/avatar2.jpeg"
      className="h-8 w-8 rounded-full ring-[1.5px] ring-[#ffae00]/60"
      alt=""
    />
    <img
      src="/img/avatar/avatar3.jpeg"
      className="h-8 w-8 rounded-full ring-[1.5px] ring-[#ffae00]/60"
      alt=""
    />
  </div>

  {/* Texto ao lado */}
  <span className="text-xs font-medium text-violet-100/90">
    +300 membros
  </span>
</div>


  {/* Texto + estrelas */}
  <div className="flex flex-col items-end text-right">
    <span className="text-xs text-[#ffae00] mb-1">Junte-se à comunidade</span>
    <div className="flex items-center gap-1">
      <div className="flex text-[#ffae00]">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={11} />
        ))}
      </div>
      <span className="text-[11px] text-white/80">4.9 / 5</span>
    </div>
  </div>
</div>
    </div>
  );
}

const Hero: React.FC = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-neutral-950 text-white"
      // style={{ border: "solid red 1px" }}
    >
      <Background />

      <div
        // style={{ border: "solid red 1px" }}
        className="relative mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16  md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10 "
      >
        {/* Coluna Esquerda – Texto */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
 
>
   <div 
        // style={{ border: "solid red 1px" }} 
        className="relative z-10 pt-20">
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
            Já pensou alcançar o melhor{" "}
            <span className="bg-violet-700  bg-clip-text text-transparent">
              shape
            </span>{" "}
            da sua vida treinando menos e com um plano alimentar fácil de
            seguir?
          </h1>

          <p className="mt-4 max-w-prose text-base/relaxed text-violet-100/90">
            Com a Muscle Club isso é possível. Tudo isso de forma natural e sem
            ter a genética do CBUM
          </p>

          <CTA />

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur">
              <div className="text-2xl font-semibold text-white">2000+</div>
              <div className="mt-1 text-xs text-violet-200/80">
                shapes transformados
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur">
              <div className="text-2xl font-semibold text-white">3</div>
              <div className="mt-1 text-xs text-violet-200/80">
                mentores dedicados
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur">
              <div className="text-2xl font-semibold text-white">97%</div>
              <div className="mt-1 text-xs text-violet-200/80">
                adesão ao plano
              </div>
            </div>
          </div>
        </div>
</motion.div>
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
  viewport={{ once: true }}
 
>
   <div 
        // style={{border:"solid red 1px"}} 
        className="relative z-10">
          <RightShowcase />
        </div>
</motion.div>
       
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
    </section>
  );
};

export default Hero;
