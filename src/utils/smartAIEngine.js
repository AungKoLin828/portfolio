import skills from "../data/skills.json";

const context = {
  lastTopic: null,
};

/* ---------- Keyword helper ---------- */

function match(q, keywords) {
  return keywords.some((word) => q.includes(word));
}

export function smartAI(question) {
  const q = question.toLowerCase().trim();

  /* ---------------- Greeting ---------------- */

  if (
    match(q, [
      "hello",
      "hi",
      "hey",
      "morning",
      "afternoon",
      "good morning",
      "good afternoon",
      "good evening",
      "evening",
    ])
  ) {
    return `Hello 👋 

I'm Aung Ko Lin's portfolio assistant.

You can ask me about:
• Technical skills
• Frameworks and technologies
• Professional experience
• Projects
• Contact information`;
  }

  /* ---------------- Languages ---------------- */

  if (match(q, ["language", "programming", "code", "coding"])) {
    context.lastTopic = "languages";

    const list = skills.Languages.map((s) => s.name).join(", ");

    return `Aung Ko Lin works with the following programming languages:

${list}

He mainly uses Java for backend systems and JavaScript/TypeScript for frontend development.`;
  }

  /* ---------------- Frameworks ---------------- */

  if (match(q, ["framework", "spring", "backend framework"])) {
    context.lastTopic = "frameworks";

    const list = skills.Frameworks.map((s) => s.name).join(", ");

    return `He has experience with the following frameworks:

${list}

Spring Boot is the primary framework used for building scalable enterprise backend systems.`;
  }

  /* ---------------- Databases ---------------- */

  if (match(q, ["database", "oracle", "sql", "db"])) {
    context.lastTopic = "database";

    const list = skills.Databases.map((s) => s.name).join(", ");

    return `He works with several enterprise databases:

${list}

These are commonly used for high-performance enterprise applications.`;
  }

  /* ---------------- Tools ---------------- */

  if (match(q, ["tool", "git", "ide", "development tool"])) {
    context.lastTopic = "tools";

    const list = skills.Tools.map((s) => s.name).join(", ");

    return `Development tools used include:

${list}

These tools support modern software development and collaboration workflows.`;
  }

  /* ---------------- Experience ---------------- */

  if (match(q, ["experience", "career", "years"])) {
    context.lastTopic = "experience";

    return `Aung Ko Lin has more than 8 years of experience in software development.

He currently works as a Project Leader and focuses on:

• Enterprise Java backend development
• Spring Boot services
• Database-driven applications
• Web application development`;
  }

  /* ---------------- Projects ---------------- */

  if (match(q, ["project", "system", "application"])) {
    context.lastTopic = "projects";

    return `He has developed multiple enterprise systems including:

• Financial processing systems
• Backend service platforms
• Web-based business applications

Most systems are built using Java, Spring Boot, and Oracle databases.`;
  }

  /* ---------------- Education ---------------- */

  if (match(q, ["education", "degree", "study", "university"])) {
    context.lastTopic = "education";

    return `Education Background:

• Level-5 Diploma in Computing (NCC Education - UK)
• Executive Diploma In IT Project Management;
• Bachelor of Science in Information Technology`;
  }

  /* ---------------- Contact ---------------- */

  if (match(q, ["contact", "email", "phone", "hire", "reach"])) {
    context.lastTopic = "contact";

    return `You can contact Aung Ko Lin directly:

📧 Email: aungko.linn404@gmail.com  
📞 Phone: +95 09450821620

He is open to software development opportunities and collaboration.`;
  }

  /* ---------------- CV Download ---------------- */

  if (match(q, ["cv", "resume"])) {
    context.lastTopic = "cv";

    return `You can download Aung Ko Lin's CV from the **Download CV** button in the hero section of this portfolio.`;
  }

  /* ---------------- Follow-up Context ---------------- */

  if (match(q, ["more", "details"]) && context.lastTopic === "languages") {
    return `Java is the main language used for backend development.

For frontend work, JavaScript and TypeScript are used with frameworks like React and Angular.`;
  }

  if (match(q, ["more", "details"]) && context.lastTopic === "projects") {
    return `These projects typically involve enterprise architectures, REST APIs, and secure database integration using Oracle and PostgreSQL.`;
  }

  /* ---------------- Default ---------------- */

  return `I'm here to help you learn about Aung Ko Lin.

You can ask things like:

• What programming languages does he use?
• What frameworks does he know?
• Tell me about his experience
• What projects has he worked on?
• How can I contact him?`;
}
