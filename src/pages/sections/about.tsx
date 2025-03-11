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

  return (
    <section id="about" className="py-16 px-4 flex justify-center items-center">
      <div className="max-w-3xl w-full">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation={enableNavigation}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="rounded-lg shadow-lg"
          style={{ height: "350px" }}
        >
          {/* Slide 1 - About Us */}
          <SwiperSlide className="bg-white dark:bg-gray-800 p-8 text-center h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              About Us
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Aloha Technologies and Management Consulting LLC (ATMC) empowers
              enterprises by optimizing operations for efficiency and
              cost-effectiveness. With development centers in the USA and India,
              we provide world-class IT solutions.
            </p>
            <Button
              className="mt-4 mx-auto"
              variant="outline"
              onClick={() => navigate("/about")}
            >
              Read More
            </Button>
          </SwiperSlide>

          {/* Slide 2 - Mission */}
          <SwiperSlide className="bg-white dark:bg-gray-800 p-8 text-center h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              To help businesses transform and thrive in a rapidly evolving
              technological landscape by providing innovative, reliable, and
              scalable IT solutions.
            </p>
            <Button
              className="mt-4 mx-auto"
              variant="outline"
              onClick={() => navigate("/about")}
            >
              Read More
            </Button>
          </SwiperSlide>

          {/* Slide 3 - Core Values */}
          <SwiperSlide className="bg-white dark:bg-gray-800 p-8 text-center h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Core Values
            </h2>
            <ul className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>✔ Integrity</li>
              <li>✔ Competence</li>
              <li>✔ Client Commitment</li>
              <li>✔ Dedication</li>
              <li>✔ Value Addition</li>
            </ul>
            <Button
              className="mt-4 mx-auto"
              variant="outline"
              onClick={() => navigate("/about")}
            >
              Read More
            </Button>
          </SwiperSlide>

          {/* Slide 4 - Experience */}
          <SwiperSlide className="bg-white dark:bg-gray-800 p-8 text-center h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Experience
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              With 3+ years of service and 20+ years of cumulative experience,
              we specialize in IT consulting and digital solutions across
              industries.
            </p>
            <Button
              className="mt-4 mx-auto"
              variant="outline"
              onClick={() => navigate("/about")}
            >
              Read More
            </Button>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
