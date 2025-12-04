import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import "./Acknowledgements.css";

type Module = {
    name: string;
    students: string[];
};

const cohorts: Record<string, Module[]> = {
    "Cohort 2020": [
        { name: "Development Ethics", students: ["Vera Gbedemah","Ethan Paul"] },
        { name: "Ethics of Innovation", students: ["Ange Guianin", "Natasha Panduwawala", "Raya Seid"] },
        { name: "Human Centered Design", students: ["Amarachi Joe-Nweke", "Arrington Lancaster"] },
        { name: "Human Rights and Capabilities", students: ["Maria Castro-Rodriguez", "John Lin", "Roma Seth"] },
        { name: "Infrastructure and Interface", students: ["Manasvi Chegu", "Jalen Coles", "Shivasree Margam"] },
        { name: "Marketing and Outreach", students: ["Connie Cheung","Madeline Merrill","Anna Patterson","Sofia Retamal"] },
        { name: "Project Planning", students: ["Mikhaela-Mari Cuadera","Mahlet Dagne","Rachel Silberg"] },
    ],
    "Cohort 2021": [
        { name: "Module C", students: ["Eve", "Frank"] },
        { name: "Module D", students: ["Grace", "Hank"] },
    ],
    "Cohort 2022": [
        { name: "Module E", students: ["Ivy", "Jack"] },
        { name: "Module F", students: ["Karen", "Leo"] },
    ],
    "Cohort 2023": [
        { name: "Module G", students: ["Mia", "Nate"] },
        { name: "Module H", students: ["Olivia", "Paul"] },
    ],
    "Cohort 2024": [
        { name: "Module I", students: ["Quinn", "Ray"] },
        { name: "Module J", students: ["Sophia", "Tom"] },
    ],
    "Cohort 2025": [
        { name: "Module K", students: ["Uma", "Victor"] },
        { name: "Module L", students: ["Wendy", "Xander"] },
    ],
};

const Acknowledgements: React.FC = () => {
    const bannerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
    };

    const [selectedCohort, setSelectedCohort] = useState("Cohort 2020");

    return (
        <div className="page-container">
            <header className="mission-banner">
                <motion.h1
                    className="mission-title"
                    initial="hidden"
                    animate="visible"
                    variants={bannerVariants}
                >
                    Acknowledgements
                </motion.h1>
            </header>

            {/* --- Section 1: Intro--- */}
            <section className="content-section">
                <div className="content-card">
                    <motion.p
                        className="simulation-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                    >
                        The University of Maryland’s FIRE program
                        provides student researchers with an inclusive
                        faculty-mentored research experience.
                        Together, they worked to develop this
                        toolkit.
                    </motion.p>
                </div>
            </section>

            {/* --- Section 2: Cohort Buttons + Modules --- */}
            <section className="content-section">
                <div className="cohort-container">
                    {/* Left Column: Cohort Buttons */}
                    <div className="cohort-buttons">
                        {Object.keys(cohorts).map((cohort) => (
                            <button
                                key={cohort}
                                className={`cohort-button ${selectedCohort === cohort ? "active" : ""}`}
                                onClick={() => setSelectedCohort(cohort)}
                            >
                                {cohort}
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Modules */}
                    <div className="cohort-modules">
                        {cohorts[selectedCohort].map((module, idx) => (
                            <div key={idx} className="module-card">
                                <h4 className="module-name">{module.name}</h4>
                                <ul className="student-list">
                                    {module.students.map((s, i) => (
                                        <li key={i}>{s}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <br></br>
        </div>
    );
};

export default Acknowledgements;
