import { motion } from "framer-motion";
import { activities } from "@/data/activities";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export const VolunteerActivities = () => {
  return (
    <section id="events" className="py-20 bg-background overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Events & Certifications</h2>
        <p className="text-lg text-muted-foreground">
          Major events, hackathons, and intensive courses I've participated in
        </p>
      </motion.div>

      <div className="w-full relative py-10">
        <div className="flex animate-marquee hover:animation-paused space-x-6 min-w-full px-6">
          {[...activities, ...activities, ...activities].map((activity, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              className="flex-shrink-0 w-80 relative group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 relative overflow-visible group-hover:shadow-accent/20 group-hover:shadow-2xl h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 relative z-10 shadow-md"
                />
                <h3 className="text-lg font-bold mb-3 relative z-10 line-clamp-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-muted-foreground relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex-grow line-clamp-3">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/events">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-full font-bold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20"
          >
            <span>View All Events</span>
            <FiArrowRight />
          </motion.button>
        </Link>
      </div>
    </section>
  );
};