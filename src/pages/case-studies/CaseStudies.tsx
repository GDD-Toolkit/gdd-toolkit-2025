import { useRef, useState } from "react";
import { motion, easeOut } from "framer-motion";
import "./CaseStudies.css";

// Example SDG labels
const SDG_LABELS: Record<number, string> = {
    1: "No Poverty",
    2: "Zero Hunger",
    3: "Good Health & Well-Being",
    4: "Quality Education",
    5: "Gender Equality",
    6: "Clean Water & Sanitation",
    7: "Affordable & Clean Energy",
    8: "Decent Work & Economic Growth",
    9: "Industry, Innovation & Infrastructure",
    10: "Reduced Inequalities",
    11: "Sustainable Cities & Communities",
    12: "Responsible Consumption & Production",
    13: "Climate Action",
    14: "Life Below Water",
    15: "Life on Land",
    16: "Peace, Justice & Strong Institutions",
    17: "Partnerships for the Goals",
};

// Type definitions
export type CaseStudy = {
    name: string;
    image: string;
    region: Region[];
    values: Value[];
    sdgs: number[];
    summary: string;
    relation_sdgs_values: string;
};

export type Region =
    | "North America"
    | "Latin America and Caribbean"
    | "Sub-Saharan Africa"
    | "Middle East, North Africa, Afghanistan, & Pakistan"
    | "Europe & Central Asia"
    | "South Asia"
    | "East Asia & Pacific"
    | "Global";

export type Value =
    | "Well-Being"
    | "Equality"
    | "Empowerment"
    | "Sustainability"
    | "Human Rights"
    | "Cultural Freedom"
    | "Responsibility";

export type SDG =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17;

// Example case studies data
const caseStudiesData: CaseStudy[] = [
    {
        name: "Structural Change, Growth, and Poverty Reduction in Asia",
        image: "/assets/images/reducepoverty.jpg",
        region: ["Europe & Central Asia", "South Asia", "East Asia & Pacific"],
        values: ["Well-Being", "Human Rights"],
        sdgs: [1, 3, 8],
        summary: "There has been rapid growth with poverty reduction within a few countries in Asia, like Vietnam and China. However, the rapid growth on its own is not sufficient enough to sustain poverty reduction, and that rapid growth can lead to social instability and harm the cohesion of a community. The growth also does not account for an equal distribution of growth within a country and that the individuals in poorer situations will all benefit from the development. This study shows how significant structural and demographic developments are to reducing poverty in a wide range of areas, and maintaining the reduction.    ",
        relation_sdgs_values: "SDGs 1, 3, and 8 relate to this case study because they deal with limiting poverty, increasing the well-being of all individuals, and economic growth, which are the goals of what is mentioned in this review. The values of worthwhile development that relate to this study are well-being, as also expressed in the SDGs, and human rights, as this study focuses on finding ways to create strong growth and development in reducing poverty amongst an equal distribution of people.    ",
    },

    // Add more case studies here
];

