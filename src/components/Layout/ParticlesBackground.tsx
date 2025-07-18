import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="particles-bg"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
            modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#ffffff", "#ffd700", "#87ceeb", "#ff69b4", "#9370db"],
          },
          links: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: { min: 0.1, max: 0.8 },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 200,
          },
          opacity: {
            value: { min: 0.1, max: 1 },
            animation: {
              enable: true,
              speed: { min: 0.5, max: 2 },
              minimumValue: 0.1,
            },
          },
          shape: {
            type: ["circle", "star"],
            options: {
              star: {
                sides: 5,
                inRadius: 2,
                outRadius: 5,
              },
            },
          },
          size: {
            value: { min: 0.5, max: 3 },
            animation: {
              enable: true,
              speed: { min: 1, max: 3 },
              minimumValue: 0.1,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};