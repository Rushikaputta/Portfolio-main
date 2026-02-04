import { motion } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";

export const Certifications = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full mb-6">
            <FiAward className="w-10 h-10 text-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">Verified Credentials</h2>

          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            My professional certifications and digital badges are verified and hosted on Credly. View my full transcript to see my latest achievements in AI, Cloud, and Data Science.
          </p>

          <motion.a
            href="https://www.credly.com/users/rushika-putta"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20"
          >
            <span>View Credly Profile</span>
            <FiExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};