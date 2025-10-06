import heroImg from '@/assets/images/gdd-hero.jpg';
import { motion } from "framer-motion";

export default function Hero() {
  return (
  <section className="relative w-full min-h-[calc(100svh-56px)] flex items-center justify-center">
      {/* Background image */}
     <img
        src={heroImg}
        alt="GDD group"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />


      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Text overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
        className="max-w-6xl mx-auto px-4 text-center"
        initial={{ y: -250, opacity: 0 }}       
        animate={{ y: 0, opacity: 1 }}          
        transition={{ duration: 1.2, ease: "easeOut" }} 
      >
      <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
      What Does GDD Do?
      </h1>
     <p className="mt-4 text-white/90 max-w-2xl text-lg leading-relaxed">
      FIRE Global Development &amp; Design aims to explore the means towards
      achieving ethical development around the world.
    </p>
      </motion.div>
      </div>
    </section>
  );
}
