import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "@/app/layout/RootLayout";
import DevelopmentEthics from "@/pages/development-ethics";

const HomePage = lazy(() => import("@/pages/home"));
const AboutPage = lazy(() => import("@/pages/about"));
const WorthwhileDevelopmentPage = lazy(() => import("@/pages/worthwhile-development"));
const CapabilityApproachPage = lazy(() => import("@/pages/capability-approach"));

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
    ],
  },
]);

export default router;
