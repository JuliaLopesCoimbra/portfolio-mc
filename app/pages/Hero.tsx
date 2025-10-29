"use client";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLeaf, FaBolt, FaUsers } from "react-icons/fa6";
import { motion } from "framer-motion"
import { Reveal,Stagger,ZoomIn } from "../components/motion/Reveal";
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
      <div
        className="absolute inset-0"
        style={{
          background: "#000000",
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

function Pill({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { children: React.ReactNode }) {
  return (
    <span
      {...props}
      className={cx(
        "inline-flex items-center gap-2 rounded-full border border-violet-400/50 bg-white/10 px-3 py-1 text-xs tracking-wide text-violet-100 backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}

function CTA() {
  return (
    <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start md:items-start">
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
    <ZoomIn>
    <div
      className="
        relative mx-auto w-full max-w-[900px]
        md:px-0
      "
    >
      {/* container da imagem */}
      <div
        className="
          relative overflow-hidden rounded-none md:rounded-3xl
    h-[39svh] md:h-auto md:aspect-[6/4] md:max-h-[85svh]
    -mx-4 sm:-mx-6 md:mx-0

      /* Sombra escura mais profunda */
    md:shadow-[0_0_120px_40px_rgba(0,0,0,0.85)]

    /* Fade nas bordas da imagem */
    md:before:absolute md:before:inset-0
    md:before:bg-gradient-to-b
    md:before:from-transparent md:before:via-transparent md:before:to-black/30
    md:before:pointer-events-none
    
        "
      >
        {/* Desktop */}
        <Image
          src="/img/platform/hero-desktop.jpg"
          alt="Showcase Muscle Club"
          fill
          priority
          sizes="(min-width: 768px) 900px"
          className="hidden md:block object-cover object-center"
        />

        <Image
          src="/img/platform/hero-mobile.jpg"
          alt="Showcase Muscle Club"
          fill
          priority
          sizes="(max-width: 767px) 100vw"
          className="md:hidden object-cover object-bottom"
          style={{ objectPosition: "center bottom" }}
        />
      </div>

      {/* Avatares + membros — visível apenas no desktop */}
      <div
        className="
    hidden md:flex mt-3 items-center justify-between
    rounded-2xl px-4 py-3 backdrop-blur
  "
      >
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <img
              src="/img/avatar/avatar1.jpeg"
              className="h-8 w-8 rounded-full"
              alt=""
            />
            <img
              src="/img/avatar/avatar2.jpeg"
              className="h-8 w-8 rounded-full"
              alt=""
            />
            <img
              src="/img/avatar/avatar3.jpeg"
              className="h-8 w-8 rounded-full"
              alt=""
            />
              <img
              src="/img/avatar/avatar4.jpeg"
              className="h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <span className="text-xs font-medium text-violet-100/90">
            +300 membros
          </span>
        </div>
      </div>
    </div>
    </ZoomIn>
  );
}

const Hero: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      <Background />

      <div
        className="
          relative mx-auto w-full max-w-7xl
          min-h-[100svh] md:min-h-0
          grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr]
          items-stretch md:items-center
          gap-6 md:gap-16
          px-4 md:px-10
          pb-6 md:py-16
        "
      >
        {/* IMAGEM – fica primeiro no mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <div className="relative z-10 md:pt-10">
            <RightShowcase />
          </div>
        </motion.div>

        {/* TEXTO – cabe em ~55% da tela no mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <div
            className="
    relative z-10
    h-[65svh] md:h-auto
    flex flex-col
    pt-3 md:pt-10
    items-center md:items-start
    text-center md:text-left
  "
          >
            <Stagger stagger={0.1}>
             <Reveal y={18}>
   <div className="mb-3 flex flex-wrap gap-2 justify-center md:justify-start">
  <Pill>
    <FaUsers className="text-violet-300" /> Comunidade Muscle Club
  </Pill>
  <Pill className="hidden sm:inline-flex">
    <FaLeaf className="text-violet-300" /> 100% Natural
  </Pill>
  <Pill className="hidden sm:inline-flex">
    <FaBolt className="text-violet-300" /> Plano simples
  </Pill>
</div>

  </Reveal>
       
             <Reveal  y={20}>
        <h1
              className="
    text-balance text-[22px] leading-tight sm:text-3xl lg:text-4xl
    font-semibold text-center md:text-left
    max-w-[28rem] sm:max-w-[42rem] md:max-w-[50rem]
  "
            >
              Já pensou alcançar o melhor{" "}
              <span className="bg-violet-700 bg-clip-text text-transparent">
                shape
              </span>{" "}
              da sua vida treinando menos e com um plano alimentar fácil de
              seguir?
            </h1>
  </Reveal>
        <Reveal y={16} delay={0.05}>
 <p
  className="
    mt-3 text-sm sm:text-base text-violet-100/90
    text-center md:text-left
    max-w-[20rem] sm:max-w-[30rem] md:max-w-[36rem]
    mx-auto md:mx-0 self-center md:self-start
  "
>
  Com a Muscle Club isso é possível. Tudo isso de forma natural e
  sem ter a genética do CBUM.
</p>

  </Reveal>

          
            {/* Avatares + membros — visível apenas no mobile */}
           <motion.div
  initial={{ opacity: 0, x: 160 }}          // anda mais: 160px
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.95, ease: "easeOut", delay: 0.05 }} // dura quase 1s
  className="flex md:hidden mt-4 justify-center"
>
  <div className="flex items-center gap-3">
    <div className="flex -space-x-2">
      <img src="/img/avatar/avatar1.jpeg" className="h-8 w-8 rounded-full" alt="" />
      <img src="/img/avatar/avatar2.jpeg" className="h-8 w-8 rounded-full" alt="" />
      <img src="/img/avatar/avatar3.jpeg" className="h-8 w-8 rounded-full" alt="" />
    </div>
    <span className="text-xs font-medium text-violet-100/90">+300 membros</span>
  </div>
</motion.div>

 <Reveal y={16} delay={0.1}>
    <CTA />
  </Reveal>
          </Stagger>

            {/* Estatísticas: escondidas no mobile para caber na tela */}
            <div className="mt-6 hidden sm:grid max-w-lg grid-cols-3 gap-4 text-center">
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
    </section>
  );
};

export default Hero;
