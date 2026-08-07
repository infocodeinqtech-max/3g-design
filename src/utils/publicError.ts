export const PUBLIC_SAFE_ERROR =
  "This process cannot be proceeded at this time. Please try again later.";

export function toPublicErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message.trim()) return error.message;
  if (typeof error === "string" && error.trim()) return error;
  return PUBLIC_SAFE_ERROR;
}
