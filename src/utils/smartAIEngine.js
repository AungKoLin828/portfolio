import skills from "../data/skills.json";

const context = {
  lastTopic: null,
};

export function smartAI(question) {
  const q = question.toLowerCase();

  /* ---------------- Languages ---------------- */

  if (q.includes("language") || q.includes("programming")) {
    context.lastTopic = "languages";

    const list = skills.Languages.map((s) => s.name).join(", ");

    return `Aung Ko Lin works with the following programming languages: ${list}. 
If you'd like to discuss a project using these technologies, feel free to contact him via email.`;
  }

  /* ---------------- Frameworks ---------------- */

  if (q.includes("framework") || q.includes("spring")) {
    context.lastTopic = "frameworks";

    const list = skills.Frameworks.map((s) => s.name).join(", ");

    return `He has experience with frameworks such as: ${list}. 
Most backend systems are developed using Spring Boot and enterprise Java technologies.`;
  }

  /* ---------------- Databases ---------------- */

  if (q.includes("database") || q.includes("oracle") || q.includes("sql")) {
    context.lastTopic = "database";

    const list = skills.Databases.map((s) => s.name).join(", ");

    return `He works with databases including: ${list}. 
These databases are used in enterprise applications and financial processing systems.`;
  }

  /* ---------------- Tools ---------------- */

  if (q.includes("tool") || q.includes("git") || q.includes("ide")) {
    context.lastTopic = "tools";

    const list = skills.Tools.map((s) => s.name).join(", ");

    return `Development tools include: ${list}. 
These tools support modern software development workflows and CI/CD processes.`;
  }

  /* ---------------- Experience ---------------- */

  if (q.includes("experience") || q.includes("career")) {
    context.lastTopic = "experience";

    return `Aung Ko Lin has over 8 years of experience in software development. 
He currently works as a Project Leader and focuses on enterprise Java systems, backend services, and web application development.`;
  }

  /* ---------------- Projects ---------------- */

  if (q.includes("project")) {
    context.lastTopic = "projects";

    return `He has worked on enterprise financial systems, backend services, and web-based applications using Java, Spring Boot, and Oracle databases. 
These systems support secure transaction processing and scalable enterprise platforms.`;
  }

  /* ---------------- Education ---------------- */

  if (q.includes("education") || q.includes("degree")) {
    context.lastTopic = "education";

    return `Aung Ko Lin holds a Level-5 Diploma in Computing from NCC Education (UK) and Bachelor of Science in Information Technology.`;
  }

  /* ---------------- Contact ---------------- */

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("ph") ||
    q.includes("hire") ||
    q.includes("reach")
  ) {
    context.lastTopic = "contact";

    return `You can contact Aung Ko Lin directly via email or phone: 

📧 aungko.linn404@gmail.com
📞 +95 09450821620

He is open to discussing software development opportunities and collaborations.`;
  }

  /* ---------------- CV Download ---------------- */

  if (q.includes("cv") || q.includes("resume")) {
    context.lastTopic = "cv";

    return `You can download Aung Ko Lin's CV from the Download CV button in the hero section of this portfolio.`;
  }

  /* ---------------- Follow-up context ---------------- */

  if (q.includes("more") && context.lastTopic === "languages") {
    return `He mainly uses Java for backend development and JavaScript/TypeScript for frontend applications. 
Spring Boot is the primary framework used for building enterprise services.`;
  }

  /* ---------------- Default response ---------------- */

  return `I can help you learn more about Aung Ko Lin.

Try asking:
• What programming languages does he use?
• What frameworks does he know?
• Tell me about his experience
• How can I contact him?`;
}
