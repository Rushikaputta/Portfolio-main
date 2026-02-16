import { motion } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { certifications } from "../data/certifications";

export const Certifications = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
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

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Verified Credentials
          </h2>

          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            My professional certifications and digital badges are verified and
            hosted on Credly. View my full transcript to see my latest
            achievements in AI, Cloud, and Data Science.
          </p>

          <div className="w-full relative py-10 mb-10">
            <div className="flex animate-marquee hover:animation-paused space-x-8 min-w-full px-4">
              {[...certifications, ...certifications, ...certifications].map(
                (cert, index) => (
                  <motion.a
                    key={`${cert.title}-${index}`}
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex-shrink-0 w-64 md:w-80 group cursor-pointer"
                  >
                    <div className="bg-card border border-border rounded-xl p-6 transition-all duration-300 relative overflow-hidden group-hover:shadow-accent/20 group-hover:shadow-xl h-full flex flex-col items-center text-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="w-24 h-24 mb-4 relative z-10 p-2 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <h3 className="text-lg font-bold mb-2 relative z-10 line-clamp-2">
                        {cert.title}
                      </h3>

                      <p className="text-sm text-muted-foreground relative z-10">
                        {cert.issuer}
                      </p>
                    </div>
                  </motion.a>
                )
              )}
            </div>
          </div>

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