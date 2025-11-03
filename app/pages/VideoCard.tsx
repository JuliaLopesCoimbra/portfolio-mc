"use client";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion"; 

function PatternBG() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* brilho radial branco + roxo */}
      <div
        className="pointer-events-none absolute -left-1/4 top-1/2 h-[120vh] w-[120vh] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.4), rgba(237,233,254,0.25) 50%, transparent 75%)",
        }}
      />
      {/* linhas tracejadas diagonais */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dashedLinesS5" width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="50" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6 6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashedLinesS5)" />
      </svg>
    </div>
  );
}

interface FeedbackVideo {
  name: string;
  videoUrl: string;
  quote: string;
  highlight: string; // frase-chave
}

function VideoCard({ item }: { item: FeedbackVideo }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-violet-300 bg-white/85 shadow-sm backdrop-blur">
      <div className="relative aspect-[14/16] w-full overflow-hidden bg-black">

      <video
  controls
  preload="metadata"
  muted
  playsInline
  poster={`/videos/thumbs/${item.videoUrl.split("/").pop()?.replace(".mp4", ".jpg")}`}
  className="h-full w-full object-cover"
>
  <source src={item.videoUrl + "#t=0.1"} type="video/mp4" />
</video>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100">
          <FaPlayCircle className="text-5xl text-white" />
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold text-neutral-900">{item.name}</p>
        <p className="mt-1 text-xs italic text-neutral-600">“{item.quote}”</p>
        <p className="mt-2 rounded-lg bg-violet-50 px-3 py-2 text-xs font-medium text-violet-700">
          {item.highlight}
        </p>
      </div>
    </div>
  );
}

export default function SectionFeedback() {
  const videos: FeedbackVideo[] = [
    {
      name: "Sérgio M.",
      videoUrl: "/video/video1.mp4",
      quote: "Eles dão um suporte necessário de forma didática para que a gente não fique sem entender nada.",
      highlight: "Suporte próximo e ajustes semanais que fizeram diferença.",
    },
    {
      name: "Manoela",
      videoUrl: "/video/video2.mp4",
      quote: "Eu tinha dificuldade alimentares e a partir de quando eu conheci eles, eles mudaram minha relação com a comida.",
      highlight: "Plano fácil de seguir, finalmente encaixou na minha rotina!",
    },
    {
      name: "Carolina C.",
      videoUrl: "/video/video3.mp4",
      quote: "O que você busca é um atendimento humanizado e de perto, eu tenho certeza que você não vai se arrepender de entrar para esse time",
      highlight: "Treino adaptado às minhas limitações com resultado visível.",
    },
     {
      name: "Maria Luiza",
      videoUrl: "/video/video4.mp4",
      quote: "Foi muito dificil fazer tudo sozinha e eu não saia do lugar, até que então num processo de 2 anos eu evolui muito.",
      highlight: "Evolução real com acompanhamento e direção certa.",
    },
     {
      name: "Nicoli O.",
      videoUrl: "/video/video5.mp4",
      quote: "Ele realmente olha sua rotina e objetivos e monta um treino individualizado para você.",
      highlight: "Resultados que eu nunca conseguiria sozinha.",
    },
     {
      name: "Francisco A.",
      videoUrl: "/video/video6.mp4",
      quote: "O diferencial deles é sem dúvidas é o acompanhamento, você ser respondido e ficar sem dúvidas",
      highlight: "Suporte que faz toda a diferença no dia a dia.",
    },
  ];

  return (
    <section id="feedbacks" className="relative isolate overflow-hidden py-16 sm:py-24" style={{ background: "radial-gradient(circle at 50% 20%, #ffffff, #ede9fe 70%)" }}>
      {/* <PatternBG /> */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
 
> 
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
      
        <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">
          Feedback em vídeo
        </h2>
        <p className="mt-2 max-w-prose text-sm text-neutral-700">
          Depoimentos em primeira pessoa. Veja a fala de quem já transformou a rotina com a Muscle Club e como isso impactou a vida deles.
        </p>

        {/* Grid de vídeos */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((item, i) => (
            <VideoCard key={i} item={item} />
          ))}
        </div>
      </div>
</motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </section>
  );
}