import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "@/app/layout/RootLayout";

const HomePage = lazy(() => import("@/pages/home"));
const AboutPage = lazy(() => import("@/pages/about"));
const WorthwhileDevelopmentPage = lazy(() => import("@/pages/worthwhile-development"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
        { path: "worthwhile-development", element: <WorthwhileDevelopmentPage /> },
    ],
  },
]);

export default router;
