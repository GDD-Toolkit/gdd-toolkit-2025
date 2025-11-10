import { motion, easeOut} from "framer-motion";
import { useState } from "react";
import HCDSurvey from "@/assets/images/HCD-Survey.png";
import HCDPersona from "@/assets/images/HCD-Persona.png"
import "./HumanCenteredDesign.css";

const bannerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
};

export default function HumanCenteredDesign() {
 
  const [selectedCapsule, setSelectedCapsule] = useState<string | null>(null);

  return (
    <div className="entire-Container">
      {/*Header*/}
      <header className="head-Banner">
        <motion.h1
          className="header-Font-Styling"
          initial="hidden"
          animate="visible"
          variants={bannerVariants}
        >
          Human Centered Design
        </motion.h1>
          <motion.p
          className="header-Sub-Paragraph"
          initial="hidden"
          animate="visible"
          variants={bannerVariants}
          transition={{ delay: 0.2, duration: 0.45, ease: easeOut }}
        >
          “Human-centered design is a philosophy, not a precise set of methods, but one that assumes that innovation should start by getting close to users and observing their activities.”
        <br />
          <strong className="header-Sub-Bold">
            Donald A. Norman, co-founder of Nielsen Norman Group
          </strong>
        </motion.p>
      </header>
      <div className="first-Container">
        <section className="white-Box">
          <h2 className="subheading"
          >
            Factors To Consider
          </h2>
          <motion.p
            className="white-Box-Text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
           There are several factors that must be taken into consideration during the process of designing, including its functionalities, end-users, and general usability. 
           However, designers occasionally their own experiences and insights, in turn influencing the way these factors are taken into account. 
           To develop a truly useful and inclusive toolkit, it is necessary to take into consideration the design choices' effects on all sorts of end-users and ensure that the resulting product benefits everyone fairly.
          </motion.p>
        </section>
      </div>
      <div className="second-Container">
        <section className="white-Box">
          <h2 className="subheading"
          >
            Ethical Design Thinking
          </h2>
          <motion.p
            className="white-Box-Text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
           Even when it is not feasible to predict the needs of all potential users, efforts must be made to create the design as user-friendly and inclusive as it possibly can. 
           The conceptualization of development ethics prompts us to ask whether or not our design decisions directly address the needs of the user or only our own presumptions. 
           Human-centered design facilitates it to ask such questions by prioritizing empathy, feedback, and collaboration among designers and their potential beneficiaries in the entire process of development. 
           One approach that effectively ensures that the toolkit is meaningful and useful as well as accessible by design to the user is Stanford’s iterative 5-step d.school model: Empathize, Define, Ideate, Prototype, Test.
          </motion.p>
        </section>
        <div className="white-Box">
          <h2 className="subheading"
          >
            5-Step D.School Model
          </h2>
          <motion.p
            className="white-Box-Text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
           Learn more in depth about each step of Stanford's iterative d.school model by clicking on their respective capsules!
          </motion.p>
        </div>
      </div>

      {/* Top 5 Capsules and Drop Down */}
      <div className="top-Capsules-Container">

        {/* Emphasize Capsule */}
      <section className="top-Capsule">
        <div
          onClick={() => setSelectedCapsule("emphasize")}
          className="top-Capsules-Styling"
        >
          <h2 className="capsule-Header">
            Emphasize
          </h2>
        </div>
        </section>

      {/* Define Capsule*/}
      <section className="top-Capsule">
        <div
          onClick={() => setSelectedCapsule("define")}
          className="topTwo-Capsules-Styling"
        >
          <h2 className="capsule-Header">
            Define
          </h2>
        </div>
      </section>

      {/* Ideate Capsule*/}
      <section className="top-Capsule">
        <div
          onClick={() => setSelectedCapsule("ideate")}
          className="top-Capsules-Styling"
        >
          <h2 className="capsule-Header">
            Ideate
          </h2>
        </div>
      </section>

      {/* Prototype Capsule */}
      <section className="top-Capsule">
        <div
          onClick={() => setSelectedCapsule("prototype")}
          className="topTwo-Capsules-Styling"
        >
          <h2 className="capsule-Header">
            Prototype
          </h2>
        </div>
      </section>

      {/* Test Capsule */}
      <section className="top-Capsule">
        <div
          onClick={() => setSelectedCapsule("test")}
          className="top-Capsules-Styling"
        >
          <h2 className="capsule-Header">
            Test
          </h2>
        </div>
      </section>
      </div>

      {/* Content Drop Box */}
      {selectedCapsule && (
      <div className="mt-10 w-full flex justify-center">
        <div className="w-full max-w-2xl bg-white shadow-lg border border-gray-200 rounded-xl p-8">
        {selectedCapsule === "emphasize" && (
        <div>
          <p>
            In order to properly implement Human-Centered Design principles, it is
            essential to understand and empathize with end users by knowing their
            background and their needs.
          </p>
          <img src={HCDPersona} alt="HCD Persona" />
          <p className="mt-8">
            In order for us to better properly empathize with end users, we created a
            persona and analyzed how we can meet their needs.
          </p>
        </div>
        )}

        {selectedCapsule === "define" && (
        <div>
          <p>
            Analyze data gathered from empathizing with the population and identify an underlying issue.
          </p>
          <img src={HCDSurvey} alt="HCD Survey" />
          <p className="mt-8">
            To understand how he could improve his class, a professor sent out a survey to his students. 
            Can you determine a trend in the responses and define a problem the students are experiencing?
          </p>
          <p className = "mt-8">
            Though there are multiple problems, the main one expressed was the pace of the professor.
          </p>
        </div>
        )}

        {selectedCapsule === "ideate" && (
        <div>
          <p>
            Develop solutions that meet specified needs.
          </p>
          <p className="mt-8">
            In order for us to better properly empathize with end users, we created a
            persona and analyzed how we can meet their needs.
          </p>
          <ul className="bullet-Point-List">
              <li> Brainstorm various ideas and decide on the best route.</li>
              <li> Begin stages of designs, development, and prototypes.</li>
              <li> Test out various ideas and prototypes.</li>
              <li> Utulize feedback in order to improve ideas and prototypes</li>
            </ul>
        </div>
        )}

        {selectedCapsule === "prototype" && (
        <div>
          <p>
            Create versions of your ideas so they can be evaluated before finalizing a solution.
          </p>
          <ul className="bullet-Point-List">
            <li> Low fidelity prototypes (such as sketches and storyboards).</li>
            <li> Role-player simulations.</li>
            <li> Physical prototypes (such as clay, cardboard, 3D printing).</li>
          </ul>
        </div>
        )}

        {selectedCapsule === "test" && (
        <div>
          <p>
            Present the end-user with a high-fidelity prototype. Listen to user feedback and reiterate the process if needed.
          </p>
          <ul className="bullet-Point-List">
            <li> Conduct focus groups with end-users.</li>
            <li> Send out a survey.</li>
          </ul>
        </div>
        )}
        </div>
      </div>
      )}
    </div>
 );
}