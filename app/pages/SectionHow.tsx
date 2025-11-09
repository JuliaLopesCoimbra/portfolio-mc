"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function handleWhatsAppClick() {
  window.open(
    "https://wa.me/5531936180154?text=Quero%20garantir%20minha%20vaga%20na%20Muscle%20Club!",
    "_blank"
  );
}

function PatternBG() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 600px at 10% 10%, rgba(139,92,246,0.20), transparent 60%), radial-gradient(900px 500px at 85% 30%, rgba(79,70,229,0.18), transparent 60%), radial-gradient(800px 500px at 50% 85%, rgba(168,85,247,0.15), transparent 60%)",
        }}
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="gridS4"
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <path
              d="M36 0H0V36"
              fill="none"
              stroke="#fff"
              strokeOpacity="0.6"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridS4)" />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_60%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}

export default function SectionHowV3() {
  return (
    <section
      id="funciona"
      className="relative isolate overflow-hidden py-16 sm:py-24"
      style={{
        // ⬇️ mantém exatamente o seu fundo
        background:
          "radial-gradient(1200px 800px at 50% 10%, #28164b 0%, #1a1238 40%, #0f0b25 100%)",
      }}
    >
      {/* <PatternBG /> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mx-auto w-full max-w-7xl px-6 md:px-10"
      >
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-widest text-violet-300">
            COMO FUNCIONA
          </p>
          <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            COMO A MUSCLE CLUB FUNCIONA?
          </h2>
          <p className="mt-2 text-sm text-violet-100/80">
            Veja como construímos seu protocolo: entendimento, planejamento do
            zero e acompanhamento real.
          </p>
        </div>

       {/* timeline sem imagens - linha que “para” nos números */}
<div className="relative mx-auto mt-10 max-w-3xl">

  <ul className="space-y-6">

    {/* 01 (primeiro): só conector de baixo */}
    <li className="relative rounded-2xl p-5">
      {/* círculo */}
      <div className="absolute left-6 top-5 -translate-x-1/2">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-[11px] font-bold text-white shadow-[0_6px_20px_rgba(139,92,246,0.35)] ring-1 ring-white/20">
          01
        </div>
      </div>

      {/* conector abaixo do número (vai até o próximo item) */}
      <div className="absolute left-6 -translate-x-1/2"
           style={{ top: "63px", bottom: "-24px" }}       /* 29px = centro do círculo; -24px = espaço (space-y-6) */
      >
        <div className="h-full w-[2px] bg-gradient-to-b from-violet-400/60 via-violet-400/20 to-transparent" />
      </div>

      <h3 className="pl-10 text-lg font-semibold text-white">Entendimento completo de você</h3>
      <p className="mt-2 pl-10 text-sm leading-relaxed text-violet-100/85">
        Antes de prescrever qualquer plano, <strong>nós entendemos você por completo</strong>: sua
        rotina, alimentação, limitações e estilo de vida. Com base nesses dados,
        desenvolvemos um planejamento estratégico e personalizado que <strong>maximiza seus
        resultados</strong> e te leva para mais perto do shape que sempre desejou.
      </p>
    </li>

    {/* 02 (meio): conector em cima e embaixo */}
    <li className="relative rounded-2xl p-5">
      {/* círculo */}
      <div className="absolute left-6 top-5 -translate-x-1/2">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-[11px] font-bold text-white shadow-[0_6px_20px_rgba(139,92,246,0.35)] ring-1 ring-white/20">
          02
        </div>
      </div>

      {/* conector acima do número (vem do item anterior) */}
      <div className="absolute left-6 -translate-x-1/2"
           style={{ top: "-38px", height: "53px" }}       /* -24px cobre o gap; 53px ≈ (gap 24 + centro 29) */
      >
        <div className="h-full w-[2px] bg-gradient-to-b from-transparent via-violet-400/20 to-violet-400/60" />
      </div>

      {/* conector abaixo do número (vai até o próximo) */}
      <div className="absolute left-6 -translate-x-1/2"
           style={{ top: "63px", bottom: "-24px" }}
      >
        <div className="h-full w-[2px] bg-gradient-to-b from-violet-400/60 via-violet-400/20 to-transparent" />
      </div>

      <h3 className="pl-10 text-lg font-semibold text-white">Planejamento individualizado (até 5 dias)</h3>
      <p className="mt-2 pl-10 text-sm leading-relaxed text-violet-100/85">
        Após a análise dos seus dados e objetivos, <strong>elaboramos um planejamento
        individualizado, do zero, com base em evidências</strong> e prática profissional.
        Em até 5 dias úteis, você recebe seu protocolo completo de dieta e/ou treino,
        pensado para entregar resultado, manter a constância e <strong>se encaixar na sua
        realidade</strong>.
      </p>
    </li>

    {/* 03 (último): só conector acima; a linha termina no número */}
    <li className="relative rounded-2xl p-5">
      {/* círculo */}
      <div className="absolute left-6 top-5 -translate-x-1/2">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-[11px] font-bold text-white shadow-[0_6px_20px_rgba(139,92,246,0.35)] ring-1 ring-white/20">
          03
        </div>
      </div>

      {/* conector acima do número (vem do item anterior) */}
      <div className="absolute left-6 -translate-x-1/2"
           style={{ top: "-32px", height: "45px" }}
      >
        <div className="h-full w-[2px] bg-gradient-to-b  via-violet-400/20 to-violet-400/60" />
      </div>

      <h3 className="pl-10 text-lg font-semibold text-white">Acompanhamento constante (não te abandonamos)</h3>
      <p className="mt-2 pl-10 text-sm leading-relaxed text-violet-100/85">
        <strong>Você não vai ficar sozinho nessa.</strong> Toda semana analisamos sua evolução e
        ajustamos o plano para continuar funcionando na sua rotina. E, se algo sair
        do eixo, você tem <strong>acesso direto ao seu profissional via WhatsApp</strong>, garantindo
        suporte rápido, motivação constante e resultado contínuo.
      </p>
      
    </li>
    
  </ul>
</div>


        {/* CTA mantém seu estilo e copy */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            <FaWhatsapp className="text-lg" />
            BORA GARANTIR SUA VAGA
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
    </section>
  );
}
