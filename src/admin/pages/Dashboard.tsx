import { Link } from "react-router-dom";
import DashboardCards, {
  type DashboardCard,
} from "../components/DashboardCards";
import {
  ASSIGNABLE_MENUS,
  SUPERADMIN_MENUS,
  type MenuId,
} from "../data/permissions";
import { DEMO_COUNTS, DEMO_RECENT_ENQUIRIES } from "../data/demoData";

const CARD_ORDER: MenuId[] = [
  "enquiries",
  "projects",
  "services",
  "contact-offices",
];

const VALUES: Record<string, string> = {
  enquiries: String(DEMO_COUNTS.enquiries),
  projects: String(DEMO_COUNTS.projects),
  services: String(DEMO_COUNTS.services),
  "contact-offices": String(DEMO_COUNTS.contactOffices),
};

export default function Dashboard() {
  const cards: DashboardCard[] = CARD_ORDER.map((id) => {
    const menu = [...ASSIGNABLE_MENUS, ...SUPERADMIN_MENUS].find(
      (m) => m.id === id,
    );
    if (!menu) return null;
    return {
      icon: menu.icon,
      label: menu.label,
      value: VALUES[id] || "—",
      path: menu.path,
      trend: id === "enquiries" ? "New" : "Manage",
    };
  }).filter((c): c is DashboardCard => c !== null);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold admin-page-title">Dashboard</h1>
        <p className="text-sm admin-card-muted mt-1">
          Welcome to the admin dashboard. Here you can manage your website
          content, view recent enquiries, and monitor key metrics.
        </p>
        <p className="mt-2 text-xs text-[#C4973B]">
          Design demo — sample data only (no live API).
        </p>
      </div>

      <DashboardCards cards={cards} />

      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#2A211C]">
            Recent Enquiries
          </h2>
          <Link to="/admin/enquiries" className="text-sm text-[#C4973B]">
            View all
          </Link>
        </div>
        <div className="admin-card rounded-2xl overflow-hidden">
          <ul className="divide-y divide-[#EDE4D8]">
            {DEMO_RECENT_ENQUIRIES.map((e) => (
              <li key={e.id} className="px-6 py-4 flex justify-between gap-4">
                <div>
                  <p className="font-medium text-[#2A211C]">{e.name}</p>
                  <p className="text-sm text-[#8A8177]">
                    {e.email} · {e.service}
                  </p>
                </div>
                <span className="text-xs text-[#C4973B] shrink-0">
                  {e.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
