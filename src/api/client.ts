export async function apiRequest<T = unknown>(
  _path: string,
  _options?: unknown,
): Promise<T> {
  throw new Error("API is disabled in the design-only demo.");
}