const CaseStudies: React.FC = () => {
    const bannerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
    };

    const simulationRef = useRef<HTMLHeadingElement>(null);

    // State for filters and selected case study
    const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
    const [activeFilters, setActiveFilters] = useState<{
        sdgs: SDG[];
        values: Value[];
        regions: Region[];
    }>({ sdgs: [], values: [], regions: [] });

    const toggleFilter = (type: "sdgs" | "values" | "regions", value: SDG | Value | Region) => {
        setActiveFilters((prev) => ({
          ...prev,
          [type]: (prev[type] as (SDG | Value | Region)[]).includes(value)
            ? (prev[type] as (SDG | Value | Region)[]).filter((v) => v !== value)
            : [...(prev[type] as (SDG | Value | Region)[]), value],
        }));
    };
      

    // Apply filters to case studies
    const filteredCaseStudies = caseStudiesData.filter(
        (cs) =>
            (activeFilters.sdgs.length === 0 || cs.sdgs.some((s) => activeFilters.sdgs.includes(s as SDG))) &&
            (activeFilters.values.length === 0 || cs.values.some((v) => activeFilters.values.includes(v))) &&
            (activeFilters.regions.length === 0 || cs.region.some((r) => activeFilters.regions.includes(r)))
    );

    return (
        <div className="page-container">
            {/* --- Banner --- */}
            <header className="mission-banner">
                <motion.h1
                    className="mission-title"
                    initial="hidden"
                    animate="visible"
                    variants={bannerVariants}
                >
                    Case Studies
                </motion.h1>
            </header>

            {/* --- Section 1: Our Mission --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 ref={simulationRef} className="simulation-title">
                        Our Mission
                    </h2>
                    <motion.p
                        className="simulation-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                    >
                        The Pro Public Policy module seeks to analyze the role policy plays a role in enhancing Global Development.
                        In order for any development project to be given the green light, it must suit the needs of policy-makers.
                        <br />
                        <br />
                        The Maldevelopment module delves into the underside of policy by examining where projects and programs went wrong,
                        and how improvements can be made to promote positive and sustainable Global Development.
                        <br />
                        <br />
                        We compiled examples of the intersection between development and policy from regions across the world.
                        Using these examples, the effects of positive and negative policy development will be examined and studied.
                    </motion.p>
                </div>
            </section>

            {/* --- Section 2: Explore Case Studies --- */}
            <section className="content-section">
                <div className="content-card">
                    <h2 className="simulation-title">Explore Case Studies</h2>
                    <p className="simulation-text">
                        Explore case studies based on SDGs, Values of Worthwhile Development, Region, and whether it is Worthwhile Development or Maldevelopment by clicking on the buttons below to filter the gallery of case studies.
                    </p>

                    {/* --- Filter Buttons --- */}
                    <div className="filters">
                        {/* SDGs */}
                        <div className="filter-group">
                            <span className="filter-label">SDGs:</span>
                            {Array.from({ length: 17 }, (_, i) => i + 1).map((sdg) => (
                                <button
                                    key={sdg}
                                    className={`filter-btn ${activeFilters.sdgs.includes(sdg as SDG) ? "active" : ""}`}
                                    onClick={() => toggleFilter("sdgs", sdg as SDG)}
                                >
                                    {sdg}. {SDG_LABELS[sdg]}
                                </button>
                            ))}
                        </div>

                        {/* Values */}
                        <div className="filter-group">
                            <span className="filter-label">Values of Worthwhile Development:</span>
                            {["Well-Being", "Equality", "Empowerment", "Sustainability", "Human Rights", "Cultural Freedom", "Responsibility"].map((val) => (
                                <button
                                    key={val}
                                    className={`filter-btn ${activeFilters.values.includes(val as Value) ? "active" : ""}`}
                                    onClick={() => toggleFilter("values", val as Value)}
                                >
                                    {val}
                                </button>
                            ))}
                        </div>

                        {/* Region */}
                        <div className="filter-group">
                            <span className="filter-label">Region:</span>
                            {[
                                "North America",
                                "Latin America and Caribbean",
                                "Sub-Saharan Africa",
                                "Middle East, North Africa, Afghanistan, & Pakistan",
                                "Europe & Central Asia",
                                "South Asia",
                                "East Asia & Pacific",
                                "Global"
                            ].map((region) => (
                                <button
                                    key={region}
                                    className={`filter-btn ${activeFilters.regions.includes(region as Region) ? "active" : ""}`}
                                    onClick={() => toggleFilter("regions", region as Region)}
                                >
                                    {region}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 3: Gallery + Details --- */}
            <section className="case-study-section">
                <div className="case-study-container">
                    {/* Gallery */}
                    <div className="case-study-gallery">
                        {filteredCaseStudies.map((cs) => (
                            <div
                                key={cs.name}
                                className={`gallery-card ${selectedCaseStudy?.name === cs.name ? "selected" : ""}`}
                                onClick={() => setSelectedCaseStudy(cs)}
                            >
                                <img src={cs.image} alt={cs.name} className="gallery-img" />
                                <p className="gallery-name">{cs.name}</p>
                            </div>
                        ))}
                    </div>

                    {/* Details */}
                    <div className="case-study-details">
                        {selectedCaseStudy ? (
                            <>
                                <h2>{selectedCaseStudy.name}</h2>
                                <div className="details-top">
                                    <img src={selectedCaseStudy.image} alt={selectedCaseStudy.name} className="details-img" />
                                    <div className="details-meta">
                                        <p>
                                            <strong>SDGs:</strong>{" "}
                                            {selectedCaseStudy.sdgs
                                                .map((sdg) => `${sdg}. ${SDG_LABELS[sdg]}`)
                                                .join(", ")}
                                        </p>
                                        <p><strong>Values:</strong> {selectedCaseStudy.values.join(", ")}</p>
                                        <p><strong>Region:</strong> {selectedCaseStudy.region.join(", ")}</p>
                                    </div>
                                </div>
                                <p>{selectedCaseStudy.summary}</p>
                                <br></br>
                                <p>{selectedCaseStudy.relation_sdgs_values}</p>
                            </>
                        ) : (
                            <p>Select a case study from the gallery to see details.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;