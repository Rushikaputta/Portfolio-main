import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      role: "Google Cloud",
      position: "Arcade Facilitator",
      period: "2024 - Present",
      description: "Mentoring and facilitating students in completing Google Cloud Arcade challenges, focused on Cloud infrastructure, security, and Generative AI.",
    },
    {
      role: "Zaalima Development",
      position: "Machine Learning & Data Science Intern",
      period: "Present",
      description: "Working on real-world machine learning models and data science projects to build intelligent systems and data-driven solutions.",
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
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
};
