export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100svh-56px)] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        aria-label="Background"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Title + blurb (30% from top) */}
      <div className="absolute inset-x-0 top-[30%]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md leading-[1.05]">
            Development Ethics Toolkit
          </h1>
          <p className="mt-4 mx-auto max-w-3xl text-center text-base sm:text-lg md:text-xl text-white/90 font-medium">
            Our toolkit gives you actionable frameworks, worksheets, and examples so teams can design, assess, and course-correct projects responsibly—without slowing momentum.
          </p>
        </div>
      </div>
    </section>
  );
}
