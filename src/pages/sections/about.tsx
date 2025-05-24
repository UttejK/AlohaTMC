import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  const [enableNavigation, setEnableNavigation] = useState(
    window.innerWidth >= 768
  );

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setEnableNavigation(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slide data
  const slides = [
    {
      title: "About Us",
      description:
        "Aloha Technologies and Management Consulting LLC (ATMC) empowers enterprises by optimizing operations for efficiency and cost-effectiveness. With development centers in the USA and India, we provide world-class IT solutions.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    },
    {
      title: "Our Mission",
      description:
        "To help businesses transform and thrive in a rapidly evolving technological landscape by providing innovative, reliable, and scalable IT solutions.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "Our Core Values",
      description: (
        <ul className="list-disc list-inside space-y-1">
          <li>Integrity</li>
          <li>Competence</li>
          <li>Client Commitment</li>
          <li>Dedication</li>
          <li>Value Addition</li>
        </ul>
      ),
      image:
        "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg",
    },
    {
      title: "Our Experience",
      description:
        "With 3+ years of service and 20+ years of cumulative experience, we specialize in IT consulting and digital solutions across industries.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 flex justify-center items-center">
      <div className="w-full">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation={enableNavigation}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="rounded-lg overflow-hidden"
          style={{ height: "480px" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-center text-white p-6 md:p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <div className="text-md md:text-lg max-w-2xl">
                    {slide.description}
                  </div>
                  <Button
                    className="mt-6"
                    variant="secondary"
                    onClick={() => navigate("/about")}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
