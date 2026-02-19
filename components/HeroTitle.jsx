"use client";

import { motion } from "framer-motion";

export default function HeroTitle() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-bold mb-6 tracking-wide"
    >
      CONECTIVIDAD PROFESIONAL
    </motion.h2>
  );
}
