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
          <li><strong>Functionings:</strong> His research focused on societal inequalities.</li>
          <li><strong>Capabilities:</strong> Views poverty and underdeveloped communities as a consequence of capability deprivations.</li>
          <li><strong>Agency:</strong> He believed development was too complex for a single path to improve everyone’s lives.</li>
        </ul>
      <ul className="list-disc pl-6 text-black-700 space-y-2">
          <li><strong>Functionings:</strong> Helped form the two major schools of thought in the human development and capabilities field.</li>
          <li><strong>Capabilities:</strong> Her philosophy is rooted in ten explicitly stated central capabilities needed for development. </li>
          <li><strong>Agency:</strong> Believed that Satisfying these central capabilities, which are physical, social, and, emotional, can be a way to achieve justice.</li>
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

      <section className="bg-green-100 py-10">
       {
        <section>
        <h2 className="text-4xl font-extrabold mb-4">The Human Rights Based Approach</h2>
        <p className = ""> NOT YET CHANGED. WAITING FOR INPUT</p>
        </section>
       }
      </section>

      <section>
        <p>
            <div className = "">
                The Human Rights-based approach to global development, a subset to the Capability Approach, aims to ensure that human rights are considered and respected when a country undergoes development. 
                In 1948, the first international manuscript that outlines fundamental human rights was published by the United Nations (UN). 
                This document was called the  Universal Declaration of Human Rights and merely outlined standards for human rights from an international perspective. 
                This declaration consists of 30 articles, setting forth fundamental human rights such as equality before the law, protection from cruel punishment, the right to leisure, and many more. 
                While the Universal Declaration of Human Rights established a list of rights that should be guaranteed to the public, it didn’t have any direct application to global development. 
                In 1997, the UN underwent a reform which switched their stance from a “basic needs” approach to the Human Rights-based approach. 
                This effectively switched the focus of global development from the beneficiaries to the general human population. 
                In 2003, the UN Common Understanding on a Human-Rights-Based Approach (HRBA) to Development Cooperation was adopted, which officially put the focus on the people. 
                In this document, the UN sets forth elements that ensure proper consideration of human rights when developing a nation. 
                Some of these elements include the simple recognition of human rights as a goal of global development rather than just a supporting factor. 
                Other elements include recognizing the people as key actors, “locally owned” development, situation analysis, and using human rights as a guide.
            </div>
        </p>
      </section>
    </main>
  );
}