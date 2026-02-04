import { motion } from "framer-motion";
import { getImageUrl } from "@/utils/assets";

export const VolunteerActivities = () => {
  const activities = [
    {
      title: "AIGNITE 2.0 - Gen AI Training & Hackathon",
      description: "National Level Hands on Gen AI Training & Hackathon conducted at G.Pulla Reddy Engineering College in collaboration with V Cube Software Pvt. Ltd.",
      image: getImageUrl("aignite_2.jpg")
    },
    {
      title: "RGM CodeMarathon - Mentor",
      description: "Actively contributed as a mentor during the RGM CodeMarathon conducted on 31st January 2026 at RGM College.",
      image: getImageUrl("rgm_codemarathon.jpg")
    },
    {
      title: "Cloud Community Days 2025",
      description: "Participated in Google Developer Groups' Cloud Community Days 2025, a premier developer event for cloud technology enthusiasts.",
      image: getImageUrl("cloud_community_days_2025.jpg")
    },
    {
      title: "Google Cloud Agentic AI Day",
      description: "Recognized for initiative and contribution to the Google Cloud Agentic AI Day, powered by Hack2skill. Joined a community of changemakers harnessing Agentic AI.",
      image: getImageUrl("agentic_ai_day.jpg")
    },
    {
      title: "Blockchain Hackathon - Elan & nVision 2026",
      description: "Certified for participation in the Blockchain Hackathon at IIT Hyderabad, a premier technology festival.",
      image: getImageUrl("blockchain_hackathon.jpg")
    },
    {
      title: "5-Day AI Agents Intensive Course",
      description: "Successfully earned the badge for completing the 5-Day AI Agents Intensive Course with Kaggle and Google.",
      image: getImageUrl("ai_agents_course.jpg")
    },
    {
      title: "Artificial Intelligence - Teachnook & IIT Roorkee",
      description: "Completed an intensive course in Artificial Intelligence in collaboration with Cognizance'24 IIT Roorkee.",
      image: getImageUrl("ai_teachnook.jpg")
    },
    {
      title: "Cybersecurity & Ethical Hacking - Cappriciosec",
      description: "Certified for completing 41 hours of advanced training in Cybersecurity and Ethical Hacking.",
      image: getImageUrl("cybersecurity_cappriciosec.jpg")
    }
  ];

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
    </section>
  );
};