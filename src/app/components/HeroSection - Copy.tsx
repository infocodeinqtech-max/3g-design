import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Factory,
  Award,
  Users,
  Briefcase,
} from "lucide-react";

import heroImage from "../../assets/images/hero.png";

interface HeroStat {
  number: string;
  label: string;
}

interface HeroCard {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: string[];
}

const corporateCard: HeroCard = {
  title: "Corporate Interiors",
  subtitle: "Designed for Productivity",
  icon: <Building2 size={24} />,
  items: [
    "Corporate Offices",
    "Conference Rooms",
    "Reception Areas",
    "Executive Cabins",
    "Workstations",
    "Cafeterias",
  ],
};

const civilCard: HeroCard = {
  title: "Civil & Industrial",
  subtitle: "Built for Strength",
  icon: <Factory size={24} />,
  items: [
    "Factory Sheds",
    "Warehouses",
    "Industrial Buildings",
    "PEB Structures",
    "Steel Fabrication",
    "Civil Construction",
  ],
};

const stats: HeroStat[] = [
  {
    number: "250+",
    label: "Projects Delivered",
  },
  {
    number: "15+",
    label: "Years Experience",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-[#F6F2EC] px-4 pb-19 lg:px-5">
      {/* <section id="home" className="relative"> */}
      <div className="relative overflow-visible h-[760px] w-full">
        {/* HERO IMAGE  */}
        <img
          src={heroImage}
          alt="Hero"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            rounded-[32px]
           "
        />

        <div
          className="absolute inset-0 pointer-events-none"
          // style={{
          //     background: `
          //         linear-gradient(
          //         90deg,

          //         rgba(0,0,0,0) 12%,

          //         rgba(0,0,0,.18) 25%,

          //         rgba(0,0,0,.52) 36%,

          //         rgba(0,0,0,.72) 50%,

          //         rgba(0,0,0,.52) 64%,

          //         rgba(0,0,0,.18) 75%,

          //         rgba(0,0,0,0) 88%
          //         )
          //         `,
          //         }}

          //  style={{
          //     background: `
          //         linear-gradient(
          //         90deg,

          //         rgba(0,0,0,0) 12%,

          //         rgba(0,0,0,.10) 25%,

          //         rgba(0,0,0,.36) 36%,

          //         rgba(0,0,0,.50) 50%,

          //         rgba(0,0,0,.36) 64%,

          //         rgba(0,0,0,.10) 75%
          //         )
          //         `,
          //         }}

          style={{
            background: `
              linear-gradient(
                90deg,

                rgba(255,255,255,.10) 0%,

                rgba(255,255,255,.05) 10%,

                rgba(0,0,0,0) 22%,

                rgba(0,0,0,.22) 38%,

                rgba(0,0,0,.42) 50%,

                rgba(0,0,0,.22) 62%,

                rgba(0,0,0,0) 78%,

                rgba(255,255,255,.05) 92%,

                rgba(255,255,255,.10) 100%
              )
            `,
          }}
        />
        {/* Center Vertical Overlay */}

        <div
          className="absolute inset-0 pointer-events-none"
          // style={{
          //     background: `
          //     linear-gradient(
          //         90deg,
          //         rgba(0,0,0,0) 0%,
          //         rgba(0,0,0,0.10) 22%,
          //         rgba(0,0,0,0.55) 40%,
          //         rgba(0,0,0,0.72) 50%,
          //         rgba(0,0,0,0.55) 60%,
          //         rgba(0,0,0,0.10) 78%,
          //         rgba(0,0,0,0) 100%
          //     )
          //     `,
          // }}
          // style={{
          //     background: `
          //     linear-gradient(
          //         90deg,
          //         rgba(0,0,0,0) 0%,
          //        rgba(0,0,0,.05) 22%,

          //     rgba(0,0,0,.25) 40%,

          //     rgba(0,0,0,.38) 50%,

          //     rgba(0,0,0,.25) 60%,

          //     rgba(0,0,0,.05) 78%
          //          rgba(0,0,0,0) 100%
          //     )
          //     `,
          // }}

          style={{
            background: `
              linear-gradient(
                90deg,

                rgba(255,255,255,.06) 0%,

                rgba(255,255,255,.02) 18%,

                rgba(0,0,0,0) 28%,

                rgba(0,0,0,.14) 40%,

                rgba(0,0,0,.26) 50%,

                rgba(0,0,0,.14) 60%,

                rgba(0,0,0,0) 72%,

                rgba(255,255,255,.02) 82%,

                rgba(255,255,255,.06) 100%
              )
            `,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
                radial-gradient(
                    ellipse at center,
                    rgba(243,187,39,.12) 0%,
                    rgba(243,187,39,.05) 28%,
                    transparent 60%
                )
                `,
          }}
        />

        {/* ================= LEFT GLASS CARD ================= */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, -0.25, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          // className="
          //     absolute
          //     top-1/2
          //     -translate-y-1/2
          //     hidden
          //     lg:block
          //     z-20
          // "
          // style={{ left: "220px" }}
          className="
                absolute
                top-1/2
                -translate-y-1/2
                z-20
                hidden
                xl:block

                left-[2%]
                2xl:left-[7%]
                "
          style={{ left: "220px" }}
        >
          <div
            className="
                border
                w-[285px]
                rounded-[34px]
                "
            style={{
              border: "1px solid rgba(216,166,75,.35)",
              background: "rgba(22,22,22,.20)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              boxShadow: `
                    0 18px 40px rgba(0,0,0,.18),
                    inset 0 1px 0 rgba(255,255,255,.05)
                `,
            }}
          >
            {/* Glow */}

            <div
              className="absolute inset-0 rounded-[34px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,.025), transparent 42%)",
              }}
            />

            <div
              className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top,rgba(215,162,63,.025),transparent)",
              }}
            />

            <div className="relative px-7 py-7">
              {/* Icon */}

              <div
                className="
                w-16
                h-16
                rounded-full
                flex
                items-center
                justify-center
                "
                style={{
                  background: "transparent",
                  border: "1px solid rgba(216,166,75,.55)",
                }}
              >
                <Building2 size={28} strokeWidth={1.5} color="#D7A23F" />
              </div>

              {/* Title */}

              {/* <h3
                className="mt-5 uppercase whitespace-nowrap text-[#D7A23F]"
                style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontWeight:700, fontSize:"15px", lineHeight:"34px", letterSpacing:".08em", whiteSpace:"nowrap",
                }}
            > */}
              <h3
                className="mt-5 uppercase whitespace-nowrap text-[#D8A64B]"
                style={{
                  fontFamily: "'Parkinsans', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: ".02em",
                }}
              >
                CORPORATE INTERIORS
              </h3>

              {/* Divider */}

              <div
                className="mt-3 mb-5 h-px"
                style={{
                  background:
                    "linear-gradient(90deg,#D7A23F 0%,rgba(215,162,63,.35) 40%,transparent 100%)",
                }}
              />

              {/* List */}

              <div className="space-y-[15px]">
                {corporateCard.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="
                        w-5
                        h-5
                        rounded-full
                        bg-[#D7A23F]
                        flex
                        items-center
                        justify-center
                        text-black
                        text-[10px]
                        font-bold
                    "
                    >
                      ✓
                    </div>

                    <span
                      className="text-[#ECECEC]"
                      style={{
                        fontFamily: "'Parkinsans', sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT GLASS CARD ================= */}

        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 0.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          // className="
          //     absolute
          //     top-1/2
          //     -translate-y-1/2
          //     z-20
          //     hidden
          //     lg:block
          // "
          // style={{ right:"260px" }}
          className="
                absolute
                top-1/2
                -translate-y-1/2
                z-20
                hidden
                xl:block

                right-[4%]
                2xl:right-[7%]
                "
        >
          <div
            className="
                    relative
                    w-[310px]
                    rounded-[34px]
                    overflow-hidden
                "
            style={{
              border: "1px solid rgba(216,166,75,.35)",
              background: "rgba(22,22,22,.20)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              boxShadow: `
                    0 18px 40px rgba(0,0,0,.18),
                    inset 0 1px 0 rgba(255,255,255,.05)
                `,
            }}
          >
            {/* {Glass Shine} */}
            <div
              className="absolute inset-0 rounded-[34px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(145deg,rgba(255,255,255,.025),transparent 42%)",
              }}
            />
            <div className="relative px-8 pt-8 pb-8">
              <div
                className="
        w-16
        h-16
        rounded-full
        flex
        items-center
        justify-center
    "
                style={{
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(216,166,75,.55)",
                }}
              >
                <Factory size={28} strokeWidth={1.5} color="#D8A64B" />
              </div>
              <h3
                className="mt-5 uppercase whitespace-nowrap text-[#D8A64B]"
                style={{
                  fontFamily: "'Parkinsans', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: ".02em",
                }}
              >
                CIVIL STRUCTURES
              </h3>

              <p
                className="mt-1 text-[#CFA14D]"
                style={{
                  fontFamily: "'Parkinsans', sans-serif",
                  fontSize: "12px",
                }}
              >
                {/* Built for Strength */}
              </p>
              <div
                className="mt-4 mb-5 h-px"
                style={{
                  background:
                    "linear-gradient(90deg,#D8A64B 0%,rgba(216,166,75,.35) 40%,transparent)",
                }}
              />
              <div className="space-y-[15px]">
                {civilCard.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="
                                w-5
                                h-5
                                rounded-full
                                flex
                                items-center
                                justify-center
                                text-[10px]
                                font-bold
                            "
                      style={{
                        background: "#D8A64B",
                        color: "#111",
                      }}
                    >
                      ✓
                    </div>

                    <span
                      className="text-[#ECECEC]"
                      style={{
                        fontFamily: "'Parkinsans', sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= CENTER CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            absolute
            inset-0
            z-20
            flex
            items-center
            justify-center
            px-6
            "
        >
          <div className="max-w-[650px] text-center">
            {/* Small Heading */}

            <div
              className="
                uppercase
                tracking-[10px]
                text-[#D8A64B]
                mb-6
                "
              style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              SPACES THAT INSPIRE.
            </div>

            {/* Main Heading */}

            <h1
              className="
                leading-[1.05]
                text-white
                "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: "clamp(48px, 5vw, 68px)",
              }}
            >
              Corporate Interiors.
              <br />
              Civil Structures.
            </h1>

            {/* Script */}

            <div
              className="
                mt-2
                "
              style={{
                fontFamily: '"Great Vibes", cursive',
                color: "#D8A64B",
                fontSize: "70px",
                lineHeight: 1,
              }}
            >
              Built to Elevate.
            </div>

            {/* Description */}

            <p
              className="
                mt-6
                mx-auto
                max-w-[470px]
                leading-9
                text-[#F3F3F3]
                "
              style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
              }}
            >
              From modern workplaces to industrial landmarks — we design and
              build spaces that drive productivity, efficiency and sustainable
              growth.
            </p>

            {/* ================= CTA BUTTONS ================= */}

            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                gap-5
            "
            >
              {/* Corporate Button */}

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#corporate-projects"
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-full
                    px-8
                    py-4
                    min-w-[285px]
                    flex
                    items-center
                    justify-center
                    gap-3
                    "
                style={{
                  background: "linear-gradient(90deg,#EA8C18 0%,#F3BE4C 100%)",
                  boxShadow: "0 18px 45px rgba(234,140,24,.35)",
                }}
              >
                {/* Shine */}

                <div
                  className="
                    absolute
                    left-[-40%]
                    top-0
                    h-full
                    w-[40%]
                    bg-white/20
                    skew-x-[-25deg]
                    group-hover:left-[140%]
                    transition-all
                    duration-700
                    "
                />

                <Building2 size={18} color="#fff" />

                <span
                  style={{
                    fontFamily: "'Parkinsans', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                  className="text-white"
                >
                  Explore Corporate Projects
                </span>

                <ArrowRight
                  size={18}
                  color="#fff"
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>

              {/* Civil Button */}

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#civil-projects"
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-full
                    border
                    border-white/25
                    bg-black/18
                    backdrop-blur-md
                    px-8
                    py-4
                    min-w-[285px]
                    flex
                    items-center
                    justify-center
                    gap-3
                    hover:bg-black/30
                    transition-all
                    "
              >
                <Factory size={18} color="#D8A64B" />

                <span
                  className="text-white"
                  style={{
                    fontFamily: "'Parkinsans', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                >
                  Explore Civil Projects
                </span>

                <ArrowRight
                  size={18}
                  color="#D8A64B"
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* ================= Floating Stats ================= */}

        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // animate={{
          //     opacity: 1,
          //     y: [0, -4, 0],
          // }}
          // transition={{
          //     opacity: { duration: 0.8 },
          //     y: {
          //     duration: 6,
          //     repeat: Infinity,
          //     ease: "easeInOut",
          //     },
          // hidden
          // lg:flex
          // }}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            bottom-[-55px]
            z-30
           
            flex
            justify-center
            w-[94%]
            sm:w-[92%]
            md:w-[88%]
            lg:w-[82%]
            xl:w-[900px]
            2xl:w-[980px]

                "
        >
          {/* <div
            className="
            flex
            items-center
            justify-between
            rounded-full
            overflow-hidden
            px-10
            py-5
            w-[920px]
            "
            style={{
            background: "rgba(20,18,17,.90)",
            border: "1px solid rgba(255,255,255,.05)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow:
                "0 18px 50px rgba(0,0,0,.28)",
            }}
        > */}
          <div
            className="
                flex
                items-center
                justify-between

                rounded-[40px]

                w-full

                px-5
                sm:px-6
                md:px-8
                lg:px-10

                py-4
                md:py-5
                "
            style={{
              background: "rgba(20,18,17,.90)",
              border: "1px solid rgba(255,255,255,.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 18px 50px rgba(0,0,0,.28)",
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center flex-1 justify-center"
              >
                {index !== 0 && (
                  <div
                    className="mx-3
sm:mx-4
lg:mx-8 h-8
sm:h-10
lg:h-14 w-px"
                    style={{
                      background: "rgba(255,255,255,.08)",
                    }}
                  />
                )}

                <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
                  <div
                    className="
                    w-10 h-10
                    sm:w-12 sm:h-12
                    lg:w-14 lg:h-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    "
                    style={{
                      background: "rgba(216,166,75,.12)",
                      border: "1px solid rgba(216,166,75,.25)",
                    }}
                  >
                    {index === 0 && <Briefcase size={24} color="#D8A64B" />}

                    {index === 1 && <Award size={24} color="#D8A64B" />}

                    {index === 2 && <Users size={24} color="#D8A64B" />}
                  </div>

                  <div>
                    <h3
                      className="text-[#D8A64B]"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(26px,4vw,46px)",
                        lineHeight: 1,
                      }}
                    >
                      {stat.number}
                    </h3>

                    <p
                      className="text-white/75 mt-1"
                      style={{
                        fontFamily: "'Parkinsans', sans-serif",
                        fontSize: "clamp(10px,1.4vw,14px)",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= Floating Stats End================= */}
      </div>
    </section>
  );
}
