"use client";
import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaEnvelope,FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion"; 

function PatternBG() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="pointer-events-none absolute -left-1/3 top-1/2 h-[120vh] w-[120vh] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.35), rgba(237,233,254,0.25) 50%, transparent 75%)",
        }}
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-violet-200 bg-white/90 backdrop-blur">
      <PatternBG />
            <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
       
      > 
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo e missão */}
          <div>
            <img src="/img/logo/png-dourado.png" alt="Logo Muscle Club" className="h-12 w-auto" />
            <p className="mt-3 text-sm text-neutral-700">
              Transformando vidas com nutrição, treino e acompanhamento de verdade. Sua melhor versão começa aqui.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-violet-700">Links</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><Link href="#funciona" className="hover:text-violet-600">Como Funciona</Link></li>
              <li><Link href="#results" className="hover:text-violet-600">Resultados</Link></li>
              <li><Link href="#planos" className="hover:text-violet-600">Planos</Link></li>
              <li><Link href="#duvidas" className="hover:text-violet-600">Dúvidas</Link></li>
              <li><Link href="#sobre" className="hover:text-violet-600">Sobre</Link></li>
            </ul>
          </div>

          {/* Contato */}
            <div className="flex flex-col gap-3">
          <h4 className="text-sm text-violet-700 font-semibold">Contato</h4>
          <a
            href="https://wa.me/5531996367096?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria."
            target="_blank"
            className="inline-flex items-center gap-2 text-neutral-700 hover:text-violet-600 transition"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>
          <a
            href="mailto:contato@muscleclub.com.br"
            className="inline-flex items-center gap-2 text-neutral-700 hover:text-violet-600 transition"
          >
            <FaEnvelope className="text-lg" />
            E-mail
          </a>
          <a
            href="https://www.instagram.com/muscleclub.academy"
            target="_blank"
            className="inline-flex items-center gap-2 text-neutral-700 hover:text-violet-600 transition"
          >
            <FaInstagram className="text-lg" />
            Instagram
          </a>
          {/* <a
            href="https://www.youtube.com/@joaovictorherker"
            target="_blank"
            className="inline-flex items-center gap-2 text-neutral-700 hover:text-violet-600 transition"
          >
            <FaYoutube className="text-lg" />
            YouTube Channel
          </a> */}
        </div>

          {/* CTA */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-violet-700">Faça parte</h3>
            <p className="text-sm text-neutral-700">Garanta sua vaga agora e inicie sua evolução com a Muscle Club.</p>
            <Link
              href="https://wa.me/5531996367096?text=Quero%20garantir%20minha%20vaga%20na%20Muscle%20Club!"
              target="_blank"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              <FaWhatsapp /> Garantir Vaga
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-violet-200 pt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Muscle Club. Todos os direitos reservados.
        </div>
      </div>
       </motion.div>
    </footer>
  );
}
