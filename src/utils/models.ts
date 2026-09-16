export interface OpenRouterModel {
  id: string;
  name?: string;

  context_length?: number;

  pricing?: {
    prompt?: string | number;
    completion?: string | number;
  };

  architecture?: {
    modality?: string;
    input_modalities?: string[];
    output_modalities?: string[];
  };

  supported_parameters?: string[];
}

interface OpenRouterModelsResponse {
  data?: OpenRouterModel[];
}

const OPENROUTER_MODELS_URL = "https://openrouter.ai/api/v1/models";

/*
 * Cache model discovery for 10 minutes.
 *
 * This avoids calling /models on every chat message.
 */
let cachedModels: OpenRouterModel[] | null = null;

let modelsCacheTime = 0;

const MODELS_CACHE_TTL = 10 * 60 * 1000;

/**
 * Fetch all currently available OpenRouter models.
 */
export async function getAvailableModels(
  apiKey: string,
  forceRefresh = false,
): Promise<OpenRouterModel[]> {
  if (!apiKey) {
    throw new Error("OpenRouter API key is missing.");
  }

  const now = Date.now();

  /*
   * Return cached models when still valid.
   */
  if (
    !forceRefresh &&
    cachedModels &&
    now - modelsCacheTime < MODELS_CACHE_TTL
  ) {
    return cachedModels;
  }

  const response = await fetch(OPENROUTER_MODELS_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    let errorMessage = `OpenRouter model discovery failed with status ${response.status}`;

    try {
      const errorData = await response.json();

      if (errorData?.error?.message) {
        errorMessage = errorData.error.message;
      }
    } catch {
      // Ignore invalid error response.
    }

    throw new Error(errorMessage);
  }

  const data = (await response.json()) as OpenRouterModelsResponse;

  const models = Array.isArray(data?.data) ? data.data : [];

  cachedModels = models;
  modelsCacheTime = now;

  return models;
}

/**
 * Clear the cached model list.
 *
 * Used when a model becomes unavailable so the
 * next request gets the latest OpenRouter model list.
 */
export function clearModelCache(): void {
  cachedModels = null;
  modelsCacheTime = 0;
}
