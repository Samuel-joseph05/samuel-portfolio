import { motion } from "framer-motion";
import { Code, Lightbulb, Rocket, Target } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "50+ Projects",
    description: "Delivered across various industries",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Innovative approaches to complex problems",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    description: "Optimized for speed and user experience",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Meeting deadlines and exceeding expectations",
  },
];

export const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-foreground/70 max-w-2xl mx-auto"
            >
              Passionate frontend developer with a love for creating exceptional
              digital experiences
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-sm mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl"
                />
                <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-glow">
                  <div className="w-64 h-64 mx-auto bg-gradient-primary rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/sam-1.jpg"
                      alt="My Photo"
                      className="w-30 h-70 object-cover rounded-full" // 10rem x 10rem
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg text-foreground/80 space-y-4">
                <p>
                  With over 3 years of experience in frontend development, I
                  specialize in creating modern, responsive, and performant web
                  applications. My passion lies in transforming complex ideas
                  into intuitive user interfaces.
                </p>
                <p>
                  I'm constantly learning and adapting to new technologies,
                  always striving to deliver exceptional user experiences. When
                  I'm not coding, you'll find me exploring the latest design
                  trends or contributing to open-source projects.
                </p>
                <p>
                  My approach combines technical expertise with creative
                  problem-solving, ensuring that every project I work on not
                  only meets functional requirements but also delights users.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
