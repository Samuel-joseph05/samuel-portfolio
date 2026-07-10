import { motion } from "framer-motion";
import { ExternalLink, Trophy, Code, Target, Star } from "lucide-react";

const profiles = [
  {
    id: 1,
    platform: "GitHub",
    username: "@samueljoseph",
    description: "Open source contributions and personal projects",
    stats: {
      repositories: "25+",
      contributions: "500+",
      followers: "150+"
    },
    url: "https://github.com/samueljoseph",
    color: "from-gray-700 to-gray-900",
    icon: "🐙",
    highlights: ["React Libraries", "TypeScript Projects", "Web Components"]
  },
  {
    id: 2,
    platform: "LeetCode",
    username: "samuel_dev",
    description: "Algorithmic problem solving and coding challenges",
    stats: {
      solved: "300+",
      ranking: "Top 5%",
      streak: "45 days"
    },
    url: "https://leetcode.com/samuel_dev",
    color: "from-orange-500 to-yellow-500",
    icon: "🧠",
    highlights: ["Dynamic Programming", "Graph Algorithms", "Data Structures"]
  },
  {
    id: 3,
    platform: "SkillRack",
    username: "samuel_joseph",
    description: "Programming contests and skill assessments",
    stats: {
      score: "2400+",
      rank: "Expert",
      contests: "50+"
    },
    url: "https://skillrack.com/profile/samuel_joseph",
    color: "from-blue-500 to-indigo-600",
    icon: "🏆",
    highlights: ["Competitive Programming", "Algorithm Design", "Problem Solving"]
  },
  {
    id: 4,
    platform: "CodePen",
    username: "samueljoseph",
    description: "Creative front-end experiments and UI components",
    stats: {
      pens: "50+",
      hearts: "1200+",
      followers: "80+"
    },
    url: "https://codepen.io/samueljoseph",
    color: "from-green-500 to-teal-600",
    icon: "🎨",
    highlights: ["CSS Animations", "Interactive UI", "Creative Coding"]
  },
  {
    id: 5,
    platform: "Stack Overflow",
    username: "samuel-joseph",
    description: "Helping developers solve coding problems",
    stats: {
      reputation: "5000+",
      answers: "200+",
      reached: "50K+"
    },
    url: "https://stackoverflow.com/users/samuel-joseph",
    color: "from-orange-600 to-red-500",
    icon: "📚",
    highlights: ["React Solutions", "JavaScript Help", "TypeScript Tips"]
  },
  {
    id: 6,
    platform: "Dribbble",
    username: "samuel_design",
    description: "UI/UX design concepts and creative inspiration",
    stats: {
      shots: "30+",
      likes: "800+",
      followers: "120+"
    },
    url: "https://dribbble.com/samuel_design",
    color: "from-pink-500 to-purple-600",
    icon: "🎯",
    highlights: ["Web Design", "Mobile UI", "Design Systems"]
  }
];

const ProfileCard = ({ profile, index }: { profile: typeof profiles[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true }}
      className="group bg-card/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      {/* Header */}
      <div className={`relative p-6 bg-gradient-to-br ${profile.color}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{profile.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-white">{profile.platform}</h3>
              <p className="text-white/80 text-sm">{profile.username}</p>
            </div>
          </div>
          <motion.a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
          >
            <ExternalLink className="w-5 h-5 text-white" />
          </motion.a>
        </div>
        <p className="text-white/90 text-sm">{profile.description}</p>
      </div>

      {/* Stats */}
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.entries(profile.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-lg font-bold text-foreground">{value}</div>
              <div className="text-xs text-foreground/60 capitalize">{key}</div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground/80 flex items-center">
            <Star className="w-4 h-4 mr-2 text-primary" />
            Highlights
          </h4>
          <div className="space-y-2">
            {profile.highlights.map((highlight, idx) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.1) + (idx * 0.05), duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center text-sm text-foreground/70"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                {highlight}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* View Profile Button */}
      <div className="px-6 pb-6">
        <motion.a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-2 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors group-hover:bg-primary/10 group-hover:text-primary"
        >
          <span className="text-sm font-medium">View Profile</span>
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export const Profiles = () => {
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
            Coding Profiles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Explore my journey across different coding platforms and communities
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Code, label: "Problems Solved", value: "500+" },
            { icon: Trophy, label: "Contests Won", value: "15+" },
            { icon: Target, label: "Projects Built", value: "50+" },
            { icon: Star, label: "Community Stars", value: "2K+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border text-center group hover:border-primary/30 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.id} profile={profile} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
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
              Let's Connect!
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Follow me on these platforms to see my latest work, solutions, and contributions 
              to the developer community.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-primary rounded-lg text-background font-semibold hover:shadow-glow-intense transition-all duration-300"
            >
              Follow All Profiles
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};