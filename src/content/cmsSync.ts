/** No-op CMS sync for design-only static demo. */
export function notifyCmsUpdated(_reason?: string): void {}
export function subscribeCmsUpdated(_cb: () => void): () => void {
  return () => undefined;
}
export function getCmsRevision(): string {
  return "0";
}
