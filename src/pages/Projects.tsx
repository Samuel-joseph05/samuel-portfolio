import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { GlowButton } from "@/components/UI/GlowButton";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React, TypeScript, and Stripe integration. Features real-time inventory management and responsive design.",
    image: "/api/placeholder/400/300",
    tags: ["React", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/400/300",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Interactive dashboard for AI model management with data visualization, model training metrics, and deployment status tracking.",
    image: "/api/placeholder/400/300",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Modern social media platform with real-time messaging, media sharing, and advanced privacy controls.",
    image: "/api/placeholder/400/300",
    tags: ["React", "GraphQL", "AWS", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-pink-500 to-purple-600"
  },
  {
    id: 5,
    title: "Weather App",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "/api/placeholder/400/300",
    tags: ["React Native", "OpenWeather API", "Maps"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "This very website! A showcase of modern web development with animations, 3D graphics, and responsive design.",
    image: "/api/placeholder/400/300",
    tags: ["React", "Three.js", "Framer Motion", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-purple-500 to-indigo-600"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="group relative bg-card/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className={`w-full h-48 bg-gradient-to-br ${project.color} relative`}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">{project.title.charAt(0)}</span>
          </div>
        </motion.div>
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center space-x-4"
        >
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-primary rounded-full text-primary-foreground hover:bg-primary/80 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            A selection of projects that showcase my skills and passion for development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <GlowButton variant="primary" size="lg">
              Get In Touch
            </GlowButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};