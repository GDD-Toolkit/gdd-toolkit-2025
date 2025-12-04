import { useRef } from "react";
import { motion, easeOut } from "framer-motion";
import "./EthicsOfInnovation.css";

const Sustainability: React.FC = () => {
    const bannerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
    };

    const simulationRef = useRef<HTMLHeadingElement>(null);

    return (
        <div className="page-container">
            <header className="mission-banner">
                <div className="header-flex">
                    <button
                        className="back-button"
                        onClick={() => window.history.back()}
                    >
                        ← Back
                    </button>
                    <motion.h1
                        className="mission-title"
                        initial="hidden"
                        animate="visible"
                        variants={bannerVariants}
                    >
                        Build for Sustainability
                    </motion.h1>
                </div>
            </header>

            {/* --- Section 1: Image + Summary --- */}
            <section className="content-section">
                <div className="content-card principles-summary-flex">
                    <h2 ref={simulationRef} className="principles-summary-title">Summary</h2>

                    <div className="principles-summary-content">
                    <div className="principles-summary-image-wrapper">
                        <img
                        src="/assets/images/sustainability.png"
                        alt="Build for Sustainability Summary"
                        className="principles-summary-image"
                        />
                    </div>

                    <div className="principles-summary-text-wrapper">
                        <p className="principles-summary-text">
                        Building for sustainability allows the project planners to maximize long term impact by maintaining user and stakeholder support and ensuring that the user and stakeholder contributions are still developed even in the case of a loss of funding or other interruptions. The ultimate goal of building a sustainable program or platform is to achieve not only a long term impact but also a positive impact. Projects built for sustainability are more likely to be ingrained in policies and institutionalized by an organization, company, or local government. 
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Checklist --- */}
            <section className="content-section checklist-section">
                <div className="content-card">
                    <h2 className="simulation-title">Checklist Questions</h2>

                    <ul className="checklist">
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p> Have you planned and built for sustainability from the start?</p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p> Is there an agreed-upon definition of sustainability? </p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p> Is the implementation adaptable to the user as their needs and the context changes? </p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p> Have you identified a sustainable business model? </p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p>Does this implementation engage any governmental or non-governmental organizations to plan for continued success?  </p>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p>Are you competing with other organizations? If so, collaborate instead in order to identify the best approach with the greatest impact. </p>
                    </motion.li>
                    </ul>
                </div>
            </section>


            {/* --- Section 3: Additional Resources --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 className="simulation-title">
                        Additional Resources
                    </h2>
                    <motion.ul
                        className="simulation-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                    >
                        <li> <a href="https://digitalprinciples.org/principle/design-with-the-user/"> Design With the User | Principles for Digital Development  </a></li>
                        <li> <a href="https://docs.google.com/document/d/1YANkLGuVjMbZzCjkyjj_xygvEJYvPsCdM2YNOwmeki4/edit"> FIRE Framework Layout </a></li>
                    </motion.ul>
                </div>
            </section>

            {/* --- Section 4: Case Study --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 className="simulation-title">
                        Case Study
                    </h2>
                    <motion.p
                        className="simulation-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                    >
                        Grocki, M. (2014). 
                        <a href="https://www.youtube.com/watch?v=mSxpVRo3BLg&t=175s"> How to create a Customer Journey Map. </a> UX Mastery. YouTube. 
                        <br></br>
                        In this short video, Megan Grocki details the step by step process of thinking through customer journey mapping. 
                        While the resource uses a market, for-profit driven example, the same process is useful to explore user experience 
                        for development project deliverables. 
                    </motion.p>
                    <div className="case-video-wrapper">
                        <iframe
                            className="case-video"
                            src="https://www.youtube.com/embed/mSxpVRo3BLg?start=175"
                            title="How to Create a Customer Journey Map"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>
            </section>

            {/* --- Section 5: Empathy Mapping Resources --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 className="simulation-title">
                        Empathy Mapping Resources
                    </h2>
                    <motion.p
                        className="simulation-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                    >
                        <a href="https://www.youtube.com/watch?v=QwF9a56WFWA"> What is an Empathy Map?</a> PlaybookUX. YouTube. 
                        <br></br>
                        This video by PlaybookUX provides a guide to empathy mapping strategies in order to understand and later be able 
                        to build a relationship with the recipients of the project.
                    </motion.p>
                    <div className="case-video-wrapper">
                        <iframe
                            className="case-video"
                            src="https://www.youtube.com/embed/QwF9a56WFWA"
                            title="What is an Empathy Map?"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* --- Section 6: Design Thinking MIT --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 className="simulation-title">
                        Design Thinking MIT
                    </h2>
                    <motion.p
                        className="simulation-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                    >
                        Altitude (2017). 
                        <a href="https://www.youtube.com/watch?v=kq2kd3CXi1o"> Design Thinking Video from MIT and Altitude.</a> YouTube. 
                        <br></br>
                        This resource takes an inside journey through MIT and Altitude’s process of designing a functional walker for the 
                        elderly. It gives a good look at the interview and review process with the very demographic the product is intended 
                        for. By interacting one-on-one with potential consumers, Altitude and MIT make sure that the product truly suits 
                        their needs. Though ethical development projects may have different needs and aims than companies with a for-profit 
                        mission, we can use some of the same considerations that help involve the consumer as for profit and industry driven
                        products – because in the end, we are designing a product or service and that product should be something 
                        functional that people feel ownership of and want to use.
                    </motion.p>
                    <div className="case-video-wrapper">
                        <iframe
                            className="case-video"
                            src="https://www.youtube.com/embed/v=kq2kd3CXi1o"
                            title="Design Thinking Video from MIT and Altitude."
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
            <br></br>
        </div>
    );
};

export default Sustainability;
