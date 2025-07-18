import { motion } from "framer-motion";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Building Responsive Web Apps with React and TypeScript",
    excerpt: "A comprehensive guide to creating scalable, type-safe React applications with modern development practices and performance optimization techniques.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    image: "/api/placeholder/400/250",
    url: "https://example.com/article-1",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "The Future of CSS: New Features and Best Practices",
    excerpt: "Exploring the latest CSS features including container queries, subgrid, and modern layout techniques that are reshaping web design.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "CSS",
    image: "/api/placeholder/400/250",
    url: "https://example.com/article-2",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Three.js and React: Creating Immersive 3D Experiences",
    excerpt: "Learn how to integrate Three.js with React to build stunning 3D web applications, from basic scenes to complex interactive experiences.",
    date: "2024-01-01",
    readTime: "12 min read",
    category: "3D Development",
    image: "/api/placeholder/400/250",
    url: "https://example.com/article-3",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Animation in Web Design: Framer Motion Best Practices",
    excerpt: "Master the art of web animations with Framer Motion. Tips, tricks, and techniques for creating smooth, performant animations that enhance user experience.",
    date: "2023-12-20",
    readTime: "10 min read",
    category: "Animation",
    image: "/api/placeholder/400/250",
    url: "https://example.com/article-4",
    color: "from-pink-500 to-purple-600"
  },
  {
    id: 5,
    title: "TypeScript Tips for React Developers",
    excerpt: "Essential TypeScript patterns and techniques every React developer should know to write more maintainable and bug-free code.",
    date: "2023-12-15",
    readTime: "7 min read",
    category: "TypeScript",
    image: "/api/placeholder/400/250",
    url: "https://example.com/article-5",
    color: "from-indigo-500 to-blue-600"
  },
  {
    id: 6,
    title: "Performance Optimization for Modern Web Apps",
    excerpt: "Comprehensive strategies for optimizing web application performance, including code splitting, lazy loading, and advanced optimization techniques.",
    date: "2023-12-10",
    readTime: "9 min read",
    category: "Performance",
    image: "/api/placeholder/400/250",
    url: "https://example.com/article-6",
    color: "from-yellow-500 to-orange-600"
  }
];

const ArticleCard = ({ article, index }: { article: typeof articles[0]; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="group bg-card/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      {/* Article Image */}
      <div className="relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className={`w-full h-48 bg-gradient-to-br ${article.color} relative`}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">{article.category.charAt(0)}</span>
          </div>
        </motion.div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground border border-border">
            {article.category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-foreground/60 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <motion.a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <span>Read More</span>
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.article>
  );
};

export const Articles = () => {
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
            Featured Articles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Insights, tutorials, and thoughts on modern web development
          </motion.p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
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
              Want to stay updated?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Follow me on social media for the latest articles, tutorials, and web development insights.
            </p>
            <motion.a
              href="https://medium.com/@samuel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-primary rounded-lg text-background font-semibold hover:shadow-glow-intense transition-all duration-300"
            >
              <span>Visit My Blog</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};