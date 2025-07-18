import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import { ParticlesBackground } from "./ParticlesBackground";
import { AnimatedBackground } from "./AnimatedBackground";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 1.02,
    }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.8
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <AnimatedBackground />
      
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative z-10 pt-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};