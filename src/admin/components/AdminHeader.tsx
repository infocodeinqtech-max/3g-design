import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, User, LogOut, Shield } from "lucide-react";
import { getDemoAdmin, logoutDemo } from "../demoAuth";

export default function AdminHeader() {
  const user = getDemoAdmin();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!user) return null;

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    logoutDemo();
    navigate("/admin/login");
  };

  return (
    <header className="sticky top-0 z-30 -mx-6 lg:-mx-10 px-6 lg:px-10 py-4 mb-6 bg-[#F5F1EA]/90 backdrop-blur-md border-b border-[#E8DFD2]/80">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#8A8177] hidden sm:block">
          Logged in as {user.name}
        </p>
        <div className="relative ml-auto" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 pl-2 pr-3 py-2 rounded-xl admin-card hover:border-[#D4A64B]/30 transition-all"
          >
            <div className="w-10 h-10 rounded-full admin-btn-gold flex items-center justify-center text-[#1e1a17] font-semibold text-sm shrink-0">
              {initials || "A"}
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-medium text-[#332C26] leading-tight">
                {user.name}
              </p>
              <p className="text-xs text-[#8A8177] flex items-center gap-1">
                <Shield className="w-3 h-3 text-[#C4973B]" /> Super Admin
              </p>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-[#8A8177] transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-72 rounded-xl admin-card shadow-xl overflow-hidden"
              >
                <div className="p-4 border-b border-[#F0E9DF] bg-[#FAF7F2]/80">
                  <p className="font-medium text-[#332C26]">{user.name}</p>
                  <p className="text-xs text-[#8A8177] mt-0.5">{user.email}</p>
                  <span className="inline-block mt-2 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full admin-badge-super">
                    Super Admin
                  </span>
                </div>

                <div className="p-2">
                  <Link
                    to="/admin/profile"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-[#332C26] hover:bg-[#FAF7F2] transition-colors"
                  >
                    <User className="w-4 h-4 text-[#8A8177]" />
                    Profile Details
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
