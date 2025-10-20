"use client";
import {
  FaWhatsapp,
  FaSearch,
  FaClipboardList,
  FaHeadset,
} from "react-icons/fa";

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
      {/* mesh roxo/indigo mais elegante */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 600px at 10% 10%, rgba(139,92,246,0.20), transparent 60%), radial-gradient(900px 500px at 85% 30%, rgba(79,70,229,0.18), transparent 60%), radial-gradient(800px 500px at 50% 85%, rgba(168,85,247,0.15), transparent 60%)",
        }}
      />
      {/* linhas diagonais sutis */}
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
      {/* vinheta */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_60%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}

function StepCard({
  number,
  title,
  text,
  icon,
  image,
  flip = false,
}: {
  number: string;
  title: string;
  text: React.ReactNode;
  icon: React.ReactNode;
  image: string; // caminho da imagem
  flip?: boolean; // alterna imagem/texto
}) {
  return (
    <div
      className={cn(
        "grid items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur",
        "md:grid-cols-2"
      )}
    >
      {/* Coluna texto */}
      <div className={cn("order-2", flip ? "md:order-2" : "md:order-1")}>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-violet-200">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-violet-500/20 text-violet-200">
            {icon}
          </span>
          <span className="font-semibold tracking-wide text-violet-100">
            Passo {number}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-violet-100/85">
          {text}
        </p>
      </div>

      {/* Coluna imagem */}
      <div className={cn("order-1", flip ? "md:order-1" : "md:order-2")}>
        <div className="relative overflow-hidden rounded-2xl">
          {/* moldura com brilho sutil */}
          <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,theme(colors.violet.500/.5),theme(colors.cyan.400/.4),transparent_60%)] blur-[2px]" />
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20">
            <img
              src={image}
              alt="Ilustração do passo"
              className="h-full w-full object-cover"
            />
            {/* legenda pequena */}
            <div className="absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-1 text-[10px] font-medium text-white/90">
              exemplo ilustrativo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectionHowV3() {
  return (
    <section
      id="funciona"
      className="relative isolate overflow-hidden py-16 sm:py-24"
      style={{
        background:
          "radial-gradient(1200px 800px at 50% 10%, #28164b 0%, #1a1238 40%, #0f0b25 100%)",
      }}
    >
      <PatternBG />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
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

        <div className="mt-10 grid gap-6">
          <StepCard
            number="1"
            title="Entendimento completo de você"
            icon={<FaSearch />}
            image="img/platform/mc1.png" // substitua pela sua imagem
            text={
              <>
                Antes de prescrever qualquer plano,{" "}
                <strong>nós entendemos você por completo</strong>: sua rotina,
                alimentação, limitações e estilo de vida. Com base nesses dados,
                desenvolvemos um planejamento estratégico e personalizado que{" "}
                <strong>
                  {" "}
                  maximiza seus resultados e te leva para mais perto do shape
                  que sempre desejou.
                </strong>
              </>
            }
          />

          <StepCard
            number="2"
            title="Planejamento individualizado (até 5 dias)"
            icon={<FaClipboardList />}
            image="img/platform/mc2.png"
            flip
            text={
              <>
                Após a análise dos seus dados e objetivos,{" "}
                <strong>
                  elaboramos um planejamento individualizado, desenvolvido do
                  zero, com base em evidências{" "}
                </strong>{" "}
                e prática profissional. Em até 5 dias úteis, você recebe seu
                protocolo completo de dieta e/ou treino, pensado para entregar
                resultado, manter a constância e se encaixar perfeitamente na
                sua realidade.
              </>
            }
          />

          <StepCard
            number="3"
            title="Acompanhamento constante (não te abandonamos):"
            icon={<FaHeadset />}
            image="img/platform/mc3.png"
            text={
              <>
                <strong>Você não vai ficar sozinho nessa.</strong>
                Toda semana analisamos sua evolução e fazemos os ajustes
                necessários para que o plano continue funcionando na sua rotina.
                E se algo sair do eixo, você tem{" "}
                <strong>acesso direto ao seu profissional via WhatsApp</strong>,
                garantindo suporte rápido, motivação constante e resultado
                contínuo.
              </>
            }
          />
        </div>

        {/* CTA */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleWhatsAppClick}
            className={cn(
              "inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition",
              "bg-violet-600 text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
            )}
            aria-label="Garantir vaga"
          >
            <FaWhatsapp className="text-lg" /> BORA GARANTIR VAGA
          </button>
        
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
    </section>
  );
}
