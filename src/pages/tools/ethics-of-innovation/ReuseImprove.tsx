import { useRef } from "react";
import { motion, easeOut } from "framer-motion";
import "./EthicsOfInnovation.css";

const ReuseImprove: React.FC = () => {
    const bannerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
    };

    const simulationRef = useRef<HTMLHeadingElement>(null);

    return (
        <div className="page-container">
            <header className="mission-banner">
                <motion.h1
                    className="mission-title"
                    initial="hidden"
                    animate="visible"
                    variants={bannerVariants}
                >
                    Design with the User
                </motion.h1>
            </header>

            {/* --- Section 1: Simulation --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 ref={simulationRef} className="simulation-title">
                        Ethics of Innovation Simulation
                    </h2>
                    <motion.p
                        className="simulation-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                    >
                        By utilizing the 9 principles of digital design: contrast, movement, repetition, proportion, balance, emphasis, 
                        simplicity, functionality, accessibility, and incorporating ethics of innovation, you can effectively lead a 
                        project as a program manager in this simulation. In this role, you’ll have to decide how best to design you 
                        project while keeping ethics of innovation in mind! Try it out for yourself. 
                        <br /><br />
                        <a href="https://umdsurvey.umd.edu/jfe/form/SV_6tAE6MSIm6aExU2">
                            Click Here For Simulation!
                        </a>
                    </motion.p>
                </div>
            </section>

            {/* --- Section 2: 9 Principles --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 className="simulation-title">
                        9 Principles of Digital Design
                    </h2>
                    <motion.p
                        className="simulation-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                    >
                        <b> Click on the images </b> below to learn about each of the 9 digital design principles and how to incorporate 
                        them into your project. Each page also comes with a checklist that you can use after you project to ensure that 
                        you met the necessary criteria to have incorporated ethics of innovation into your project!
                    </motion.p>
                </div>
            </section>
        </div>
    );
};

export default ReuseImprove;