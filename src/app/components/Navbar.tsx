import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/3GDecoLogo-2.png";

type NavbarProps = {
  activeNav?: string;
};

const menu = [
  { id: "home", label: "HOME", to: "/" },
  { id: "about", label: "ABOUT", to: "/about" },
  { id: "services", label: "SERVICES", to: "/services" },
  { id: "projects", label: "PROJECTS", to: "/projects" },
  { id: "contact", label: "CONTACT", to: "/contact" },
];

export default function Navbar({ activeNav }: NavbarProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const current =
    activeNav ??
    (location.pathname.startsWith("/projects")
      ? "projects"
      : location.pathname === "/about"
        ? "about"
        : location.pathname === "/services"
          ? "services"
          : location.pathname === "/contact"
            ? "contact"
            : location.pathname === "/"
              ? "home"
              : "");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1EA] border-b border-[#E8DFD2]/80"
      style={{ height: "92px" }}
    >
      <div className="max-w-[1720px] mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full gap-4">
          <Link to="/" className="flex items-center min-w-0 shrink-0" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="3G Decorative Group"
              className="w-auto object-contain h-16 sm:h-20 lg:h-[105px] lg:-ml-8 lg:mt-1"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10 xl:gap-14">
            {menu.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`relative uppercase transition-all duration-500 ${
                  current === item.id
                    ? "text-[#ea7a12]"
                    : "text-[#332C26] hover:text-[#ea7a12]"
                }`}
                style={{
                  fontFamily: "'Parkinsans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex px-6 lg:px-10 py-3 lg:py-4 rounded-full text-white text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg,#f4b223 0%,#ea7a12 100%)",
                fontFamily: "'Parkinsans', sans-serif",
              }}
            >
              Book Consultation
            </Link>
            <button
              type="button"
              className="lg:hidden p-2 rounded-xl border border-[#E0D5C8] text-[#332C26]"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#F5F1EA] border-b border-[#E8DFD2] shadow-lg"
          >
            <div className="flex flex-col p-4 gap-1">
              {menu.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold tracking-widest uppercase ${
                    current === item.id
                      ? "bg-[#F4E8D4] text-[#ea7a12]"
                      : "text-[#332C26] hover:bg-[#FAF7F2]"
                  }`}
                  style={{ fontFamily: "'Parkinsans', sans-serif" }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-4 py-3 rounded-full text-white font-semibold"
                style={{
                  background: "linear-gradient(135deg,#f4b223 0%,#ea7a12 100%)",
                }}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
