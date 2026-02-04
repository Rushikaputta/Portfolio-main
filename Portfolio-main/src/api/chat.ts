export async function getChatResponse(message: string): Promise<string> {
  const msg = message.toLowerCase();

  // Time-based greeting
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    if (hour < 21) return "Good evening";
    return "Good night";
  };

  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return `${getTimeGreeting()}! I'm Rushika's Penguin Assistant. Ask me anything about her skills, projects, or experience.`;
  }

  if (msg.includes('rushika') || msg.includes('putta')) {
    return "Yes, I'm Rushika Putta's Penguin Assistant! What would you like to know about Rushika's work, projects, or experience?";
  }

  if (msg.includes('project')) {
    return "Rushika is currently building multiple AI and ML projects. Please check the Projects section of the portfolio for more details!";
  }

  if (msg.includes('skill') || msg.includes('technology')) {
    return "Rushika as a B.Tech CSE (AI) student is skilled in AI & ML, as well as various modern programming languages and frameworks. Check the Tech Stack section for a full list!";
  }

  if (msg.includes('experience') || msg.includes('work')) {
    return "Rushika is a 3rd-year B.Tech CSE (AI) student building her professional experience through projects and research in AI/ML.";
  }

  if (msg.includes('education') || msg.includes('study')) {
    return "Rushika is a 3rd-year B.Tech student specializing in Computer Science and Artificial Intelligence.";
  }

  if (msg.includes('achievement') || msg.includes('award')) {
    return "Rushika is continuously working on AI innovations and research-driven projects.";
  }

  if (msg.includes('contact') || msg.includes('email')) {
    return "You can reach Rushika via the contact information provided in the portfolio. She is always open to discussing new opportunities!";
  }

  if (msg.includes('achievement') || msg.includes('award')) {
    return "Rushika's achievements include her work in AI/ML research and her contributions to software engineering projects.";
  }

  if (msg.includes('who is') || msg.includes('about') || msg.includes('tell me')) {
    return "Rushika Putta is a B.Tech CSE (AI) student and aspiring AI & ML engineer. She enjoys working on AI-powered applications, machine learning models, and tech-driven solutions.";
  }

  return "I'm here to help you learn about Rushika's portfolio! You can ask me about her skills, experience, or education. What would you like to know?";
}