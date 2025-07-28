import { color, motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "JavaScript", level: 90, color: "from-blue-600 to-blue-800" },
      { name: "HTML",  level: 95, color: "from-orange-400 to-yellow-500" },
      { name: "CSS", level: 90, color: "from-green-400 to-yellow-500" },
     
    ],
  },
  {
    title: " Tools",
    skills: [{ name: "Git", level: 88, color: "from-orange-500 to-red-500" }],
  },
];

const SkillBar = ({
  skill,
  index,
  isVisible,
}: {
  skill: { name: string; level: number; color: string };
  index: number;
  isVisible: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-foreground font-medium">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
          className="text-foreground/70 text-sm"
        >
          {skill.level}%
        </motion.span>
      </div>

      <div className="relative h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : {}}
          transition={{
            delay: index * 0.1 + 0.3,
            duration: 0.8,
            ease: "easeOut",
          }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white/20 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({
  category,
  index,
  isVisible,
}: {
  category: (typeof skillCategories)[0];
  index: number;
  isVisible: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.2, duration: 0.6 }}
        className="text-2xl font-bold text-foreground mb-6 text-center"
      >
        {category.title}
      </motion.h3>

      <div className="space-y-6">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={skillIndex}
            isVisible={isVisible}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

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
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills and proficiency
            levels
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
              isVisible={true}
            />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border text-center"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            Always Learning
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Technology is constantly evolving, and so am I. I'm committed to
            continuous learning and staying up-to-date with the latest trends
            and best practices in web development. Currently exploring AI/ML
            integration in web applications and advanced animation techniques.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
