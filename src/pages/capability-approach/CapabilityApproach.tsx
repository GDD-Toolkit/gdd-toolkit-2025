import Timeline from "./Timeline";

export default function CapabilityApproach() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20 space-y-16">
    <section className="bg-green-100 py-10">
       {      
        <section>
        <h1 className="text-4xl font-extrabold mb-4">The Capability Approach</h1>
        <p className="text-lg text-black-600 max-w-3xl">
          The Capability Approach to human development was developed in the 1980’s as a way to look at development beyond economic measures.
        </p>
      </section>
       }   
      </section>
      <section>
        <div className = "">
            <h2 className = "text-4xl font-bold"> Pioneers Of This Approach</h2>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Amartya Sen</h2>
        <img
            src="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/04/Amartya-Sen.jpg"
            alt="Capabilities concept"
            className="w-full h-64 object-cover rounded-xl shadow-md"
        />
        </div>
        <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Martha Nussbaum</h2>
        <img
            src="https://images2.corriereobjects.it/methode_image/2023/09/11/Sette/Foto%20Sette%20-%20Trattate/Unknown-9-kQiC-U344092603192d8B-656x492@Corriere-Web-Sezioni.jpeg?v=20230920062518"
            alt="Freedom concept"
            className="w-full h-64 object-cover rounded-xl shadow-md"
        />
        </div>
        </div>
      </section>

      <section>
      <div className="flex justify-between items-center mt-8">
        <ul className="list-disc pl-6 text-black-700 space-y-2">
          <li> His research focused on societal inequalities.</li>
          <li> Views poverty and underdeveloped communities as a consequence of capability deprivations.</li>
          <li> He believed development was too complex for a single path to improve everyone’s lives.</li>
        </ul>
      <ul className="list-disc pl-6 text-black-700 space-y-2">
          <li> Helped form the two major schools of thought in the human development and capabilities field.</li>
          <li> Her philosophy is rooted in ten explicitly stated central capabilities needed for development. </li>
          <li> Believed that Satisfying these central capabilities, which are physical, social, and, emotional, can be a way to achieve justice.</li>
        </ul>
      </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Capability Approach Explained By The Training & Knowledge Module Team</h2>
        <p className="text-gray-600 mb-4">
          The following video helps explain the definition of Capability Approach along with examples.
        </p>
       <div className="w-full mt-6 rounded-xl shadow-lg">
       <video
        controls
        className="w-full h-[500px] rounded-xl object-cover"
        >
        <source
        src="http://18.233.151.140/wp-content/uploads/2024/11/Cabability-approach-video.mp4"
        type="video/mp4"
        ></source>
        </video>
      </div>
      </section>

      <section className="bg-green-100 py-5">
       {
        <section>
        <h2 className="text-4xl font-extrabold mb-4">The Human Rights Based Approach</h2>
        <p>This approach to global development, a subset to the Capability Approach, aims to ensure that human rights are considered and respected when a country undergoes development.
          Below is a small timeline illustrating how this approach came to be. 
        </p>
        </section>
       }
      </section>

      <section>
        <p>
            <Timeline/> 
        </p>
      </section>
    </main>
  );
}