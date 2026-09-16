/**
 * OpenRouter model information.
 *
 * This type belongs in the TypeScript model-discovery
 * module, not in openRouterAI.js.
 */
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

/**
 * Response returned by:
 *
 * GET https://openrouter.ai/api/v1/models
 */
interface OpenRouterModelsResponse {
  data?: OpenRouterModel[];
}

/**
 * OpenRouter models endpoint.
 */
const OPENROUTER_MODELS_URL = "https://openrouter.ai/api/v1/models";

/**
 * Cache discovered models so the application
 * doesn't request /models every time the user
 * sends a message.
 */
let cachedModels: OpenRouterModel[] | null = null;

/**
 * Timestamp of the current cache.
 */
let modelsCacheTime = 0;

/**
 * Cache lifetime:
 *
 * 10 minutes
 */
const MODELS_CACHE_TTL = 10 * 60 * 1000;

/**
 * Get all currently available OpenRouter models.
 *
 * @param apiKey OpenRouter API key
 * @param forceRefresh Ignore the existing cache
 */
export async function getAvailableModels(
  apiKey: string,
  forceRefresh = false,
): Promise<OpenRouterModel[]> {
  if (!apiKey) {
    throw new Error("OpenRouter API key is required.");
  }

  const now = Date.now();

  /**
   * Return cached models when they are
   * still within the cache lifetime.
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
    let errorMessage = `Failed to retrieve OpenRouter models: ${response.status}`;

    try {
      const errorData = (await response.json()) as {
        error?: {
          message?: string;
        };
      };

      if (errorData?.error?.message) {
        errorMessage = errorData.error.message;
      }
    } catch {
      // Keep the default error message.
    }

    throw new Error(errorMessage);
  }

  const data = (await response.json()) as OpenRouterModelsResponse;

  const models = Array.isArray(data?.data) ? data.data : [];

  /**
   * Update cache.
   */
  cachedModels = models;

  modelsCacheTime = now;

  return models;
}

/**
 * Clear the model cache.
 *
 * This is used when a model discovered from
 * /models becomes unavailable before the
 * chat completion request.
 */
export function clearModelCache(): void {
  cachedModels = null;

  modelsCacheTime = 0;
}
