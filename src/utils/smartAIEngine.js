import skills from "../data/skills.json";

const context = {
  lastTopic: null,
};

export function smartAI(question) {
  const q = question.toLowerCase();

  // Languages
  if (q.includes("language") || q.includes("programming")) {
    context.lastTopic = "languages";

    const list = skills.Languages.map((s) => s.name).join(", ");

    return `Aung Ko Lin works with the following programming languages: ${list}.`;
  }

  // Frameworks
  if (q.includes("framework") || q.includes("spring")) {
    context.lastTopic = "frameworks";

    const list = skills.Frameworks.map((s) => s.name).join(", ");

    return `He has experience with frameworks such as: ${list}.`;
  }

  // Databases
  if (q.includes("database") || q.includes("oracle") || q.includes("sql")) {
    context.lastTopic = "database";

    const list = skills.Databases.map((s) => s.name).join(", ");

    return `He works with databases including: ${list}.`;
  }

  // Tools
  if (q.includes("tool") || q.includes("git")) {
    context.lastTopic = "tools";

    const list = skills.Tools.map((s) => s.name).join(", ");

    return `Development tools include: ${list}.`;
  }

  // Experience
  if (q.includes("experience")) {
    context.lastTopic = "experience";

    return "Aung Ko Lin has over 8 years of experience in software development with strong expertise in Java backend systems using Spring Boot.";
  }

  // Follow-up context
  if (q.includes("more") && context.lastTopic === "languages") {
    return "He mainly uses Java for backend development and JavaScript/TypeScript for frontend applications.";
  }

  return "You can ask me about Aung Ko Lin's skills, technologies, professional experience, or projects.";
}
