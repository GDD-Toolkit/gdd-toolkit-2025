import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SlideUp, ScaleIn, StaggerChildren } from "@/components/animations/Reveal";

type Tool = {
  title: string;
  subtitle: string;
  href: string;
};

const tools: Tool[] = [
  { title: "Ethics Canvas", subtitle: "AI-Enabled Business Innovation Tool", href: "/ethics-canvas" },
  { title: "Ethics of Innovation", subtitle: "Interactive Global Dev Explorer", href: "/ethics-of-innovation" },
  { title: "Worthwhile Development", subtitle: "Guides, cases, and frameworks", href: "/worthwhile-development" },
  { title: "Human Centered Design", subtitle: "Real projects, real impact", href: "/human-centered-design" },
];

export default function ExploreTools() {
  const [idx, setIdx] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIdx((i) => (i + 1) % tools.length), 6000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [idx]);

  const prev = () => setIdx((i) => (i - 1 + tools.length) % tools.length);
  const next = () => setIdx((i) => (i + 1) % tools.length);

  return (
    <section aria-labelledby="tools-title" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10 items-center">
          {/* LEFT: text */}
          <div className="md:col-span-5">
            <SlideUp>
              <h2 id="tools-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-700 text-center md:text-left">
                Explore Our Tools
              </h2>
            </SlideUp>
            <FadeIn>
              <p className="mt-4 text-base sm:text-lg text-gray-700 md:text-left text-center">
                The Development Ethics Toolkit turns principles into action with practical, classroom-tested tools. Use them to plan, assess, and improve projects—without slowing momentum.
              </p>
            </FadeIn>
            <StaggerChildren className="mt-6 space-y-3 text-gray-800 md:text-left text-left">
              <SlideUp><li><strong>Ethics of Innovation</strong> — weigh benefits, risks, and trade-offs before you build.</li></SlideUp>
              <SlideUp><li><strong>Human-Centered Design</strong> — map stakeholders, needs, and harms to avoid.</li></SlideUp>
              <SlideUp><li><strong>Project Planning</strong> — milestones, roles, and accountability checklists.</li></SlideUp>
              <SlideUp><li><strong>Project Evaluation</strong> — measurable indicators for outcomes and unintended effects.</li></SlideUp>
            </StaggerChildren>
            <FadeIn>
              <p className="mt-4 text-sm text-gray-500">All tools include templates and step-by-step guides.</p>
            </FadeIn>
          </div>

          {/* RIGHT: carousel */}
          <div className="mt-10 md:mt-0 md:col-span-7 md:justify-self-end w-full max-w-3xl">
            <ScaleIn>
            <div className="relative h-[360px] md:h-[420px]">
              {/* allow arrows to sit outside the card */}
              <div className="relative h-full overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.a
                    key={idx}
                    href={tools[idx].href}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    whileInView={{ scale: 1.01 }}
                    viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                    className="absolute inset-x-6 md:inset-x-10 top-0 bottom-0 rounded-2xl border-2 border-gray-300 bg-white shadow-xl z-0"
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
                      {/* Emoji icon back to original style */}
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50">🧭</div>
                      {/* Title back to original spot under icon */}
                      <div className="text-lg md:text-xl font-semibold text-emerald-800 underline underline-offset-4">
                        {tools[idx].title}
                      </div>
                      <p className="text-sm md:text-base text-gray-600 max-w-md">
                        {tools[idx].subtitle}
                      </p>
                    </div>
                  </motion.a>
                </AnimatePresence>
              </div>

              {/* arrows */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 rounded-lg bg-white/90 px-3 py-2 shadow ring-1 ring-gray-200 hover:bg-white z-10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 rounded-lg bg-white/90 px-3 py-2 shadow ring-1 ring-gray-200 hover:bg-white z-10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                ›
              </button>

              {/* dots */}
              <div className="mt-6 flex items-center justify-center gap-3">
                {tools.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={[
                      "h-3.5 w-3.5 rounded-full transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500",
                      i === idx ? "bg-gray-400 border border-gray-400" : "bg-transparent border border-black/80",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  );
}


