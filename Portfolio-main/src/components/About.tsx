import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About</h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a 3rd-year B.Tech student specializing in Computer Science and Artificial Intelligence. As a Google Cloud Insider and an expert in various AI tools, I enjoy working on AI-powered applications, machine learning models, and tech-driven solutions.
            </p>

            <p>
              My journey is fueled by a passion for building intelligent systems that can solve real-world problems. Whether it's developing AI-driven web apps or experimenting with machine learning algorithms, I am always eager to learn and apply new technologies.
            </p>

            <p>
              I continuously improve my skills through projects, research, and hands-on development, aiming to contribute meaningful technology solutions in AI and software engineering. I believe in the power of innovation and the impact that technology can have on society.
            </p>

            <p>
              When I'm not coding, I'm usually exploring the latest advancements in AI, participating in hackathons, or learning about new software engineering practices. I'm always looking for opportunities to grow and collaborate with other developers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
