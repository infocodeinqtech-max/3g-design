/** Design-only: no CMS. Paths are used as-is (local assets / absolute URLs). */
export function mediaUrl(path: string | undefined | null): string {
  if (!path) return "";
  const value = path.trim();
  if (!value) return "";
  if (
    value.startsWith("data:") ||
    value.startsWith("blob:") ||
    /^https?:\/\//i.test(value)
  ) {
    return value;
  }
  return value.startsWith("/") ? value : `/${value}`;
}
