const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const MODELS = [
  "google/gemma-3-12b-it:free",
  "meta-llama/llama-3.3-70b-instruct:free",
  "google/gemma-4-31b-it:free",
  "nvidia/nemotron-nano-12b-v2-vl:free",
  "liquid/lfm-2.5-1.2b-instruct:free",
];

const SYSTEM_PROMPT = `
You are Aung Ko Lin's professional portfolio assistant.

About Aung Ko Lin:

Name: Aung Ko Lin
Role: Project Leader / Senior Software Developer
Experience: 8+ years

Skills:

Programming Languages:
- Java
- JavaScript
- TypeScript
- SQL

Frameworks:
- Spring Batch
- Spring Boot
- Spring MVC
- React
- Angular
- Node.js

Databases:
- Oracle
- PostgreSQL
- MySQL

Tools:
- Git
- VS Code
- Eclipse
- Maven
- Gradle

Projects:
- Financial Processing Systems
- Enterprise Backend Services
- Web-based Business Applications

Education:
- Level-5 Diploma in Computing (NCC Education - UK)
- Executive Diploma in IT Project Management
- Bachelor of Science in Information Technology

Contact:
Email: aungko.linn404@gmail.com
Phone: +95 09450821620

Rules:
- Keep answers short and professional
- Answer only about Aung Ko Lin
- If question unrelated, guide user back to portfolio topics
- Use bullet points when helpful
`;

export async function askRealAI(message, history = []) {
  for (const model of MODELS) {
    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": window.location.origin,
            "X-Title": "Aung Ko Lin Portfolio AI",
          },
          body: JSON.stringify({
            model,
            messages: [
              {
                role: "system",
                content: SYSTEM_PROMPT,
              },
              ...history,
              { role: "user", content: message },
            ],
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) continue;

      return data?.choices?.[0]?.message?.content || null;
    } catch (err) {
      console.warn("AI failed:", model);
    }
  }

  return null;
}
