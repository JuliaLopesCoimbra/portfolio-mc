"use client";
import { motion, useReducedMotion, type MotionProps, type Target } from "framer-motion";
import React from "react";

type RevealProps = React.PropsWithChildren<{
  as?: React.ElementType;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  once?: boolean;
  blur?: boolean; // 👈 novo: controla se aplica blur
}> & MotionProps;

export function Reveal({
  as: Tag = "div",
  delay = 0,
  duration = 0.6,
  y = 24,
  x = 0,
  scale = 1,
  once = true,
  blur = false, // 👈 por padrão, sem blur
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const canBlur = blur && !reduce;

  const initial: Target = canBlur
    ? { opacity: 0, y, x, scale, filter: "blur(6px)" }
    : { opacity: 0, y, x, scale };

  const animate: Target = canBlur
    ? { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }
    : { opacity: 1, y: 0, x: 0, scale: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, ease: "easeOut", delay }}
      {...rest}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
}

export function Stagger({
  children,
  delay = 0,
  stagger = 0.12,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ZoomIn({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
