"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Utilitário para juntar classes com segurança tipada
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function PatternBG() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* brilho radial branco + roxo, sutil e visível */}
      <div
        className="pointer-events-none absolute -left-1/3 top-1/2 h-[120vh] w-[120vh] -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
        // roxo escuro com transição para indigo
        background:
          "radial-gradient(1200px 800px at 50% 10%, #28164b 0%, #1a1238 40%, #0f0b25 100%)",
      }}
      />
      {/* linhas tracejadas diagonais mais marcadas */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dashedLinesHeader" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="46" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6 6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashedLinesHeader)" />
      </svg>
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    window.open(
      "https://wa.me/5531996367096?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
      "_blank"
    );
  }

  const navItems = [
   
    { href: "#funciona", label: "COMO FUNCIONA" },
    { href: "#results", label: "RESULTADOS" },
    { href: "#planos", label: "PLANOS" },
    { href: "#duvidas", label: "DÚVIDAS" },
    { href: "#sobre", label: "SOBRE" },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
          background:
            "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(800px 500px at 50% 85%, rgba(168,85,247,0.18), transparent 60%)",
        }}
    >
      <div className="relative">
        <PatternBG />
        {/* camada sólida + blur para legibilidade acima do Hero */}
        <div className="absolute inset-0 " />

        {/* conteúdo */}
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <img src="/img/logo/png-dourado.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Navegação central (desktop) */}
          <nav className="relative z-10 hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-bold transition-colors",
                  "text-violet-500 hover:text-violet-900"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Ações à direita */}
          <div className="relative z-10 flex items-center gap-2">
            <button
              onClick={handleClick}
              className={cn(
                "hidden md:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition",
                "bg-violet-600 text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
              )}
            >
              <FaWhatsapp className="text-lg" /> Falar no WhatsApp
            </button>

            {/* Botão hambúrguer (mobile) */}
            <button
              className="md:hidden rounded-lg p-2 text-violet-800 hover:bg-violet-100/60"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Linha separadora minimalista */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />

        {/* Drawer Mobile */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-[max-height] duration-300",
            isOpen ? "max-h-[420px]" : "max-h-0"
          )}
        >
          <div className="px-4 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-violet-800 hover:text-violet-950"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-violet-300 bg-white/70 px-4 py-3 font-semibold text-violet-800 hover:bg-violet-50"
              onClick={() => {
                handleClick();
                setIsOpen(false);
              }}
            >
              <FaWhatsapp className="text-xl" /> Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
