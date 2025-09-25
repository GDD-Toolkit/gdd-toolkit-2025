import heroImg from '@/assets/images/gdd-hero.jpg';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100svh-56px)]">
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
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
            What Does GDD Do?
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl text-lg leading-relaxed">
            FIRE Global Development &amp; Design aims to explore the means towards
            achieving ethical development around the world.
          </p>
        </div>
      </div>
    </section>
  );
}
