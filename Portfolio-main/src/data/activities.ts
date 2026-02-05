import { getImageUrl } from "@/utils/assets";

export interface Activity {
    title: string;
    description: string;
    image: string;
}

export const activities: Activity[] = [
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
