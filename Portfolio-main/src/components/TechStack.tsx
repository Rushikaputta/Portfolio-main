import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiMongodb, SiMysql, SiScikitlearn,
  SiGit, SiPandas, SiNumpy, SiSolidity, SiAndroid, SiHuggingface, SiKubernetes, SiGooglecloud, SiFirebase, SiPostgresql, SiHtml5
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { getImageUrl } from "@/utils/assets";

export const TechStack = () => {
  const CosmosIcon = ({ className }: { className?: string }) => (
    <img src={getImageUrl("cosmos.png")} alt="Cosmos DB" className={className} />
  );

  const AzureIcon = ({ className }: { className?: string }) => (
    <img src={getImageUrl("azure.png")} alt="Microsoft Azure" className={className} />
  );

  const ArchIcon = ({ className }: { className?: string }) => (
    <img src={getImageUrl("arch.png")} alt="BlackArch Linux" className={className} />
  );

  const GCPIcon = ({ className }: { className?: string }) => (
    <img src={getImageUrl("gcp.png")} alt="Google Cloud Platform" className={className} />
  );

  const techCategories = [
    {
      title: "AI & Machine Learning",
      techs: [
        { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "text-[#F7931E]" },
        { name: "TensorFlow", icon: SiHuggingface, color: "text-[#FF6F00]" }, // Placeholder icon if TF not imported
        { name: "PyTorch", icon: SiHuggingface, color: "text-[#EE4C2C]" }, // Placeholder icon if Pytorch not imported
        { name: "Pandas", icon: SiPandas, color: "text-[#150458]" },
        { name: "NumPy", icon: SiNumpy, color: "text-[#013243]" },
      ],
    },
    {
      title: "Deep Learning & NLP",
      techs: [
        { name: "Transformers", icon: SiHuggingface, color: "text-[#FFD21E]" },
        { name: "Neural Networks", icon: SiHuggingface, color: "text-foreground" },
        { name: "Computer Vision", icon: SiHuggingface, color: "text-accent" },
      ],
    },
    {
      title: "Emerging Tech",
      techs: [
        { name: "Quantum Computing", icon: SiHuggingface, color: "text-[#000000]" }, // Needs better icon
        { name: "Blockchain", icon: SiSolidity, color: "text-[#363636]" },
        { name: "Smart Contracts", icon: SiSolidity, color: "text-[#627EEA]" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      techs: [
        { name: "Google Cloud (GCP)", icon: SiGooglecloud, color: "text-[#4285F4]" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
        { name: "Cloud Computing", icon: SiGooglecloud, color: "text-[#4285F4]" },
      ],
    },
    {
      title: "Development Suite",
      techs: [
        { name: "Java", icon: FaJava, color: "text-[#007396]" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
        { name: "SQL", icon: SiMysql, color: "text-[#4479A1]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
        { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      ],
    },
  ];

  return (
    <section id="tech" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">Tech Stack.</h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with to build innovative solutions.
          </p>
        </motion.div>

        <div className="space-y-20">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h3 className="text-3xl font-bold text-foreground">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.15 + techIndex * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -8 }}
                    className="flex flex-col items-center gap-4 p-6 glass rounded-2xl hover-glow group cursor-pointer transition-all duration-300 w-32 md:w-40"
                  >
                    <tech.icon className={`w-12 h-12 md:w-16 md:h-16 ${tech.color} transition-all group-hover:drop-shadow-lg`} />
                    <span className="text-foreground font-semibold text-xs md:text-sm text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
