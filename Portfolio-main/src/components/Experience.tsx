import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      role: "APCSHE – SmartBridge",
      position: "Generative AI Intern",
      period: "2026",
      bullets: [
        "Built AI-powered applications integrating LLMs and prompt engineering; developed RAG workflows for intelligent document retrieval.",
        "Integrated Amazon Bedrock APIs and designed autonomous AI agents for workflow automation and enterprise use cases.",
      ],
    },
    {
      role: "Zalima Development",
      position: "AI/ML Intern",
      period: "2025",
      bullets: [
        "Developed ML models using TensorFlow and Scikit-learn; performed feature engineering and hyperparameter tuning to improve accuracy.",
        "Contributed to real-world predictive analytics projects supporting business decision-making.",
      ],
    },
    {
      role: "IIT Roorkee",
      position: "AI Intern",
      period: "2024",
      bullets: [
        "Built supervised ML models for classification tasks; evaluated performance using accuracy, precision, recall, and F1-score.",
      ],
    },
  ];



  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=""
        >
          {/* Experience */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-accent before:rounded-full before:ring-4 before:ring-accent/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.position}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.bullets.map((point, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
};
