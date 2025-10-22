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
      { path: "ethics-of-innovation/user", element: <DesignUser />}
    ],
  },
]);

export default router;
