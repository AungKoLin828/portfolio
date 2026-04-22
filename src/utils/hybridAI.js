import { askRealAI } from "./openRouterAI";
import { smartAI } from "./smartAIEngine";

export async function hybridAI(message, history) {
  try {
    const aiReply = await askRealAI(message, history);

    if (aiReply && aiReply.trim() !== "") {
      return aiReply;
    }
  } catch (e) {
    console.warn("Real AI unavailable, using fallback");
  }

  // fallback to your smart bot
  return smartAI(message);
}
