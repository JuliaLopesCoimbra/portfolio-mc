"use client";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLeaf, FaBolt, FaUsers } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Reveal, Stagger, ZoomIn } from "../components/motion/Reveal";

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
      <div className="absolute inset-0" style={{ background: "#000000" }} />

      <div className="absolute inset-y-0 -inset-x-[1vw] hidden lg:block overflow-hidden">
        {/* faixa de blend à esquerda */}
        <div
          className="
            absolute left-0 top-0 bottom-0 z-[1]
            w-[22vw] pointer-events-none
            bg-gradient-to-r from-black/55 via-black/30 to-transparent
            backdrop-blur-[10px]
          "
        />
        <Image
          src="/img/platform/hero-desktop.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover lg:translate-x-[18vw] lg:scale-[1] will-change-transform"
          style={{ objectPosition: "85% center" }}
        />
      </div>

      {/* Vignette/grade/noise permanecem cobrindo a viewport normal */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_55%,rgba(0,0,0,0.35)_100%)]" />
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
    <div
      className={cx(
        // antes: "mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start md:items-start"
        "mt-1 flex w-full flex-col items-center gap-3",
        "sm:flex-row sm:justify-center sm:items-center", // tablet centralizado
        "lg:justify-start lg:items-start"                // desktop alinha à esquerda
      )}
    >
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
      <div className="relative mx-auto w-full max-w-[900px] lg:px-0">
        {/* container da imagem */}
        <div
          className="
            relative overflow-hidden rounded-none lg:rounded-3xl
            h-[39svh] lg:h-auto lg:aspect-[6/4] lg:max-h-[85svh]
            -mx-4 sm:-mx-6 lg:mx-0
            lg:shadow-[0_0_120px_40px_rgba(0,0,0,0.85)]
            lg:before:absolute lg:before:inset-0
            lg:before:bg-gradient-to-b
            lg:before:from-transparent lg:before:via-transparent lg:before:to-black/30
            lg:before:pointer-events-none
          "
        >
          {/* Mobile + Tablet usam hero-mobile */}
          <Image
            src="/img/platform/hero-mobile.jpg"
            alt="Showcase Muscle Club"
            fill
            priority
            sizes="(max-width:1023px) 100vw"
            className="object-cover object-bottom"
            style={{ objectPosition: "center bottom" }}
          />
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
          min-h-[100svh] lg:min-h-0
          grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]
          items-stretch lg:items-center
          gap-6 lg:gap-16
          px-4 lg:px-10
          pb-6 lg:py-16
        "
      >
        {/* IMAGEM – continua primeiro em mobile/tablet; some no desktop (>= lg) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 lg:hidden"
        >
          <div className="relative z-10 lg:pt-10">
            <RightShowcase />
          </div>
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div
            className="
              relative z-10
              h-[65svh] lg:h-auto
              flex flex-col
              pt-3 lg:pt-10
              items-center lg:items-start
              text-center lg:text-left
            "
          >
            <Stagger stagger={0.1}>
              <Reveal y={18}>
                <div className="mb-3 flex flex-wrap gap-2 justify-center lg:justify-start">
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

              <Reveal y={20}>
                <h1
                  className="
                    text-balance text-[22px] leading-tight sm:text-3xl lg:text-4xl
                    font-semibold text-center lg:text-left
                    max-w-[28rem] sm:max-w-[42rem] lg:max-w-[50rem]
                  "
                >
                  Já pensou alcançar o melhor{" "}
                  <span className="bg-violet-700 bg-clip-text text-transparent">shape</span>{" "}
                  da sua vida treinando menos e com um plano alimentar fácil de seguir?
                </h1>
              </Reveal>

              <Reveal y={16} delay={0.05}>
                <p
                  className="
                    mt-3 text-sm sm:text-base text-violet-100/90
                    text-center lg:text-left
                    max-w-[20rem] sm:max-w-[30rem] lg:max-w-[36rem]
                    mx-auto lg:mx-0 self-center lg:self-start
                  "
                >
                  Com a Muscle Club isso é possível. Tudo isso de forma natural e sem ter a genética do CBUM.
                </p>
              </Reveal>

              {/* Avatares + membros — mobile/tablet apenas */}
              <motion.div
                initial={{ opacity: 0, x: 160 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.95, ease: "easeOut", delay: 0.05 }}
                className="flex lg:hidden mt-4 justify-center"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img src="/img/avatar/avatar1.jpeg" className="h-8 w-8 rounded-full" alt="" />
                    <img src="/img/avatar/avatar2.jpeg" className="h-8 w-8 rounded-full" alt="" />
                    <img src="/img/avatar/avatar3.jpeg" className="h-8 w-8 rounded-full" alt="" />
                    <img src="/img/avatar/avatar4.jpeg" className="h-8 w-8 rounded-full" alt="" />
                  </div>
                  <span className="text-xs font-medium text-violet-100/90">+300 membros</span>
                </div>
              </motion.div>
            </Stagger>

            {/* CTA — MOBILE (antes das estatísticas) */}
            <div className="mt-6 sm:hidden w-full flex justify-center">
              <CTA />
            </div>

            {/* Estatísticas — TABLET+ (centralizadas) */}
            <div className="mt-6 hidden sm:grid w-full max-w-lg grid-cols-3 gap-4 text-center mx-auto">
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

            {/* CTA — TABLET (embaixo das estatísticas, centralizado) */}
            <div className="mt-6 hidden sm:flex lg:hidden w-full justify-center">
              <CTA />
            </div>

            {/* CTA — DESKTOP (mantém ao lado do texto) + avatares sem afetar layout */}
<div className="mt-6 hidden lg:block relative">
  <CTA />

  {/* Avatares posicionados ABSOLUTOS abaixo dos botões (não entram no fluxo) */}
  <div className="absolute left-0 top-full mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur">
    <div className="flex -space-x-2">
      <img src="/img/avatar/avatar1.jpeg" className="h-8 w-8 rounded-full" alt="" />
      <img src="/img/avatar/avatar2.jpeg" className="h-8 w-8 rounded-full" alt="" />
      <img src="/img/avatar/avatar3.jpeg" className="h-8 w-8 rounded-full" alt="" />
      <img src="/img/avatar/avatar4.jpeg" className="h-8 w-8 rounded-full" alt="" />
    </div>
    <span className="text-xs font-medium text-violet-100/90">+300 membros</span>
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
