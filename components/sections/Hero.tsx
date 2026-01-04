import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold">Abidemi</h1>
        <p className="text-xl mt-4">Full-stack Developer</p>
      </motion.div>
    </section>
  );
}
