const DEMO_AUTH_KEY = "3gdeco_design_demo_admin";

export type DemoAdminUser = {
  name: string;
  email: string;
  role: "superadmin";
};

const DEMO_USER: DemoAdminUser = {
  name: "Demo Admin",
  email: "admin@3gdeco.com",
  role: "superadmin",
};

export function getDemoAdmin(): DemoAdminUser | null {
  try {
    const raw = sessionStorage.getItem(DEMO_AUTH_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as DemoAdminUser;
  } catch {
    return null;
  }
}

export function isDemoLoggedIn(): boolean {
  return getDemoAdmin() !== null;
}

export function loginDemo(email?: string): DemoAdminUser {
  const user: DemoAdminUser = {
    ...DEMO_USER,
    email: email?.trim() || DEMO_USER.email,
  };
  sessionStorage.setItem(DEMO_AUTH_KEY, JSON.stringify(user));
  return user;
}

export function logoutDemo(): void {
  sessionStorage.removeItem(DEMO_AUTH_KEY);
}
