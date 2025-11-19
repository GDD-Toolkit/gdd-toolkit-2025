import { useRef } from "react";
import { motion, easeOut } from "framer-motion";
import "./DevelopmentEthics.css";
import { AlertTriangle} from "lucide-react";

const DevelopmentEthics: React.FC = () => {
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
                    Development Ethics
                </motion.h1>
                <br></br>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={bannerVariants}
                >
                    Drawing on the legacy of the Brundtland Commission (1987) and the UN’s 2030 Agenda for Sustainable Development.
                </motion.p>
            </header>

            {/* --- Section 1: Foundations --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 ref={simulationRef} className="simulation-title">
                        Development Ethics Foundations
                    </h2>
                    <motion.p
                        className="simulation-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                    >
                        Developmental ethics involves how human rights, basic needs, and social justice are met throughout any form of the development process. Being ethical, honest, and fair, is one of the basic human needs. It is important to make sure that when development is taking place throughout the globe, no matter the economic condition, culture, or religion of the country, ethics is still a major focus. The concept of “development” was originally and is often understood in the context of economic growth or improvement. Historically, Development Planners focused on raising gross domestic product (GDP) and other measures of financial success. (Goulet, Development Ethics a New Discipline, 1997, p. 1) However, beginning with the work of Denis Goulet and Louis-Joseph Lebert in the 1970s, scholars have expanded upon the practice of development through the field of “development ethics.” (Devulin, 2012, p. 218) According to the United Nations Human Development Program, development must first focus on human improvement. (Ross-Larson & Hanlon, UNDP Human Development Report 1990, p. iii) Goulet concurs, explaining that a nation’s success in development depends on “many social, cultural, political, and psychological determinants.” (Development Ethics a New Discipline, 1997, p. 1) 
                    </motion.p>
                </div>
            </section>

            {/* --- Section 2: Seven Values --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 ref={simulationRef} className="simulation-title">
                        Development Ethics and the Seven Worthwhile Values
                    </h2>
                    <motion.p
                        className="simulation-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                    >
                        Developmental ethics revolves around Jay Drydyk’s seven worthwhile values: well-being, equality, agency and empowerment, environmental sustainability, human rights, cultural freedom, and responsibility. Each of these values are important because they all work together to benefit development as a whole. Well-being, equality and agency and empowerment go hand in hand because all of them focus on how the development of the module or toolkit will directly impact the citizens in that area or the individuals utilizing the toolkit. Environmental sustainability is extremely important when developing because we want our development to be able to last. If our development tactic negatively affects the environment, it will have to be removed because we only get one earth and we need to conserve and protect it. Both human rights and cultural freedom are also extremely important to consider for development. We do not want to impinge on an individual’s rights or cultural groups freedom because it is unethical. The last value is responsibility. It is essential to be responsible when developing and in the toolkit because our proposed strategies can impact others in many ways, which needs to be accounted for. Each of these values are crucial to conserve when developing in a country, city, or area because they provide the citizens, who are being impacted, with a form of protection. 
                    </motion.p>
                </div>
            </section>

            {/* --- Section 3: Maldevelopment Alert Box --- */}
            <section className="content-section">
                <div className="content-card alert-box">
                    <div className="alert-header">
                        <AlertTriangle size={32} className="alert-icon" />
                        <h3>Maldevelopment Warning</h3>
                    </div>

                    <p className="alert-description">
                        Failure to consider these determinants can therefore lead to development that harms the
                        populations it is supposed to benefit, called “anti development” or “maldevelopment.”
                        According to Goulet, anti-development destroys or harms cultures and individuals
                        (Development Ethics a New Discipline, 1997, p. 9), and it can be the cause of “ecological
                        disaster, which strips nature of its regenerative vitality” (International Ethics and Human
                        Rights, 1992, p. 239). Additionally, anti development occurs in “the name of profit, some
                        absolutized ideology, or a supposed efficiency imperative” (Goulet, 1997, p.9). Essentially,
                        cases of anti-development involve projects that destroy cultures, people, or ecology for
                        the sake of profit gain, ideological gain, or efficiency.
                    </p>
                </div>
            </section>


            {/* --- Section 4: Checklist --- */}
            <section className="content-section checklist-section">
                <div className="content-card">
                    <h2 className="simulation-title">Embarking on a Development Project</h2>

                    <ul className="checklist">
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p> Are there any basic human rights that are currently infringed upon before any intervention?	</p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p>Was development called upon by the population intended to be aided?</p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p>Are there any ulterior motives besides helping those in want and need?</p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p>Will development negatively impact the environment? Leading to possible deterioration of the land?</p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p>Will development play a role in the erasure of culture?(language, Religion, etc.)</p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p>Will development create increased tensions (politically)?</p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p>Does completion of development require a pay back to the developers?	</p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p>Will development increase access to health care?</p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p>Will development improve the economic state of said nation?</p>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="checklist-item"
                    >
                        <span className="checkmark">✔</span>
                        <p>Will development increase access to education for all?</p>
                    </motion.li>
                    </ul>
                    <br></br>
                    <motion.p
                        className="simulation-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                    >
                        Question Number 1 serves as the principle question that one must ask themselves before embarking on a development project. If the answer both number 1 and 2 are “No” it is strongly encouraged that one should reconsider thoughts of development. If the answers on questions 3-7 are “Yes” it is also encouraged to reconsider thoughts on development. However, If the answer to question 1 is “yes” regardless of whether the people called for development it is encouraged to begin project planning, and give back the basic rights that they were deprived of.
                    </motion.p>
                </div>
            </section>

            {/* --- Section 5: Related Readings --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 ref={simulationRef} className="simulation-title">
                        Related Readings
                    </h2>
                    <ol className="numbered-list">
                        <motion.li
                            className="numbered-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            The 1948 United Nations Universal Declaration of Human Rights, though it predates the field of development ethics, is an excellent guide to respecting human rights. It can be found easily online from the United Nations website. 
                        </motion.li>

                        <motion.li
                            className="numbered-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            Another United Nations resource is the 2019 Human Development Report, Beyond income, beyond averages, beyond today: Inequalities in human development in the 21st century, which contains detailed information about progress in development and is filled with informative and helpful graphs. It additionally provides a wealth of information regarding what still needs to be done to better development. 
                        </motion.li>

                        <motion.li
                            className="numbered-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            Denis Goulet’s 1997 article Development Ethics, a new discipline, published in the International Journal of Social Economics, is an excellent explanation of the field of development ethics and the debates surrounding its goals.
                        </motion.li>

                        <motion.li
                            className="numbered-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            Martha Nausbaum is another major contributor to the field of development ethics who expanded upon Sen’s capability approach. Her 2000 book, Women and Human Development, explores not only issues of feminism and development, but also of what capabilities everyone should have access to. (Nussbaum, 2000)
                        </motion.li>
                    </ol>
                </div>
            </section>

            {/* --- Section 6: References --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 ref={simulationRef} className="simulation-title">
                        References
                    </h2>
                    <ol className="numbered-list">
                        <motion.li
                            className="numbered-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            Deneulin, S. (2013). Ethics and Development: An Introduction from the Perspective of the Capability Approach. Geography Compass, 217-227. doi:10.1111/gec3.12029
                        </motion.li>

                        <motion.li
                            className="numbered-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            Gasper, D. (2006). Introduction: Working in Development Ethics – a tribute to Denis Goulet. Éthique Et économique, 1-24. Retrieved December 11, 2020, from https://papyrus.bib.umontreal.ca/xmlui/handle/1866/3377
                        </motion.li>

                        <motion.li
                            className="numbered-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            Goulet, D. (1997). Development ethics: A new discipline. International Journal of Social Economics, 24(11), 1160-1171. doi:10.1108/03068299710193543
                        </motion.li>

                        <motion.li
                            className="numbered-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            Ross-Larson, B., & Hanlon, E. (Eds.). (1990). UNDP Human Development Report 1990 (Rep.). New York, NY: Oxford University Press.
                        </motion.li>
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default DevelopmentEthics;
