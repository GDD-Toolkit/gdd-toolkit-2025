import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "@/app/layout/RootLayout";

const HomePage = lazy(() => import("@/pages/home"));
const AboutPage = lazy(() => import("@/pages/about/About"));
const WorthwhileDevelopmentPage = lazy(() => import("@/pages/worthwhile-development/WorthwhileDevelopment"));
const CapabilityApproachPage = lazy(() => import("@/pages/capability-approach/CapabilityApproach"));
const DevelopmentEthics = lazy(() => import("@/pages/development-ethics/DevelopmentEthics"));
const EthicsOfInnovation = lazy(() => import ("@/pages/tools/ethics-of-innovation/EthicsOfInnovation"));
const DesignUser = lazy(() => import("@/pages/tools/ethics-of-innovation/DesignUser"));
const ReuseImprove = lazy(() => import("@/pages/tools/ethics-of-innovation/ReuseImprove"));
const AddressSecurity = lazy(() => import("@/pages/tools/ethics-of-innovation/AddressSecurity"));
const Collaborative = lazy(() => import("@/pages/tools/ethics-of-innovation/Collaborative"));
const HumanCenteredDesign = lazy(() => import("@/pages/tools-remaining/HumanCenteredDesign"));
const ProjectPlanningHomepage = lazy(() => import("@/pages/project-planning/homepage"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "development-ethics", element: <DevelopmentEthics /> },
      { path: "worthwhile-development", element: <WorthwhileDevelopmentPage /> },
      { path: "capability-approach", element: <CapabilityApproachPage />},
      { path: "ethics-of-innovation", element: <EthicsOfInnovation />},
      { path: "ethics-of-innovation/user", element: <DesignUser />},
      { path: "ethics-of-innovation/reuse", element: <ReuseImprove />},
      { path: "ethics-of-innovation/privacy", element: <AddressSecurity />},
      { path: "ethics-of-innovation/collaboration", element: <Collaborative />},
      { path: "human-centered-design", element: <HumanCenteredDesign />},
      { path: "project-planning", element: <ProjectPlanningHomepage />}
    ],
  },
]);

export default router;