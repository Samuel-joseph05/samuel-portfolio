import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { TypewriterText } from "@/components/UI/TypewriterText";
import { GlowButton } from "@/components/UI/GlowButton";
import { FloatingIcons } from "@/components/ThreeJS/FloatingIcons";

export const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Samuel-joseph05",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "http://www.linkedin.com/in/samuel-a-5aa56924a",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:samuela05022004@gmail.com", label: "Email" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingIcons />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-foreground/70 mb-4"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="gradient-text">Samuel A</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-2xl md:text-4xl font-semibold text-foreground/80 mb-6"
            >
              <TypewriterText
                text="Frontend Developer"
                delay={1000}
                speed={100}
                className="text-primary"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
            >
              Crafting immersive digital experiences with cutting-edge
              technologies. Specializing in React, JavaScript, and modern web
              development.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <GlowButton variant="primary" size="lg" asChild>
              <a href="/projects">View My Work</a>
            </GlowButton>

            <GlowButton variant="secondary" size="lg">
              <a
                href="/SamuelA_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </GlowButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.7 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <link.icon className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
