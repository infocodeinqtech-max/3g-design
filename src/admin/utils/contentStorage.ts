/** Design-only stubs — never hits a real API. */

export async function getContent<T>(_key: string, fallback: T): Promise<T> {
  return JSON.parse(JSON.stringify(fallback)) as T;
}

export async function getListContent<T>(
  _key: string,
  fallback: T[],
): Promise<T[]> {
  return JSON.parse(JSON.stringify(fallback)) as T[];
}
