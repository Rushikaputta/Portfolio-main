import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export const Projects = () => {
  const projects = [
    {
      title: "Aeronix",
      description: "An AI-powered airport ground operations assistant integrated with Gemini service, providing real-time guidance, terminal maps, and passenger support.",
      tags: ["Python", "Streamlit", "AI/ML", "Gemini API"],
      github: "https://github.com/Rushikaputta/Aeronix",
      highlight: true,
    },
    {
      title: "QUANTUM-LEAF",
      description: "A specialized project exploring quantum computing principles and leaf-based simulations, potentially for environmental or algorithmic research.",
      tags: ["Python", "Quantum Computing", "Simulation"],
      github: "https://github.com/Rushikaputta/QUANTUM-LEAF",
      highlight: false,
    },
    {
      title: "Sentiment Analysis",
      description: "Implementing NLP techniques to analyze and classify sentiments from text data, a core part of building human-centric AI applications.",
      tags: ["Python", "NLP", "Machine Learning", "Scikit-Learn"],
      github: "https://github.com/Rushikaputta/Sentiment-Analysis-",
      highlight: true,
    },
    {
      title: "AI Quiz Generator",
      description: "An automated system that generates quizzes from provided text or topics using AI, streamlining education and assessment processes.",
      tags: ["TypeScript", "AI", "Node.js", "React"],
      github: "https://github.com/Rushikaputta/ai-quiz-generator",
      highlight: false,
    },
    {
      title: "Pathshala AI",
      description: "An AI-driven educational platform designed to provide personalized learning experiences and intelligent tutor-like interactions.",
      tags: ["Python", "AI", "Education Tech"],
      github: "https://github.com/Rushikaputta/Pathshala-AI",
      highlight: true,
    },
    {
      title: "Traceharvest",
      description: "A blockchain-based solution for supply chain transparency in agriculture, ensuring the traceability of harvests from farm to table.",
      tags: ["Solidity", "Blockchain", "Smart Contracts", "Web3"],
      github: "https://github.com/Rushikaputta/traceharvest",
      highlight: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Building impactful solutions across Blockchain, AI, Cloud and Mobile Development.
          </p>
        </motion.div>
      </div>

      <div className="w-full relative py-10">
        <div className="flex animate-marquee hover:animation-paused space-x-6 min-w-full px-6">
          {[...projects, ...projects, ...projects].map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              whileHover={{ scale: 1.05, y: -8 }}
              className="flex-shrink-0 w-80 md:w-[450px] relative group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-3xl p-8 transition-all duration-300 relative overflow-hidden group-hover:shadow-accent/20 group-hover:shadow-2xl h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                        aria-label="View on GitHub"
                      >
                        <FiGithub className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Rushikaputta?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20"
          >
            <FiGithub className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
