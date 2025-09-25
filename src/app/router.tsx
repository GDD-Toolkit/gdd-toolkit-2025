import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "@/app/layout/rootLayout";

const HomePage = lazy(() => import("@/pages/home"));
const AboutPage = lazy(() => import("@/pages/about"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router;
