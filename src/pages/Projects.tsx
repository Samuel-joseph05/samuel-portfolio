import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { GlowButton } from "@/components/UI/GlowButton";
import { Link } from "react-router-dom";

const projects = [
      {
    id: 1,
    title: "Delight Matrimony",
    description: "A full-stack matrimony platform featuring secure JWT authentication, profile management, partner matching, Razorpay payment integration, AWS deployment, and a powerful admin dashboard.",
    image: "/api/placeholder/400/300",
    tags: ["Next js","Tailwind CSS","shadcn UI", "Node js","Express js", "PostgreSQL","JWT","AWS","Razorpay"],
    liveUrl: "https://www.delightmatrimony.in/",
    githubUrl: "https://github.com/Samuel-joseph05",
    color: "from-purple-400 to-purple-600"
  },
    {
    id: 2,
    title: "TrackEx",
    description: "A simple MERN (MongoDB, Express, React, Node.js) application to perform CRUD operations for tracking expenses with JWT authentication.",
    image: "/api/placeholder/400/300",
    tags: ["React js", "Node js","Express js", "MongoDB","JWT","Tailwind CSS"],
    liveUrl: "https://walletra.vercel.app/",
    githubUrl: "https://github.com/Samuel-joseph05",
    color: "from-gray-500 to-gray-600"
  },
      {
    id: 3,
     title: "Movies-Hub",
    description: "Created a modern movie discovery application with TMDB API integration, featuring real-time movie search, favorite movie management, and a responsive UI optimized for a seamless user experience.",
    image: "/api/placeholder/400/300",
    tags: ["React js","CSS","Api Integration"],
    liveUrl: "https://movies-jerk.netlify.app/",
    githubUrl: "https://github.com/Samuel-joseph05",
    color: "from-orange-500 to-red-600"
  },
    {
    id: 4,
    title: "Taskify",
    description: "Taskify-MERN is a task management application built with the MERN stack (MongoDB, Express.js, React, and Node.js). It enables users to efficiently create, track, and manage tasks with a responsive, user-friendly interface.",
    image: "/api/placeholder/400/300",
    tags: ["React js", "Node js","Express js", "MongoDB","JWT","Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Samuel-joseph05",
    color: "from-red-500 to-red-600"
  },

  //   {
  //   id: 5,
  //    title: "MERN-JWT-Auth",
  //   description: "A MERN stack application implementing JWT-based authentication for secure user management.",
  //   image: "/api/placeholder/400/300",
  //   tags: ["React js", "Node js","Express js", "MongoDB","JWT","Tailwind CSS"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/Samuel-joseph05",
  //   color: "from-yellow-500 to-yellow-600"
   
  // },
  {
    id: 6,
    title: "Pet Nose-print Idenfication",
    description: "Designed and developed an AI-powered Pet Nose Identification System that leverages deep learning to identify cats, dogs, and cows through their unique nose prints, supporting secure pet identification and veterinary record management. Built using HTML, CSS, JavaScript, Flask, TensorFlow, and PyTorch.",
    image: "/api/placeholder/400/300",
    tags: ["HTML", "CSS", "JavaScript", "Flask"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Samuel-joseph05",
    color: "from-green-500 to-teal-600"
  },

    {
    id: 7,
    title: "Alexatra E-Commerce ",
    description: "A modern e-commerce platform built with Html, CSS, JavaScript. Features real-time inventory management and responsive design.",
    image: "/api/placeholder/400/300",
    tags: ["Html", "CSS", "JavaScript"],
    liveUrl: "https://alexatra-e-commerce.vercel.app/",
    githubUrl: "https://github.com/Samuel-joseph05",
    color: "from-pink-500 to-pink-600"
  },

  // {
  //   id: 8,
  //   title: "Portfolio Website",
  //   description: "This very website! A showcase of modern web development with animations, 3D graphics, and responsive design.",
  //   image: "/api/placeholder/400/300",
  //   tags: ["React", "Three.js", "Framer Motion", "TypeScript"],
  //   liveUrl: "https://samuel-devfolio.vercel.app/",
  //   githubUrl: "https://github.com/Samuel-joseph05",
  //   color: "from-purple-500 to-indigo-600"
  // }
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
                  <Link to="/contact">Get In Touch</Link>
            </GlowButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};