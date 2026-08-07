import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
  ASSIGNABLE_MENUS,
  SUPERADMIN_MENUS,
} from "../data/permissions";
import { DEMO_TABLE_ROWS } from "../data/demoData";
import { getDemoAdmin } from "../demoAuth";

function titleFromPath(pathname: string): string {
  const all = [...ASSIGNABLE_MENUS, ...SUPERADMIN_MENUS];
  const match = all.find((m) => m.path === pathname);
  if (match) return match.label;
  if (pathname === "/admin/profile") return "Profile Details";
  return "Admin";
}

function segmentKey(pathname: string): string {
  const seg = pathname.replace(/^\/admin\/?/, "").split("/")[0] || "default";
  return seg;
}

export default function DemoManagePage() {
  const { pathname } = useLocation();
  const title = titleFromPath(pathname);
  const key = segmentKey(pathname);
  const rows = DEMO_TABLE_ROWS[key] || DEMO_TABLE_ROWS.default;
  const user = getDemoAdmin();

  const headers = useMemo(() => {
    if (key === "enquiries") return ["Name", "Service", "Status"];
    if (key === "users") return ["Name", "Email", "Role"];
    if (key === "contact-offices") return ["Office", "Phone", "Status"];
    if (key === "projects") return ["Project", "Category", "Status"];
    if (key === "services") return ["Service", "Type", "Status"];
    if (key === "profile") return null;
    return ["Title", "Section", "Status"];
  }, [key]);

  if (key === "profile") {
    return (
      <div>
        <h1 className="text-2xl font-bold admin-page-title mb-2">{title}</h1>
        <p className="text-sm admin-card-muted mb-6">
          Design demo profile view.
        </p>
        <div className="admin-card rounded-2xl p-6 max-w-lg space-y-3">
          <div>
            <p className="text-xs text-[#8A8177] uppercase tracking-wider">
              Name
            </p>
            <p className="text-[#2A211C] font-medium">{user?.name}</p>
          </div>
          <div>
            <p className="text-xs text-[#8A8177] uppercase tracking-wider">
              Email
            </p>
            <p className="text-[#2A211C] font-medium">{user?.email}</p>
          </div>
          <div>
            <p className="text-xs text-[#8A8177] uppercase tracking-wider">
              Role
            </p>
            <p className="text-[#2A211C] font-medium">Super Admin</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold admin-page-title">{title}</h1>
          <p className="text-sm admin-card-muted mt-1">
            Design demo — sample rows for client walkthrough.
          </p>
        </div>
        <button
          type="button"
          className="px-4 py-2.5 rounded-xl admin-btn-gold text-sm font-semibold"
          onClick={() => undefined}
        >
          Add New
        </button>
      </div>

      <div className="admin-table-wrap rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="admin-table-head border-b">
            <tr>
              {headers?.map((h) => (
                <th key={h} className="px-5 py-3 font-medium">
                  {h}
                </th>
              ))}
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="admin-table-row border-b last:border-0">
                <td className="px-5 py-3.5 text-[#2A211C] font-medium">
                  {row.col1}
                </td>
                <td className="px-5 py-3.5 text-[#6E655C]">{row.col2}</td>
                <td className="px-5 py-3.5">
                  <span className="text-xs px-2 py-1 rounded-full bg-[#FAF7F2] text-[#8a5a12]">
                    {row.col3}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <button
                    type="button"
                    className="text-[#C4973B] text-xs hover:underline mr-3"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="text-red-500/80 text-xs hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
