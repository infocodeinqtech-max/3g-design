import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Projects from "../pages/Projects";
import ProjectList from "../pages/ProjectList";
import ViewProject from "../pages/ViewProject";
import NotFound from "../pages/NotFound";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AdminLogin from "../admin/pages/AdminLogin";
import AdminLayout from "../admin/layouts/AdminLayout";
import Dashboard from "../admin/pages/Dashboard";
import DemoManagePage from "../admin/pages/DemoManagePage";

function AppShell() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <FloatingWhatsApp />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:category" element={<ProjectList />} />
          <Route path="/projects/:category/:slug" element={<ViewProject />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<DemoManagePage />} />
          <Route path="users" element={<DemoManagePage />} />
          <Route path="navigation" element={<DemoManagePage />} />
          <Route path="hero" element={<DemoManagePage />} />
          <Route path="about" element={<DemoManagePage />} />
          <Route path="expertise" element={<DemoManagePage />} />
          <Route path="projects" element={<DemoManagePage />} />
          <Route path="services" element={<DemoManagePage />} />
          <Route path="process" element={<DemoManagePage />} />
          <Route path="testimonials" element={<DemoManagePage />} />
          <Route path="footer" element={<DemoManagePage />} />
          <Route path="contact-offices" element={<DemoManagePage />} />
          <Route path="enquiries" element={<DemoManagePage />} />
          <Route path="*" element={<NotFound embed />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" richColors closeButton />
    </>
  );
}

const routerBasename =
  import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <AppShell />
    </BrowserRouter>
  );
}

