import { motion } from "motion/react";
import Slider from "react-slick";
import { Award } from "lucide-react";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const [activeTestimonial, setActiveTestimonial] = useState(0);
const testimonialSliderRef = useRef<any>(null);


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
    beforeChange: (_, next) =>
    setActiveTestimonial(next),
  };


  return (
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
      );

