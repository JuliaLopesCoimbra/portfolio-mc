"use client";
import { motion } from "framer-motion";
import React from "react";

export default function MotionSection({
  children,
  className = "",
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
