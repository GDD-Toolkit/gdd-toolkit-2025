import { motion } from 'framer-motion'
import Hero from './hero'
import ExploreTools from '@/app/(site)/sections/ExploreTools'
import CaseStudies from '@/app/(site)/sections/CaseStudies'
import Splash from '@/components/Splash'
import { SlideUp, StaggerChildren } from '@/components/animations/Reveal'
import CountUp from '@/components/animations/CountUp'


export default function HomePage() {
  // Animation starts after splash finishes (1.25s) with a slight delay
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.3,
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  }

  return (
    <>
      <Splash />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <Hero />
        </motion.div>

        {/* Explore Tools section (text left, carousel right) */}
        <motion.div variants={itemVariants}>
          <ExploreTools />
        </motion.div>

        {/* Case Studies directly under Tools */}
        <motion.div variants={itemVariants}>
          <CaseStudies />
        </motion.div>

        {/* Animated stats strip */}
        <section aria-label="Toolkit stats" className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mx-auto rounded-[2rem] border border-emerald-100/80 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.25)]">
              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center place-items-center">
                <SlideUp>
                  <div className="flex flex-col items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/30">🛠</span>
                    <div className="text-5xl font-extrabold text-emerald-700 tracking-tight"><CountUp to={5} /></div>
                    <div className="text-base font-medium text-emerald-900/80">Tools</div>
                  </div>
                </SlideUp>
                <SlideUp>
                  <div className="flex flex-col items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/30">📚</span>
                    <div className="text-5xl font-extrabold text-emerald-700 tracking-tight"><CountUp to={40} suffix="+" /></div>
                    <div className="text-base font-medium text-emerald-900/80">Case Studies</div>
                  </div>
                </SlideUp>
                <SlideUp>
                  <div className="flex flex-col items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/30">🧭</span>
                    <div className="text-5xl font-extrabold text-emerald-700 tracking-tight"><CountUp to={4} /></div>
                    <div className="text-base font-medium text-emerald-900/80">Methods</div>
                  </div>
                </SlideUp>
              </StaggerChildren>
            </div>
          </div>
        </section>

        {/* Optional spacing */}
        <div className="py-8" />

        {/* IMAGE WITH TOP GRADIENT FADE */}
        <motion.div className="relative" variants={itemVariants}>
            {/* Gradient overlay (top fade) */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

            <motion.img
            src="/assets/images/footer_image.png"
            className="w-full"
            />
        </motion.div>
      </motion.div>
    </>
  )
}
