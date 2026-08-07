import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import Slider from "react-slick";
import Masonry from "react-responsive-masonry";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import about3 from "../assets/images/about3.jpg";
import about4 from "../assets/images/about4.jpg";
import {
  ArrowRight, 
  Star,
  Award, 
  Users,
  Building2,
  Sparkles,  
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Lightbulb,
  PenTool,
  Sofa,
  Briefcase,
  Shield,
  MessageSquare,
  Palette,
  FileText,
  Hammer,
  PackageCheck,
  Clock,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import logo from "../assets/images/3GDecoLogo-2.png";
import iconBorder from "../assets/images/icon-box-border.png";
import badge3G from "../assets/images/3g-badge.png";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState(-1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sliderRef = useRef<any>(null);
  const testimonialSliderRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "features",
        "about",
        "services",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveNav(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      titleLines: ["Elevating", "Modern", "Living"],
      subtitle:
        "Transforming residential and commercial interiors through refined elegance, innovation, and timeless craftsmanship.",
      decorativeImages: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200",
      ],
      style: "bright",
      brightness: "brightness-110",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      titleLines: ["Luxury", "Spaces", "Defined"],
      subtitle:
        "Sophisticated interiors designed to blend modern innovation with timeless architectural beauty.",
      decorativeImages: [
        "https://images.unsplash.com/photo-1615873968403-89e068629265?w=200",
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=200",
      ],
      style: "cinematic",
      brightness: "brightness-95",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      titleLines: ["Inspired", "Elegant", "Interiors"],
      subtitle:
        "Precision-crafted environments that reflect your vision, elevate comfort, and redefine modern living.",
      decorativeImages: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=200",
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=200",
      ],
      style: "architectural",
      brightness: "brightness-105",
    },
  ];

  const features = [
    {
      title: "Innovative Interior Concepts",
      description:
        "Fresh and creative design solutions crafted to reflect personality and functionality.",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800",
      icon: <Lightbulb className="size-12" />,
    },
    {
      title: "Luxury Living Spaces",
      description:
        "Elegant interiors blending comfort, sophistication, and timeless aesthetics.",
      image:
        "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=800",
      icon: <Sparkles className="size-12" />,
    },
    {
      title: "Modern Architectural Vision",
      description:
        "Bold architectural concepts designed with precision, balance, and innovation.",
      image:
        "https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?w=800",
      icon: <Building2 className="size-12" />,
    },
  ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };  

  const services = [
    {
      icon: <PenTool className="size-10" />,
      title: "Interior Design",
      category: "Design",
      description:
        "Bespoke interior solutions that blend aesthetics with functionality for residential and commercial spaces.",
      backgroundImage:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920",
    },
    {
      icon: <Building2 className="size-10" />,
      title: "Architectural Planning",
      category: "Architecture",
      description:
        "Innovative architectural planning and design services that bring your vision to structural reality.",
      backgroundImage:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920",
    },
    {
      icon: <Sofa className="size-10" />,
      title: "Furniture Design",
      category: "Custom",
      description:
        "Custom furniture pieces crafted to perfection, combining luxury with comfort and timeless style.",
      backgroundImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920",
    },
    {
      icon: <Briefcase className="size-10" />,
      title: "Turnkey Projects",
      category: "Development",
      description:
        "Complete end-to-end project execution from concept to completion with seamless coordination.",
      backgroundImage:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920",
    },
    {
      icon: <Sparkles className="size-10" />,
      title: "Commercial Interiors",
      category: "Commercial",
      description:
        "Professional workspace design that enhances productivity while reflecting your brand identity.",
      backgroundImage:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920",
    },
    {
      icon: <Palette className="size-10" />,
      title: "Luxury Renovations",
      category: "Renovation",
      description:
        "Transform existing spaces into luxurious environments with our expert renovation services.",
      backgroundImage:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920",
    },
  ];

  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1724582586495-d050726cf354?w=800",
      title: "Modern Elegance Villa",
      category: "Residential",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=800",
      title: "Contemporary Dining",
      category: "Commercial",
    },
    {
      image:
        "https://images.unsplash.com/photo-1648881806148-e5c51179c826?w=800",
      title: "Luxury Penthouse",
      category: "Residential",
    },
    {
      image:
        "https://images.unsplash.com/photo-1663811397219-c572550dffc5?w=800",
      title: "Executive Office",
      category: "Commercial",
    },
    {
      image:
        "https://images.unsplash.com/photo-1699239116624-85268dce7377?w=800",
      title: "Minimalist Lounge",
      category: "Residential",
    },
    {
      image:
        "https://images.unsplash.com/photo-1699800900071-ae073285ca02?w=800",
      title: "Boutique Suite",
      category: "Residential",
    },
  ];

  const testimonials = [
    {
      quote:
        "3G Decorative Group's ability to create exceptional luxury interiors stands out. Their attention to architectural detail and refined aesthetics transformed our residence into a timeless masterpiece.",
      author: "Sarah Mitchell",
      role: "Luxury Homeowner, Manhattan",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      rating: "4.9 out of 5",
    },
    {
      quote:
        "The level of sophistication and precision they bring to every design decision is remarkable. Our commercial space now reflects the premium quality we stand for.",
      author: "David Chen",
      role: "CEO, Design Studio",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      rating: "4.8 out of 5",
    },
    {
      quote:
        "Working with 3G was an extraordinary experience. They understood our vision for luxury and elegance, delivering interior architecture that exceeds every expectation.",
      author: "Emily Rodriguez",
      role: "Property Developer, Miami",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      rating: "4.9 out of 5",
    },
  ];

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setActiveTestimonial(next),
  };

  const process = [
    {
      icon: <MessageSquare className="size-8" />,
      step: "01",
      title: "Consultation",
      description: "Understanding your vision and requirements",
    },
    {
      icon: <Palette className="size-8" />,
      step: "02",
      title: "Concept Design",
      description: "Creating detailed design proposals",
    },
    {
      icon: <FileText className="size-8" />,
      step: "03",
      title: "Planning",
      description: "Refining every detail to perfection",
    },
    {
      icon: <Hammer className="size-8" />,
      step: "04",
      title: "Execution",
      description: "Bringing your dream space to life",
    },
    {
      icon: <PackageCheck className="size-8" />,
      step: "05",
      title: "Delivery",
      description: "Final handover with quality assurance",
    },
  ];

  const aboutImages = [about1, about2, about3, about4];

  const LaurelIcon = () => (
  <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
  <path d="M22 45C13 39 10 27 14 16" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M42 45C51 39 54 27 50 16" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M18 21L23 24" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M17 28L22 30" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M46 21L41 24" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M47 28L42 30" stroke="#C79A3B" strokeWidth="1.6"/>

  <circle cx="32" cy="24" r="8" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M28 33H36" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M30 33V42" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M34 33V42" stroke="#C79A3B" strokeWidth="1.6"/>
  </svg>
  )

  const PillarIcon = () => (
  <svg width="42" height="42" viewBox="0 0 64 64" fill="none">

  <path d="M18 15H46" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M20 21H44" stroke="#C79A3B" strokeWidth="1.6"/>

  <path d="M24 21V45" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M30 21V45" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M34 21V45" stroke="#C79A3B" strokeWidth="1.6"/>
  <path d="M40 21V45" stroke="#C79A3B" strokeWidth="1.6"/>

  <path d="M16 48H48" stroke="#C79A3B" strokeWidth="1.6"/>

  </svg>
  )

  const LuxuryStar = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none">

  <path
  d="M32 10L37 24L52 25L40 35L44 50L32 42L20 50L24 35L12 25L27 24L32 10Z"
  stroke="#C79A3B"
  strokeWidth="1.6"
  />

  </svg>
  )
  

  /** Just for returning to Privacy Policy */
  const page = new URLSearchParams(window.location.search).get("page");

  if (page === "privacy-policy") {
    return <PrivacyPolicy />;
  }

  /** End Just for returning to Privacy Policy */

  return (
    <div className="size-full bg-[#F5F1EA] text-[#332C26] overflow-x-hidden">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative z-50 bg-[#F5F1EA]"
        style={{ height: "92px" }}
      >
        <div className="max-w-[1720px] mx-auto h-full px-8">
          <div className="flex items-center justify-between h-full">
            {/* LEFT LOGO */}
            <div className="flex items-center min-w-[240px]">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={logo}
                alt="3G Decorative Group"
                className="w-auto object-contain"
                style={{
                  height: "105px",
                  marginTop: "8px",
                  marginLeft: "-72px",
                  filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.16))",
                }}
              />
            </div>

            {/* CENTER MENU */}
            <div className="hidden lg:flex items-center gap-16">
              {[
                { id: "home", label: "HOME" },
                { id: "features", label: "EXPERTISE" },
                { id: "about", label: "ABOUT" },
                { id: "services", label: "SERVICES" },
                { id: "projects", label: "PROJECTS" },
                { id: "contact", label: "CONTACT" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative uppercase transition-all duration-500 ${
                    activeNav === item.id
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

                  {/* Animated underline */}
                  <motion.span
                    initial={false}
                    animate={{
                      width: activeNav === item.id ? "34px" : "0px",
                      opacity: activeNav === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-1/2 -translate-x-1/2 -bottom-3 h-[2px] bg-gradient-to-r from-[#ea7a12] to-[#f3bb27] rounded-full"
                  />
                </a>
              ))}
            </div>

            {/* RIGHT CTA */}
            <div className="flex justify-end min-w-[260px]">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="relative overflow-hidden px-10 py-4 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #f4b223 0%, #ea7a12 100%)",
                  boxShadow: "0 16px 40px rgba(234,122,18,0.24)",
                }}
              >
                {/* Shine Animation */}
                <motion.div
                  animate={{
                    x: ["-150%", "250%"],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-1/3 bg-white/20 skew-x-[-20deg]"
                />

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-50" />

                <span
                  className="relative z-10 text-white"
                  style={{
                    fontFamily: "'Parkinsans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}
                >
                  Book Consultation
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Premium Editorial Framing */}
      {/* <section id="home" className="relative bg-[#6B625C]" style={{ paddingTop: '96px' }}> */}
      <section
        id="home"
        className="relative bg-[#F3F1EC] pt-0 overflow-visible"
      >
        {/* Floating Hero Container - Decoria Editorial Luxury Composition */}
        {/* <div className="px-4 md:px-6 lg:px-8 pb-8 md:pb-12" style={{ paddingTop: '12px' }}> */}
        <div className="px-4 md:px-6 lg:px-6 pt-0 pb-0">
          {/* <div className="relative h-screen min-h-[700px] md:min-h-[800px] lg:min-h-[900px] overflow-hidden" style={{ borderRadius: '32px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}> */}
          <div
            className="relative h-screen min-h-[720px] md:min-h-[820px] lg:min-h-[920px] overflow-hidden"
            style={{
              borderRadius: "32px",
              boxShadow: "0 25px 90px rgba(0,0,0,0.18)",
            }}
          >
            {/* Background Image Carousel - Bright and Cinematic */}
            <div className="absolute inset-0 z-0">
              <Slider ref={sliderRef} {...carouselSettings} className="h-full">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className="relative h-full min-h-[700px] md:min-h-[800px] lg:min-h-[900px]"
                  >
                    <motion.div
                      initial={{ scale: 1.05, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Style-specific overlays */}
                      {slide.style === "bright" && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f3bb27]/10 via-transparent to-transparent" />
                      )}
                      {slide.style === "cinematic" && (
                        // <div className="absolute inset-0 bg-gradient-to-br from-[#ea7a12]/15 via-[#000000]/10 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ea7a12]/8 via-[#000000]/5 to-transparent" />
                      )}
                      {slide.style === "architectural" && (
                        // <div className="absolute inset-0 bg-gradient-to-r from-[#332C26]/10 via-transparent to-transparent" />
                        <div className="bg-gradient-to-r from-[#332C26]/5 via-transparent to-transparent" />
                      )}
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Fixed Floating Editorial Card - Vertical Portrait */}
            {/* <div className="relative z-20 max-w-7xl w-full mx-auto px-4 md:px-8 flex items-center h-full"></div> */}
            <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-10 flex items-start h-full pt-24">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.4,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
                style={{
                  animation: "heroFloat 6s ease-in-out infinite",
                }}
              >
                {/* Card Layout 1 - Bright Editorial Luxury */}
                {currentSlide === 0 && (
                  <div
                    // className="bg-[#F5F1EA]/98 backdrop-blur-sm border border-[#f3bb27]/20 w-full max-w-[360px] md:max-w-[420px] lg:max-w-[460px] mx-auto md:mx-0 md:ml-12 lg:ml-16 p-8 md:p-12 lg:p-16"
                    className="bg-[#F5F1EA]/98 backdrop-blur-sm border border-[#f3bb27]/20 w-full max-w-[350px] md:max-w-[410px] lg:max-w-[430px] mx-auto md:mx-0 md:ml-12 lg:ml-16 p-8 md:p-12 lg:p-16"
                    style={{
                      borderRadius: "24px",
                      boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
                    }}
                  >
                    {/* Gold Accent Line - Top */}
                    <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#f3bb27] to-[#ea7a12] mb-8 md:mb-12" />

                    {/* Editorial Typography - Airy Spacing */}
                    <div className="mb-6 md:mb-10 relative">
                      {heroSlides[0].titleLines.map((line, lineIndex) => (
                        <div key={lineIndex} className="relative mb-2 md:mb-3">
                          <h1
                            className="text-[#332C26] relative"
                            style={{
                              fontFamily: "'Parkinsans', sans-serif",
                              fontSize: "clamp(52px, 8vw, 76px)",
                              fontWeight: 400,
                              lineHeight: "92%",
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {line}
                            {/* Decorative Images - Right Side Asymmetry */}
                            {lineIndex === 0 && (
                              <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                src={heroSlides[0].decorativeImages[0]}
                                alt="Decor"
                                className="hidden md:block absolute -right-16 lg:-right-20 -top-4 lg:-top-6 size-20 lg:size-28 rounded-full object-cover shadow-2xl border-4 border-[#f3bb27]/30"
                              />
                            )}
                            {lineIndex === 2 && (
                              <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                src={heroSlides[0].decorativeImages[1]}
                                alt="Decor"
                                className="hidden md:block absolute -right-18 lg:-right-24 -bottom-6 lg:-bottom-8 size-16 lg:size-20 rounded-full object-cover shadow-2xl border-4 border-white"
                              />
                            )}
                          </h1>
                        </div>
                      ))}
                    </div>

                    {/* Luxury Subtitle */}
                    <p
                      className="text-[#332C26]/70 mb-8 md:mb-12 text-sm md:text-base"
                      style={{
                        fontFamily: "'Parkinsans', sans-serif",
                        lineHeight: 1.8,
                        fontWeight: 300,
                      }}
                    >
                      {heroSlides[0].subtitle}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 md:gap-4">
                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-gradient-to-r from-[#f3bb27] to-[#ea7a12] text-white hover:shadow-2xl hover:shadow-[#f3bb27]/40 transition-all flex items-center justify-center gap-3 group"
                        style={{
                          fontFamily: "'Parkinsans', sans-serif",
                          fontWeight: 500,
                          fontSize: "14px",
                          letterSpacing: "0.02em",
                          borderRadius: "50px",
                        }}
                      >
                        <span>Explore Our Projects</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 border border-[#f3bb27]/30 text-[#332C26] hover:border-[#f3bb27] hover:bg-[#f3bb27]/10 transition-all"
                        style={{
                          fontFamily: "'Parkinsans', sans-serif",
                          fontWeight: 500,
                          fontSize: "14px",
                          letterSpacing: "0.02em",
                          borderRadius: "50px",
                        }}
                      >
                        Book Consultation
                      </motion.button>
                    </div>
                  </div>
                )}

                {/* Card Layout 2 - Cinematic Luxury p-10 md:p-14 lg:p-16*/}
                {currentSlide === 1 && (
                  <div
                    className="bg-[#F5F1EA]/95 backdrop-blur-md border border-[#ea7a12]/15 w-full max-w-[360px] md:max-w-[420px] lg:max-w-[460px] mx-auto md:mx-0 md:ml-8 lg:ml-10 p-8 md:p-12 lg:p-14"
                    style={{
                      borderRadius: "28px",
                      boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
                    }}
                  >
                    {/* Editorial Typography - Compact Cinematic */}
                    <div className="mb-6 md:mb-8 relative">
                      {heroSlides[1].titleLines.map((line, lineIndex) => (
                        <div key={lineIndex} className="relative mb-1">
                          <h1
                            className="text-[#332C26] relative"
                            style={{
                              fontFamily: "'Parkinsans', sans-serif",
                              fontSize: "clamp(52px, 8vw, 76px)",
                              fontWeight: 400,
                              lineHeight: "92%",
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {line}
                            {/* Decorative Images - Left Asymmetry */}
                            {lineIndex === 1 && (
                              <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                src={heroSlides[1].decorativeImages[0]}
                                alt="Decor"
                                className="hidden md:block absolute -left-16 lg:-left-20 -top-8 lg:-top-10 size-20 lg:size-24 rounded-full object-cover shadow-2xl border-4 border-[#ea7a12]/20"
                              />
                            )}
                            {lineIndex === 2 && (
                              <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                src={heroSlides[1].decorativeImages[1]}
                                alt="Decor"
                                className="hidden md:block absolute -right-12 lg:-right-16 top-1 lg:top-2 size-24 lg:size-32 rounded-full object-cover shadow-2xl border-4 border-white"
                              />
                            )}
                          </h1>
                        </div>
                      ))}
                    </div>

                    {/* Orange/Gold Divider */}
                    <div className="flex items-center gap-2 mb-8 md:mb-10">
                      <div className="w-10 md:w-12 h-px bg-gradient-to-r from-[#ea7a12] to-[#f3bb27]" />
                      <div className="w-1.5 h-1.5 bg-[#f3bb27] rotate-45" />
                    </div>

                    {/* Luxury Subtitle */}
                    <p
                      className="text-[#332C26]/75 mb-8 md:mb-12 text-sm md:text-base"
                      style={{
                        fontFamily: "'Parkinsans', sans-serif",
                        lineHeight: 1.7,
                        fontWeight: 300,
                      }}
                    >
                      {heroSlides[1].subtitle}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col gap-4">
                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-gradient-to-r from-[#f3bb27] to-[#ea7a12] text-white hover:shadow-2xl hover:shadow-[#f3bb27]/40 transition-all flex items-center justify-center gap-3 group"
                        style={{
                          fontFamily: "'Parkinsans', sans-serif",
                          fontWeight: 500,
                          fontSize: "14px",
                          letterSpacing: "0.02em",
                          borderRadius: "50px",
                        }}
                      >
                        <span>Explore Our Projects</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 border border-[#f3bb27]/30 text-[#332C26] hover:border-[#f3bb27] hover:bg-[#f3bb27]/10 transition-all"
                        style={{
                          fontFamily: "'Parkinsans', sans-serif",
                          fontWeight: 500,
                          fontSize: "14px",
                          letterSpacing: "0.02em",
                          borderRadius: "50px",
                        }}
                      >
                        Book Consultation
                      </motion.button>
                    </div>
                  </div>
                )}

                {/* Card Layout 3 - Architectural Sophistication */}
                {currentSlide === 2 && (
                  <div
                    className="bg-[#F5F1EA]/97 backdrop-blur-sm border border-[#332C26]/10 w-full max-w-[360px] md:max-w-[420px] lg:max-w-[460px] mx-auto md:mx-0 md:ml-16 lg:ml-20 p-10 md:p-12 lg:p-14"
                    style={{
                      borderRadius: "20px",
                      boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
                    }}
                  >
                    {/* Gold Accent Line - Top */}
                    <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#f3bb27] to-[#ea7a12] mb-8 md:mb-12" />

                    {/* Editorial Typography - Minimal Layout */}
                    <div className="mb-6 md:mb-10 relative">
                      {heroSlides[2].titleLines.map((line, lineIndex) => (
                        <div key={lineIndex} className="relative mb-2">
                          <h1
                            className="text-[#332C26] relative"
                            style={{
                              fontFamily: "'Parkinsans', sans-serif",
                              fontSize: "clamp(52px, 8vw, 76px)",
                              fontWeight: 400,
                              lineHeight: "92%",
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {line}
                            {/* Decorative Images - Balanced Positioning */}
                            {lineIndex === 0 && (
                              <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                src={heroSlides[2].decorativeImages[0]}
                                alt="Decor"
                                className="hidden md:block absolute -right-14 lg:-right-18 -top-3 lg:-top-4 size-18 lg:size-22 rounded-full object-cover shadow-xl border-4 border-[#332C26]/10"
                              />
                            )}
                            {lineIndex === 2 && (
                              <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                src={heroSlides[2].decorativeImages[1]}
                                alt="Decor"
                                className="hidden md:block absolute -left-12 lg:-left-14 -bottom-4 lg:-bottom-6 size-22 lg:size-26 rounded-full object-cover shadow-xl border-4 border-white"
                              />
                            )}
                          </h1>
                        </div>
                      ))}
                    </div>

                    {/* Luxury Subtitle */}
                    <p
                      className="text-[#332C26]/65 mb-8 md:mb-12 text-sm md:text-base"
                      style={{
                        fontFamily: "'Parkinsans', sans-serif",
                        lineHeight: 1.7,
                        fontWeight: 300,
                      }}
                    >
                      {heroSlides[2].subtitle}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col gap-4">
                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-gradient-to-r from-[#f3bb27] to-[#ea7a12] text-white hover:shadow-2xl hover:shadow-[#f3bb27]/40 transition-all flex items-center justify-center gap-3 group"
                        style={{
                          fontFamily: "'Parkinsans', sans-serif",
                          fontWeight: 500,
                          fontSize: "14px",
                          letterSpacing: "0.02em",
                          borderRadius: "50px",
                        }}
                      >
                        <span>Explore Our Projects</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 border border-[#f3bb27]/30 text-[#332C26] hover:border-[#f3bb27] hover:bg-[#f3bb27]/10 transition-all"
                        style={{
                          fontFamily: "'Parkinsans', sans-serif",
                          fontWeight: 500,
                          fontSize: "14px",
                          letterSpacing: "0.02em",
                          borderRadius: "50px",
                        }}
                      >
                        Book Consultation
                      </motion.button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
            <div
              className="absolute z-40 bg-[#F5F1EA] backdrop-blur-md"
              style={{
                bottom: "42px",
                right: "42px",
                borderRadius: "22px",
                padding: "16px 24px",
                minWidth: "240px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex items-center justify-between">
                {/* Prev Next */}
                <div className="flex items-center gap-5">
                  <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    className="flex items-center gap-2 text-[#A0A59D] hover:text-[#2A2D2A] transition-all"
                    style={{
                      fontFamily: "'Parkinsans', sans-serif",
                      fontSize: "18px",
                      fontWeight: 500,
                    }}
                  >
                    <ChevronLeft className="size-5" />
                    Prev
                  </button>

                  <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className="flex items-center gap-2 text-[#A0A59D] hover:text-[#2A2D2A] transition-all"
                    style={{
                      fontFamily: "'Parkinsans', sans-serif",
                      fontSize: "18px",
                      fontWeight: 500,
                    }}
                  >
                    Next
                    <ChevronRight className="size-5" />
                  </button>
                </div>

                {/* Counter */}
                <div
                  className="text-[#2A2D2A]"
                  style={{
                    fontFamily: "'Parkinsans', sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  {currentSlide + 1}
                  <span className="text-[#A0A59D]"> – {heroSlides.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Animation Keyframes */}
        <style>{`
          @keyframes heroFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-12px);
            }
          }
        `}</style>
      </section>

      {/* Animated Features Section - Blended with Hero */}
      <section
        id="features"
        className="relative bg-[#2E2723] px-6 lg:px-8"
        style={{
          marginTop: "-70px",
          paddingTop: "110px",
          paddingBottom: "90px",
          zIndex: 20,
          // borderTopLeftRadius: '34px',
          // borderTopRightRadius: '34px'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <div className="w-20 mx-auto mb-10" />
            {/* <h2
              className="mb-8 text-[#F5F1EA]"
              style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontSize: "48px",
                fontWeight: 500,
              }}
            >
              Our Expertise
            </h2>
            <p
              className="text-[#b8b1a8] max-w-3xl mx-auto font-light"
              style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              Bringing visionary design to life through innovation, elegance,
              and precision
            </p> */}
            <div
              className="text-center
                mb-16
                md:mb-20
                lg:mb-24

                -mt-6
                md:-mt-10
                lg:-mt-14"
            >
              {/* Luxury Label */}
              {/* <div
                className="mb-5 uppercase tracking-[0.35em] text-[#C9A36A]"
                style={{
                  fontFamily: "'Parkinsans',sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Expertise
              </div> */}
              /
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#f3bb27] rotate-45" />
                <span
                  className="text-white tracking-[0.2em] text-xs font-medium uppercase"
                  style={{ fontFamily: "'Parkinsans', sans-serif" }}
                >
                  Expertise
                </span>
              </div>
              {/* Luxury Heading */}
              <h2
                className="
                  text-[#F5F1EA]
                  mb-6
                  leading-[1.02]
                "
                style={{
                  fontFamily: "'Parkinsans',sans-serif",
                  fontSize: "clamp(38px,5vw,58px)",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                }}
              >
                Crafting
                <br />
                Exceptional Spaces
              </h2>
              {/* Luxury Description */}
              <p
                className="
                    mx-auto
                    text-[#BEB5AC]
                    max-w-[620px]
                  "
                style={{
                  fontFamily: "'Parkinsans',sans-serif",
                  fontSize: "17px",
                  lineHeight: "30px",
                  fontWeight: 400,
                }}
              >
                Timeless interiors shaped through elegance, precision, and
                visionary craftsmanship.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <LuxuryFeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Light Background */}
      <section
        id="about"
        className="
            relative
            overflow-hidden
            bg-[#F8F4EE]
            py-28
            px-6
            md:px-10
            lg:px-20
            "
      >
        {/* BACKGROUND ARCHITECTURE LINE */}

        <div
          className="
          absolute
          right-0
          top-0
          opacity-[0.06]
          pointer-events-none
          "
        >
          {/* <svg width="320" height="520">
            <path
              d="
              M220 20
              L300 70
              L300 470
              M240 40
              L240 470
              M200 80
              L200 470
              M160 120
              L160 470
              "
              stroke="#B78B42"
              strokeWidth="1"
            />
          </svg> */}
        </div>

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            lg:grid-cols-2
            gap-20
            items-center
            "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
          >
            <div
              className="
              flex
              items-center
              gap-5
              mb-7
              "
              >

              <div
              className="
              w-[52px]
              h-[1.5px]
              bg-[#C4973B]
              opacity-90
              "
              />

              <span
              className="
              uppercase
              tracking-[8px]
              text-[13px]
              font-medium
              text-[#C4973B]
              "
              >
              ABOUT US
              </span>

              </div>

            <h2
              className="
                leading-[1.05]
                mb-8
                "
              style={{
                fontFamily: "'Parkinsans',sans-serif",
                fontSize: "clamp(42px,5vw,72px)",
                fontWeight: 400,
                color: "#171717",
              }}
            >
              Creating Spaces
              <br />
              That
              <span
                className="
                italic
                text-[#B88735]
                ml-3
                "
              >
                Inspire
              </span>
            </h2>

            <p
              className="
              text-[#6E655C]
              leading-8
              mb-8
              max-w-xl
              "
              style={{
                fontFamily: "'Parkinsans',sans-serif",
                fontSize: "18px",
                fontWeight: 400,                
              }}
            >
              With over 15 years of excellence in interior architecture, 3G
              Decorative Group transforms visions into timeless spaces blending
              luxury, innovation, and refined sophistication.
            </p>

            <p
              className="
              text-[#6E655C]
              leading-8
              mb-12
              max-w-xl
              "
              style={{
                fontFamily: "'Parkinsans',sans-serif",
                fontSize: "18px",
                fontWeight: 400,                
              }}
            >
              Every detail is carefully crafted to create environments that
              inspire comfort, beauty and lasting elegance.
            </p>

            {/* STATS */}

            <div
              className="
              grid
              grid-cols-3
              gap-6
              "
            >
              {[
                {
              number:"250+",
              text:"Projects Completed",
              icon:<LaurelIcon/>
              },
              {
              number:"15+",
              text:"Years Experience",
              icon:<PillarIcon/>
              },
              {
              number:"98%",
              text:"Client Satisfaction",
              icon:<LuxuryStar/>
              },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.15,
                  }}
                >
                  <div
                    className="
                    flex
                    justify-center
                    mb-5 scale-[1.15]
                    text-[#C4973B]
                    "
                    >
                    {item.icon}
                    </div>

                  <div
                    className="
                      text-[#C58E2F]
                      font-semibold
                      text-5xl
                      mb-2
                      text-center
                      "
                    style={{
                      fontFamily: "'Parkinsans',sans-serif",
                    }}
                  >
                    {item.number}
                  </div>

                  <div
                    className="
                      text-center
                      text-sm
                      text-[#6D645C]
                      "
                      style={{
                      fontFamily: "'Parkinsans',sans-serif",
                    }}
                  >
                    {item.text}
                  </div>
                </motion.div>
              ))}
            </div>


            
          </motion.div>          

          {/* RIGHT IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* GRID */}
            <div
              className="
              relative
                w-full
                max-w-[620px]
                h-[620px]
                mx-auto
              "
            >
              {[
                {
                  img: aboutImages[0],
                  top: "0px",
                  left: "0px",
                  width: "270px",
                  height: "220px",
                },
                {
                  img: aboutImages[1],
                  top: "40px",
                  left: "285px",
                  width: "250px",
                  height: "300px",
                },
                {
                  img: aboutImages[2],
                  top: "240px",
                  left: "0px",
                  width: "270px",
                  height: "300px",
                },
                {
                  img: aboutImages[3],
                  top: "355px",
                  left: "285px",
                  width: "270px",
                  height: "220px",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -12,
                    scale: 1.025,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    position: "absolute",
                    top: item.top,
                    left: item.left,
                    width: item.width,
                    height: item.height,
                  }}
                  className="
                    overflow-hidden
                    rounded-[34px]
                    shadow-[0_18px_45px_rgba(0,0,0,.18)]
                    group
                    cursor-pointer
                    ">
                  <img
                    src={item.img}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-[900ms]
                      ease-out
                      group-hover:scale-110
                      group-hover:brightness-105
                      "
                  />

                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      w-12
                      h-12
                      rounded-full
                      bg-[#F6ECD7]
                      border
                      border-[#D4A64B]
                      flex
                      items-center
                      justify-center
                      shadow-[0_0_18px_rgba(215,162,75,.45)]
                      "
                  >
                    <span
                      className="
                        text-[#C59131]
                        text-xl
                        "
                    >
                      +
                    </span>
                  </div>
                </motion.div>
              ))}
              {/* CENTER 3G BADGE */}

              <motion.div
                className="
                absolute
                z-40
                "
                style={{
                left:"30%",
                top:"32%",
                transform:"translate(-50%,-50%)"
                }}

                initial={{
                opacity:0,
                scale:.85
                }}

                animate={{
                opacity:1,
                y:[0,-7,0],
                rotate:[0,1,-1,0],
                scale:[1,1.03,1]
                }}

                transition={{
                opacity:{duration:1},

                y:{
                duration:4,
                repeat:Infinity,
                ease:"easeInOut"
                },

                rotate:{
                duration:8,
                repeat:Infinity,
                ease:"easeInOut"
                },

                scale:{
                duration:4,
                repeat:Infinity,
                ease:"easeInOut"
                }
                }}
                              >

              <motion.div
              animate={{
              scale:[1,1.18,1],
              opacity:[.25,.45,.25]
              }}
              transition={{
              duration:3,
              repeat:Infinity
              }}
              className="
              absolute
              inset-0
              rounded-full
              blur-xl
              "
              style={{
              background:
              "radial-gradient(circle,#D7A24B66 0%,transparent 70%)"
              }}
              />

             <motion.img
              src={badge3G}
              alt="3G Luxury Badge"

              className="
              relative
              w-[170px]
              md:w-[190px]
              drop-shadow-[0_0_35px_rgba(215,162,75,.45)]
              "

              animate={{
              rotate:[0,1,-1,0],
              scale:[1,1.03,1]
              }}

              whileHover={{
              scale:1.06
              }}

              transition={{
              duration:.4
              }}        
              />

              </motion.div>
            </div>           

            


                 
          </motion.div>
        </div>
      </section>

      {/* Services Section - Exact Decoria Style with Slide Animation */}
      <section
        id="services"
        className="relative py-32 px-8 overflow-hidden min-h-screen flex items-center"
      >
        {/* Background Images Container */}
        <div className="absolute inset-0 z-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity:
                  activeServiceIndex === index ||
                  (activeServiceIndex === -1 && index === 0)
                    ? 1
                    : 0,
                scale:
                  activeServiceIndex === index ||
                  (activeServiceIndex === -1 && index === 0)
                    ? 1
                    : 0.8,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: activeServiceIndex === index ? 1 : 0,
              }}
            />
          ))}
          {/* Lighter overlay for better background visibility */}
          <div className="absolute inset-0 bg-[#1a1a1a]/70 z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl w-full mx-auto">
          {/* Title Section - Centered */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#f3bb27] rotate-45" />
                <span
                  className="text-white tracking-[0.2em] text-xs font-medium uppercase"
                  style={{ fontFamily: "'Parkinsans', sans-serif" }}
                >
                  Services
                </span>
              </div>
              <h2
                className="text-[#f3bb27]"
                style={{
                  fontFamily: "'Parkinsans', sans-serif",
                  fontSize: "48px",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: "0.02em",
                }}
              >
                Services Crafted for You
              </h2>
            </motion.div>
          </div>

          {/* Service Cards Grid with Slide/Hide Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  opacity: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  x: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                }}
                onMouseEnter={() => setActiveServiceIndex(index)}
                onMouseLeave={() => setActiveServiceIndex(-1)}
                animate={{
                  opacity: 1,
                  x:
                    activeServiceIndex !== index
                      ? index < activeServiceIndex
                        ? -30
                        : index > activeServiceIndex
                          ? 30
                          : 0
                      : 0,
                  scale: activeServiceIndex === index ? 1.02 : 1,
                }}
                className="relative bg-transparent border border-white/10 hover:border-white/20 cursor-pointer rounded-2xl overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  {/* Top Content */}
                  <div>
                    {/* Top Row: Icon and Category Badge */}
                    <div className="flex items-start justify-between mb-8">
                      {/* Icon Circle - Always Yellow */}
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-[#f3bb27] transition-all duration-300">
                        {service.icon}
                      </div>

                      {/* Category Badge */}
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <span
                          className="text-white text-[10px] font-semibold uppercase tracking-widest"
                          style={{ fontFamily: "'Parkinsans', sans-serif" }}
                        >
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Large Category Text */}
                    <h3
                      className="text-[#f3bb27] uppercase"
                      style={{
                        fontFamily: "'Parkinsans', sans-serif",
                        fontSize: "40px",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        lineHeight: 1.1,
                        textShadow: "1px 1px 0px #f3bb27",
                      }}
                    >
                      {service.category}
                    </h3>
                  </div>

                  {/* Bottom: Curved Card that Slides/Hides on Hover */}
                  <motion.div
                    animate={{
                      y:
                        activeServiceIndex === index &&
                        activeServiceIndex !== -1
                          ? 120
                          : 0,
                      opacity:
                        activeServiceIndex === index &&
                        activeServiceIndex !== -1
                          ? 0
                          : 1,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative bg-[#F5F1EA] p-6 shadow-xl"
                    style={{
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                      borderBottomLeftRadius: "16px",
                      borderBottomRightRadius: "80px",
                    }}
                  >
                    {/* Service Title */}
                    <h4
                      className="text-[#1a1a1a] mb-3"
                      style={{
                        fontFamily: "'Parkinsans', sans-serif",
                        fontSize: "22px",
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </h4>

                    {/* Description - Gray text */}
                    <p
                      className="text-[#666666] font-normal"
                      style={{
                        fontFamily: "'Parkinsans', sans-serif",
                        fontSize: "17px",
                        lineHeight: 1.5,
                      }}
                    >
                      {service.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery - Light Background */}
      <section
          id="projects"
          className="py-28 px-8 bg-[#F5F1EA] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">

            {/* HEADER */}         

            <motion.div
                initial={{ opacity:0,y:30 }}
                whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true }}
                transition={{ duration:.8 }}
                className="text-center mb-14"
                >

                <div
                className="
                flex
                items-center
                justify-center
                gap-3
                mb-5
                "
                >

                <div
                className="
                w-14
                h-[1px]
                bg-gradient-to-r
                from-transparent
                to-[#D9A441]
                "
                />

                <div
                className="
                uppercase
                tracking-[0.45em]
                text-[12px]
                font-medium
                text-[#C89A38]
                "
                style={{
                fontFamily:"'Parkinsans',sans-serif"
                }}
                >
                PORTFOLIO
                </div>

                <div
                className="
                w-14
                h-[1px]
                bg-gradient-to-l
                from-transparent
                to-[#D9A441]
                "
                />

                </div>

                <h2

                className="
                mb-5
                text-[#332C26]
                "

                style={{

                fontFamily:"'Parkinsans',sans-serif",

                fontSize:"64px",

                fontWeight:500,

                lineHeight:"1.05",

                letterSpacing:"-.03em"

                }}

                >

                Featured Projects

                </h2>

                <div
                className="
                w-36
                h-[1px]
                bg-gradient-to-r
                from-transparent
                via-[#D9A441]
                to-transparent
                mx-auto
                mb-6
                relative
                "
                >

                <div
                className="
                absolute
                left-1/2
                top-1/2
                w-2
                h-2
                bg-[#D9A441]
                rotate-45
                -translate-x-1/2
                -translate-y-1/2
                "
                />

                </div>

                <p

                className="
                text-[#6A635D]
                max-w-xl
                mx-auto
                font-light
                "

                style={{

                fontFamily:"'Parkinsans',sans-serif",

                fontSize:"17px",

                lineHeight:"1.9"

                }}

                >

                A curated selection of our most prestigious interior design projects

                </p>

                </motion.div>


            {/* GRID */}

            <div
              className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-7
              auto-rows-[180px]
              items-stretch
              "
              >

              {/* LARGE CARD */}

              <motion.div
                whileHover={{ scale:1.02 }}
                transition={{ duration:.5 }}
                className="
                lg:col-span-7
                lg:row-span-2
                relative
                overflow-hidden
                rounded-[32px]
                group
                shadow-[0_25px_60px_rgba(0,0,0,.08)]
                "
              >

                <img
                  src={projects[0]?.image}
                  className="
                  w-full
                  h-full
                  object-cover
                  duration-[1200ms]
                  group-hover:scale-[1.08]
                  group-hover:rotate-[1deg]
                  "
                />

                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-black/88
                  via-black/40
                  to-transparent
                  "
                />

                <div
                  className="
                  absolute
                  left-10
                  right-10
                  top-10
                  bottom-10

                  flex
                  flex-col
                  justify-end
                 
                  "
                >

                  <p
                    className="
                    text-[#C79A4A]
                    text-5xl
                    mb-3
                    "
                    style={{
                      fontFamily:"'Parkinsans',sans-serif"
                    }}
                  >
                    01
                  </p>

                  <h3
                    className="
                    text-white
                    text-5xl
                    leading-tight
                    mb-5
                    "
                    style={{
                      fontFamily:"'Parkinsans',sans-serif"
                    }}
                  >
                    {projects[0]?.title}
                  </h3>

                  <p
                    className="
                    text-[#D9C9B7]
                    mb-8
                    "
                  >
                    {projects[0]?.category}
                  </p>

                  <button
                    className="
                    text-[#C79A4A]
                    tracking-[0.15em]
                    uppercase
                    text-sm
                    "
                  >
                    View Project →
                  </button>

                </div>

              </motion.div>


              {/* SMALL CARDS */}

              {projects.slice(1,5).map((project,index)=>(

              <motion.div
                key={index}
                whileHover={{
                  y:-12,
                  scale:1.02
                  }}
                  transition={{
                  duration:.55,
                  ease:[0.22,1,0.36,1]
                  }}
                  className={`
                  relative
                  overflow-hidden
                  rounded-[30px]
                  group
                  w-full
                  h-full
                  min-w-0

                  ${index===0 ? "lg:col-span-5" : ""}
                  ${index===1 ? "lg:col-span-5" : ""}

                  ${index===2 ? "lg:col-span-6" : ""}
                  ${index===3 ? "lg:col-span-6" : ""}
                  `}
              >

                <img
                  src={project.image}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover

                    duration-[1400ms]
                    ease-out

                    group-hover:scale-[1.12]
                    group-hover:rotate-[1.5deg]
                    "
                                    />

                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-black/90
                  via-black/45
                  to-transparent
                  "
                />

                <div
                  className="
                  absolute
                  left-7
                  bottom-8
                  "
                >

                  <p
                    className="
                    text-[#C79A4A]
                    text-[28px]
                    mb-2
                    "
                    style={{
                      fontFamily:"'Parkinsans',sans-serif"
                    }}
                  >
                    0{index+2}
                  </p>

                  <h4
                    className="
                    text-white
                    text-[28px]
                    leading-tight
                    mb-2
                    "
                    style={{
                      fontFamily:"'Parkinsans',sans-serif"
                    }}
                  >
                    {project.title}
                  </h4>

                  <p
                    className="
                    text-[#D8CCBD]
                    text-sm
                    "
                  >
                    {project.category}
                  </p>

                </div>

                <motion.div

                  animate={{
                    rotate:[0,90,0]
                  }}

                  transition={{
                    duration:4,
                    repeat:Infinity
                  }}

                  className="
                  absolute
                  right-6
                  bottom-6
                  w-14
                  h-14
                  rounded-full
                  border
                  border-[#C79A4A]
                  flex
                  items-center
                  justify-center
                  text-[#C79A4A]
                  text-[28px]
                  backdrop-blur-sm
                  "
                >
                  +
                </motion.div>

              </motion.div>

              ))}

            </div>


            <motion.div
              whileHover={{ x:8 }}
              className="
              flex
              justify-center
              mt-16
              "
            >

              <button
                className="
                text-[#2B2118]
                tracking-[0.25em]
                uppercase
                text-sm
                flex
                items-center
                gap-4
                "
              >
                Explore All Projects

                <span
                  className="
                  text-[#C79A4A]
                  text-xl
                  "
                >
                  →
                </span>

              </button>

            </motion.div>

          </div>
      </section>


      {/* Process Timeline - Dark Background */}
      <section className="pt-24 pb-40 px-8 bg-[#332C26]">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#f3bb27] rotate-45" />
                <span
                className="
                text-[#f3bb27]
                tracking-[0.22em]
                text-xs
                font-medium
                uppercase
                "
                style={{
                fontFamily:"'Parkinsans',sans-serif"
                }}
                >
                OUR PROCESS
                </span>

              </div>
              <h2
                className="text-[#f3bb27]"
                style={{
                  fontFamily: "'Parkinsans', sans-serif",
                  fontSize: "48px",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: "0.02em",
                }}
              >
                 How We Work
              </h2>
              <p
                className="
                max-w-[650px]
                mx-auto
                text-[#BEB5AC]
                "
                style={{
                fontFamily:"'Parkinsans',sans-serif",
                fontSize:"17px",
                lineHeight:"30px"
                }}
            >

            A seamless journey from concept to completion

            </p>
            </motion.div>
          </div>

         

          <div className="relative">
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f3bb27]/30 to-transparent hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -15 }}
                  className="relative text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 size-24 mx-auto mb-10 bg-gradient-to-br from-[#ea7a12] to-[#f3bb27] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#f3bb27]/30"
                  >
                    {item.icon}
                  </motion.div>
                  <div
                    className="text-sm text-[#f3bb27] tracking-widest mb-5 font-medium"
                    style={{ fontFamily: "'Parkinsans', sans-serif" }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-[#F5F1EA] mb-5"
                    style={{
                      fontFamily: "'Parkinsans', sans-serif",
                      fontSize: "28px",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#b8b1a8] font-light"
                    style={{
                      fontFamily: "'Parkinsans', sans-serif",
                      fontSize: "16px",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Decoria Luxury Circular Design */}
      <section
        id="clients"
        className="pt-20 pb-32 px-8 bg-[#F5F1EA]"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Title Section - Centered */}
         
          <motion.div

            initial={{
            opacity:0,
            y:30
            }}

            whileInView={{
            opacity:1,
            y:0
            }}

            viewport={{
            once:true
            }}

            transition={{
            duration:.8
            }}

            className="
            text-center
            mb-20
            "

            >

            <div
            className="
            flex
            items-center
            justify-center
            gap-3
            mb-5
            "
            >

            <div
            className="
            w-14
            h-[1px]
            bg-gradient-to-r
            from-transparent
            to-[#D9A441]
            "
            />

            <div

            className="
            uppercase
            tracking-[0.45em]
            text-[12px]
            font-medium
            text-[#C89A38]
            "

            style={{
            fontFamily:"'Parkinsans',sans-serif"
            }}

            >

            TESTIMONIALS

            </div>

            <div
            className="
            w-14
            h-[1px]
            bg-gradient-to-l
            from-transparent
            to-[#D9A441]
            "
            />

            </div>

            <h2

            className="
            text-[#332C26]
            mb-5
            "

            style={{

            fontFamily:"'Parkinsans',sans-serif",

            fontSize:"56px",

            fontWeight:500,

            lineHeight:"1.08",

            letterSpacing:"-.03em"

            }}

            >

            Genuine Feedback From

            <br/>

            <span className="text-[#C28B2D]">

            Our Loyal Customers

            </span>

            </h2>

            <div
            className="
            w-36
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-[#D9A441]
            to-transparent

            mx-auto
            mb-6
            relative
            "
            >

            <div
            className="
            absolute
            left-1/2
            top-1/2

            w-2
            h-2

            bg-[#D9A441]

            rotate-45

            -translate-x-1/2
            -translate-y-1/2
            "
            />

            </div>

            <p

            className="
            text-[#6B645E]
            max-w-xl
            mx-auto
            "

            style={{

            fontFamily:"'Parkinsans',sans-serif",

            fontSize:"16px",

            lineHeight:"1.9"

            }}

            >

            Trusted by homeowners and businesses for
            creating spaces defined by elegance,
            comfort, and timeless luxury.

            </p>

            </motion.div>

          {/* Testimonial Carousel with Pill-Shaped Card */}
          <div className="relative max-w-5xl mx-auto mt-6">
            {/* SVG Gradient Definition */}
            <svg width="0" height="0" style={{ position: "absolute" }}>
              <defs>
                <linearGradient
                  id="arrowGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ea7a12" />
                  <stop offset="100%" stopColor="#f3bb27" />
                </linearGradient>
              </defs>
            </svg>

            {/* Navigation Arrows - Outside Circle */}
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => testimonialSliderRef.current?.slickPrev()}
              className="absolute -left-32 top-1/2 -translate-y-1/2 z-30 flex items-center gap-1.5 transition-all"
              style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#arrowGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="bg-gradient-to-r from-[#ea7a12] to-[#f3bb27] bg-clip-text text-transparent">
                Prev
              </span>
            </motion.button>

            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => testimonialSliderRef.current?.slickNext()}
              className="absolute -right-32 top-1/2 -translate-y-1/2 z-30 flex items-center gap-1.5 transition-all"
              style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              <span className="bg-gradient-to-r from-[#ea7a12] to-[#f3bb27] bg-clip-text text-transparent">
                Next
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#arrowGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </motion.button>

            {/* Carousel */}
            <Slider ref={testimonialSliderRef} {...testimonialSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  {/* Pill-Shaped Testimonial Card with 200px border-radius */}
                  <div
                    className="text-center mt-12 border border-[#332C26]/10 bg-white/50"
                    style={{
                      padding: "40px 60px",
                      borderRadius: "200px",
                    }}
                  >
                    {/* Circular Avatar - Floating */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="mb-8"
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="size-20 rounded-full mx-auto object-cover shadow-lg"
                      />
                    </motion.div>

                    {/* Testimonial Quote - Medium Typography */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-[#332C26] mb-8 max-w-2xl mx-auto"
                      style={{
                        fontFamily: "'Parkinsans', sans-serif",
                        fontSize: "18px",
                        lineHeight: 1.6,
                        fontWeight: 400,
                      }}
                    >
                      "{testimonial.quote}"
                    </motion.p>

                    {/* Rating Section with Lines and Diamonds - Decoria Style */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="flex items-center justify-center gap-5 mb-6"
                    >
                      {/* Left Diamonds */}
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#332C26]/30 rotate-45" />
                        <div className="w-1.5 h-1.5 bg-[#332C26]/30 rotate-45" />
                        <div className="w-1.5 h-1.5 bg-[#332C26]/30 rotate-45" />
                      </div>

                      {/* Left Line - Extended Length */}
                      <div className="w-32 h-px bg-[#332C26]/25" />

                      {/* Rating with Star - Pill Shape */}
                      <div
                        className="flex items-center gap-2 px-4 py-1.5 border border-[#332C26]/15 bg-white uppercase"
                        style={{
                          fontFamily: "'Parkinsans', sans-serif",
                          fontSize: "13px",
                          fontWeight: 600,
                          borderRadius: "50px",
                        }}
                      >
                        <Award className="size-4 text-[#332C26]" />
                        <span className="text-[#332C26]">
                          {testimonial.rating}
                        </span>
                      </div>

                      {/* Right Line - Extended Length */}
                      <div className="w-32 h-px bg-[#332C26]/25" />

                      {/* Right Diamonds */}
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#332C26]/30 rotate-45" />
                        <div className="w-1.5 h-1.5 bg-[#332C26]/30 rotate-45" />
                        <div className="w-1.5 h-1.5 bg-[#332C26]/30 rotate-45" />
                      </div>
                    </motion.div>

                    {/* Author Info - Clean Typography */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div
                        className="bg-gradient-to-r from-[#ea7a12] to-[#f3bb27] bg-clip-text text-transparent mb-1"
                        style={{
                          fontFamily: "'Parkinsans', sans-serif",
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        {testimonial.author}
                      </div>
                      <div
                        className="text-[#332C26]/60"
                        style={{
                          fontFamily: "'Parkinsans', sans-serif",
                          fontSize: "14px",
                          fontWeight: 400,
                        }}
                      >
                        {testimonial.role}
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Background */}
      {/* <section className="relative py-48 px-8 overflow-hidden bg-[#332C26]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1640357897497-599b4fc84f51?w=1920"
            alt="Luxury Interior"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#332C26] via-[#332C26]/90 to-[#332C26]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-[#ea7a12] to-[#f3bb27] mx-auto mb-12" />
            <h2
              className="mb-10 text-[#F5F1EA]"
              style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontSize: "72px",
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Let's Transform Your Vision Into Reality
            </h2>
            <p
              className="text-[#b8b1a8] mb-16 max-w-3xl mx-auto font-light"
              style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              Begin your journey to extraordinary spaces with our expert team
            </p>
          <div className="flex flex-wrap gap-8 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-14 py-5 bg-gradient-to-r from-[#ea7a12] to-[#f3bb27] text-white rounded-sm hover:shadow-2xl hover:shadow-[#f3bb27]/40 transition-all text-lg"
              style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-14 py-5 border-2 border-[#F5F1EA] text-[#F5F1EA] rounded-sm hover:bg-[#F5F1EA] hover:text-[#332C26] transition-all text-lg"
              style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </section> */}

      {/* Footer - Dark Background */}
      <footer id="contact" className="relative overflow-hidden bg-[#2A211C] text-[#F5F1EA] pt-28">

        {/* Luxury background */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#2A211C]/90 to-[#17110D]" />

        <div className="relative z-10 max-w-7xl mx-auto px-8">

          {/* Top Footer */}
          <div className="grid lg:grid-cols-4 gap-16 pb-20 border-b border-[#D4A24C]/20">

            {/* Logo */}
            <div>

              <motion.img
                src={logo}
                alt="3G Decorative Group"
                className="w-44 lg:w-52 mb-8"
                animate={{
                  filter:[
                  "drop-shadow(0 0 0px #D4A24C)",
                  "drop-shadow(0 0 12px #D4A24C)",
                  "drop-shadow(0 0 0px #D4A24C)"
                  ]
                }}
                transition={{
                  duration:4,
                  repeat:Infinity
                }}
              />

              <p
                className="text-[#D7D0C7] leading-8 text-sm"
                style={{
                  fontFamily:"'Parkinsans',sans-serif"
                }}
              >
                Crafting luxurious interiors that blend
                elegance, innovation and timeless
                sophistication.
              </p>

              <div className="flex gap-4 mt-8">

                {[Instagram,Facebook,Linkedin].map(
                (Icon,index)=>(

                <motion.div
                  key={index}
                  whileHover={{
                   y:-6,
                    scale:1.12,
                    boxShadow:
                    "0 0 20px rgba(212,162,76,.35)"
                    }}
                  className="
                  size-12
                  rounded-full
                  border
                  border-[#D4A24C]
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  hover:bg-[#D4A24C]
                  hover:text-black
                  transition-all
                  "
                >
                  <Icon size={18}/>
                </motion.div>

                ))}

              </div>

            </div>


            {/* Quick Links */}

            <div>

              <h3
              className="
              text-[#D4A24C]
              mb-8
              tracking-[0.2em]
              "
              >
                QUICK LINKS
              </h3>

              {[
                "Home",
                "About Us",
                "Services",
                "Projects",
                "Our Process",
                "Testimonials"
                ].map((item)=>(

                <motion.div
                key={item}
                whileHover={{x:8}}
                className="
                group
                flex
                justify-between
                items-center
                mb-5
                cursor-pointer
                border-b
                border-[#D4A24C]/10
                pb-3
                "
                style={{ fontFamily:"'Parkinsans',sans-serif",fontSize:"15px"}}
                >

                <span
                className="
                group-hover:text-[#D4A24C]
                transition-all
                "
                >
                {item}
                </span>

                <ChevronRight
                size={16}
                className="
                text-[#D4A24C]
                group-hover:translate-x-1
                transition-all
                "
                />

                </motion.div>

                ))}

            </div>


            {/* Services */}

            <div>

            <h3
            className="
            text-[#D4A24C]
            mb-8
            tracking-[0.2em]
            "
            >
            SERVICES
            </h3>

           {[
            "Interior Design",
            "Architecture",
            "Space Planning",
            "Furniture Design",
            "Luxury Living"
            ].map((item)=>(

            <motion.div
            key={item}
            whileHover={{x:8}}
            className="
            group
            flex
            justify-between
            items-center
            mb-5
            border-b
            border-[#D4A24C]/10
            pb-3
            cursor-pointer
            "
            style={{ fontFamily:"'Parkinsans',sans-serif",fontSize:"15px"}}
            >

            <span
            className="
            group-hover:text-[#D4A24C]
            transition-all
            "
            >
            {item}
            </span>

            <ChevronRight
            size={16}
            className="
            text-[#D4A24C]
            group-hover:translate-x-1
            transition-all
            "
            />

            </motion.div>

            ))}

            </div>


            {/* Contact */}

            <div>

            <h3
            className="
            text-[#D4A24C]
            mb-8
            tracking-[0.2em]
            "
            >
            CONTACT
            </h3>

           <div className="space-y-6" style={{ fontFamily:"'Parkinsans',sans-serif",fontSize:"15px"}}>

              {[
              {
              icon:MapPin,
              title:"Kolkata, West Bengal",
              sub:"India"
              },

              {
              icon:Phone,
              title:"+91 XXXXX XXXXX"
              },

              {
              icon:Mail,
              title:"info@3gdecorativegroup.com"
              },

              {
              icon:Clock,
              title:"Mon - Sat : 10 AM - 7 PM"
              }

              ].map((item,index)=>{

              const Icon=item.icon;

              return(

              <motion.div

              key={index}

              whileHover={{
              x:10
              }}

              className="
              group
              flex
              items-center
              gap-5
              cursor-pointer
              "

              >

              <motion.div

              whileHover={{
              scale:1.1,
              boxShadow:
              "0 0 18px rgba(212,162,76,.35)"
              }}

              className="
              w-14
              h-14
              min-w-[56px]
              rounded-full
              border
              border-[#D4A24C]/40
              flex
              items-center
              justify-center
              text-[#D4A24C]
              transition-all
              duration-500
              "

              >

              <Icon size={20}/>

              </motion.div>

              <div>

              <p
              className="
              text-[#F5F1EA]
              group-hover:text-[#D4A24C]
              transition-all
              "
              >

              {item.title}

              </p>

              {item.sub && (

              <p
              className="
              text-sm
              text-[#B7ADA0]
              "
              >

              {item.sub}

              </p>

              )}

              </div>

              </motion.div>

              )

              })}

              </div>

            </div>

          </div>


          {/* Newsletter */}

         <div
            className="
            mt-20
            border
            border-[#D4A24C]/20
            rounded-[28px]
            bg-gradient-to-r
            from-[#2A1E16]/90
            to-[#32241B]/70
            backdrop-blur-md
            px-10
            py-10
            "
            >

            <div
            className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            "
            >

            {/* LEFT */}

            <div
            className="
            flex
            items-center
            gap-8
            flex-1
            "
            >

            <div
            className="
            w-20
            h-20
            rounded-full
            border
            border-dashed
            border-[#D4A24C]/35
            flex
            items-center
            justify-center
            text-[#D4A24C]
            "

            >

            <Mail size={34}/>

            </div>


            <div
            className="
            hidden
            lg:block
            w-[1px]
            h-20
            bg-[#D4A24C]/20
            "
            />


            <div>

            <h3

            className="
            text-[#E8DED0]
            tracking-[0.08em]
            mb-3
            "

            style={{
            fontFamily:"'Parkinsans',sans-serif",
            fontSize:"42px",
            fontWeight:500
            }}

            >

            STAY INSPIRED

            </h3>

            <p

            className="
            text-[#B9ADA0]
            max-w-md
            leading-8
            "

            style={{
            fontFamily:"'Parkinsans',sans-serif"
            }}

            >

            Subscribe to our newsletter and be the first to know about our latest projects and ideas.

            </p>

            </div>

            </div>


            {/* RIGHT */}

            <div
            className="
            flex-1
            "
            >

            <div
            className="
            flex
            h-[88px]
            overflow-hidden
            border
            border-[#D4A24C]/25
            rounded-[18px]
            "
            >

            <input

            placeholder="Enter your email address"

            className="
            flex-1
            bg-transparent
            outline-none
            px-8
            text-[#F5F1EA]
            placeholder:text-[#8A7E72]
            "

            style={{
            fontFamily:"'Parkinsans',sans-serif",
            fontSize:"18px"
            }}

            />

            <motion.button

            whileHover={{
            background:"#E3B75D"
            }}

            className="
            w-[230px]
            bg-gradient-to-r
            from-[#C89A44]
            to-[#DDAF56]
            text-black
            tracking-[0.18em]
            font-medium
            "

            style={{
            fontFamily:"'Parkinsans',sans-serif"
            }}

            >

            SUBSCRIBE →

            </motion.button>

            </div>

            </div>

            </div>

            </div>




      {/* Bottom */}

      <div
      className="
      mt-10
      pt-8
      border-t
      border-[#D4A24C]/20
      relative
      "
      >

      {/* Center ornament */}

      <div
      className="
      absolute
      left-1/2
      -top-[13px]
      -translate-x-1/2
      bg-[#1F1713]
      px-5
      text-[#D4A24C]
      text-[14px]
      "
      >

      ✧

      </div>


      <div

      className="
      flex
      flex-col
      lg:flex-row
      justify-between
      items-center
      gap-4
      text-[#A89E92]
      "

      style={{
      paddingBottom:"15px",
      fontFamily:"'Parkinsans',sans-serif",
      fontSize:"13px",
      }}

      >

      <p
      className="
      tracking-[0.03em]
      "
      >

      © 2025 3G Decorative Group.
      All Rights Reserved.

      </p>


      <motion.div

      whileHover={{
      scale:1.02
      }}

      className="
      flex
      items-center
      gap-2
      "

      >

      <span>

      Designed & Developed By

      </span>

      <span
      className="
      text-[#D4A24C]
      font-medium
      hover:text-[#E3B75D]
      transition-all
      cursor-pointer
      "
      >

      CodeInQ

      </span>

      </motion.div>


      <div
      className="
      flex
      items-center
      gap-5
      "
      >

      {/* <span
      className="
      hover:text-[#D4A24C]
      cursor-pointer
      transition-all
      "
      > */}
      <a
         href="?page=privacy-policy"
        className="
        hover:text-[#D4A24C]
        cursor-pointer
        transition-all
        "
        >Privacy Policy</a>

      

      {/* </span> */}


      <span
      className="
      text-[#5A4B40]
      "
      >

      |

      </span>


      <span
      className="
      hover:text-[#D4A24C]
      cursor-pointer
      transition-all
      "
      >

      Terms & Conditions

      </span>

      </div>

      </div>

      </div>
        </div>

      </footer>
    </div>
  );
}

// Luxury Feature Card Component
function LuxuryFeatureCard({
  feature,
  index,
}: {
  feature: any;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 1,
        delay: index * 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -20 }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-2xl"
    >
      <div className="relative h-[600px]">
        <motion.img
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          src={feature.image}
          alt={feature.title}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#332C26] via-[#332C26]/70 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: index * 0.25 + 0.4 }}
          className="absolute bottom-0 left-0 right-0 p-12"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="text-[#f3bb27] mb-8"
          >
            {feature.icon}
          </motion.div>

          <div className="w-16 h-1 bg-gradient-to-r from-[#ea7a12] to-[#f3bb27] mb-8" />

          <h3
            className="text-[#F5F1EA] mb-6 group-hover:text-[#f3bb27] transition-colors duration-500"
            style={{
              fontFamily: "'Parkinsans', sans-serif",
              fontSize: "32px",
              fontWeight: 500,
            }}
          >
            {feature.title}
          </h3>
          <p
            className="text-[#b8b1a8] font-light"
            style={{
              fontFamily: "'Parkinsans', sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            {feature.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );

  //      return (
  //   <motion.div
  //     ref={ref}
  //     initial={{ opacity: 0, y: 50 }}
  //     animate={isInView ? { opacity: 1, y: 0 } : {}}
  //     transition={{
  //       duration: 0.9,
  //       delay: index * 0.15,
  //       ease: [0.22, 1, 0.36, 1]
  //     }}
  //     whileHover={{
  //       y: -4,
  //       transition: {
  //         duration: 0.5,
  //         ease: [0.22, 1, 0.36, 1]
  //       }
  //     }}
  //     className="group relative text-center"
  //   >
  //     {/* Soft Glow */}
  //     <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />

  //     {/* Decorative Top Accent */}
  //     <motion.div
  //       initial={{ width: 0 }}
  //       animate={isInView ? { width: 56 } : {}}
  //       transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
  //       className="h-[3px] bg-gradient-to-r from-[#ea7a12] to-[#f3bb27] mx-auto mb-10 rounded-full"
  //     />

  //     {/* Luxury Rotating Icon */}
  //     <div className="relative flex justify-center items-center mb-12 h-[190px]">

  //       {/* Rotating Decorative Border */}
  //       <motion.div
  //         animate={{ rotate: 360 }}
  //         transition={{
  //           duration: 28,
  //           ease: "linear",
  //           repeat: Infinity
  //         }}
  //         className="absolute w-[170px] h-[170px]"
  //         style={{
  //           background: '#D8D2C8',
  //           maskImage: `url(${iconBorder})`,
  //           WebkitMaskImage: `url(${iconBorder})`,
  //           maskSize: 'contain',
  //           WebkitMaskSize: 'contain',
  //           maskRepeat: 'no-repeat',
  //           WebkitMaskRepeat: 'no-repeat',
  //           maskPosition: 'center',
  //           WebkitMaskPosition: 'center',
  //           opacity: 0.55
  //         }}
  //       />

  //       {/* Inner Glow */}
  //       <div className="absolute w-[90px] h-[90px] rounded-full bg-white blur-2xl opacity-70" />

  //       {/* Icon Circle */}
  //       <motion.div
  //         whileHover={{
  //           scale: 1.04
  //         }}
  //         transition={{
  //           duration: 0.45,
  //           ease: [0.22, 1, 0.36, 1]
  //         }}
  //         className="relative z-10 w-[82px] h-[82px] rounded-full bg-[#F8F6F1] border border-[#DDD7CF] flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
  //       >
  //         <div className="text-[#4A453E] scale-110">
  //           {feature.icon}
  //         </div>
  //       </motion.div>

  //     </div>

  //     {/* Title */}
  //     <h3
  //       className="mb-5 text-[#2D2926]"
  //       style={{
  //         fontFamily: "'Parkinsans', sans-serif",
  //         fontSize: '36px',
  //         fontWeight: 600,
  //         lineHeight: 1.15,
  //         letterSpacing: '-0.03em'
  //       }}
  //     >
  //       {feature.title}
  //     </h3>

  //     {/* Description */}
  //     <p
  //       className="max-w-[320px] mx-auto text-[#6F6A64]"
  //       style={{
  //         fontFamily: "'Parkinsans', sans-serif",
  //         fontSize: '18px',
  //         lineHeight: 1.8,
  //         fontWeight: 400
  //       }}
  //     >
  //       {feature.description}
  //     </p>

  //     {/* Elegant Hover Line */}
  //     <div className="mt-10 flex justify-center">
  //       <div className="h-[1px] w-0 bg-[#ea7a12] group-hover:w-24 transition-all duration-700" />
  //     </div>

  //   </motion.div>
  // );
}
