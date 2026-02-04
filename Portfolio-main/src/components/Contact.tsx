import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

export const Contact = () => {
    const contactLinks = [
        {
            name: "Email",
            value: "rushikaputta1105@gmail.com",
            href: "mailto:rushikaputta1105@gmail.com",
            icon: FiMail,
            color: "bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white",
        },
        {
            name: "LinkedIn",
            value: "rushika-putta",
            href: "https://www.linkedin.com/in/rushika-putta-683766307",
            icon: FiLinkedin,
            color: "bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white",
        },
        {
            name: "GitHub",
            value: "Rushikaputta",
            href: "https://github.com/Rushikaputta",
            icon: FiGithub,
            color: "bg-gray-800/10 text-gray-800 dark:text-gray-200 dark:bg-gray-200/10 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800",
        },
    ];

    return (
        <section id="contact" className="py-20 px-6 bg-background relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Get in Touch.</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            I'm always open to discussing new opportunities, AI innovations, or software engineering projects. Feel free to reach out via any of these platforms!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`p-8 rounded-3xl border border-border flex flex-col items-center gap-4 transition-all duration-300 group ${link.color} shadow-sm hover:shadow-xl hover:shadow-accent/5`}
                            >
                                <div className="p-4 rounded-2xl bg-background/50 backdrop-blur-sm shadow-sm group-hover:scale-110 transition-transform">
                                    <link.icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg">{link.name}</h3>
                                    <p className="text-sm opacity-80 font-medium">{link.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>


                </motion.div>
            </div>
        </section>
    );
};
