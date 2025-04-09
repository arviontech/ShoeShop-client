/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-refresh/only-export-components */
import { StrictMode, useEffect, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import "./index.css";
import { router } from "./routes/router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "sonner";

// Define proper types for the SmoothScroll component props
interface SmoothScrollProps {
  children: ReactNode;
}

// Create Lenis smooth scrolling component with proper typing
const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      //@ts-ignore
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

// Make sure the root element exists with a non-null assertion
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <SmoothScroll>
          <Toaster richColors position="top-center" />
          <RouterProvider router={router} />
        </SmoothScroll>
      </Provider>
    </StrictMode>
  );
}