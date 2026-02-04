import { motion } from "framer-motion";
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";

export const Education = () => {
    const educationItems = [
        {
            degree: "Bachelor of Technology (B.Tech)",
            specialization: "Computer Science and Artificial Intelligence",
            institution: "G. Pullaiah College of Engineering and Technology",
            period: "2023 - 2027",
            description: "Focused on Artificial Intelligence, Machine Learning, and core Computer Science principles.",
        },
        {
            degree: "Intermediate",
            institution: "Sri Chaitanya College",
            period: "2021 - 2023",
            description: "Rigorous academic program focusing on Mathematics, Physics, and Chemistry.",
        },
        {
            degree: "Secondary School Certificate (SSC)",
            institution: "Sri Chaitanya Techno Schools",
            period: "Till 2021",
            description: "Successfully completed with a focus on comprehensive academic curriculum.",
        }
    ];

    return (
        <section id="education" className="py-20 px-6 bg-muted/20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-12">
                        <div className="p-3 bg-accent/10 rounded-xl">
                            <FiBookOpen className="w-8 h-8 text-accent" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
                    </div>

                    <div className="space-y-8">
                        {educationItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-accent before:rounded-full before:ring-4 before:ring-accent/20 border-l border-border pb-8 last:border-0 last:pb-0"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-1">
                                            {item.degree}
                                        </h3>
                                        <p className="text-accent font-semibold flex items-center gap-2">
                                            {item.institution}
                                        </p>
                                        {item.specialization && (
                                            <p className="text-muted-foreground mt-1 font-medium">
                                                {item.specialization}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm mt-2 md:mt-1 bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
                                        <FiCalendar className="w-4 h-4" />
                                        {item.period}
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
