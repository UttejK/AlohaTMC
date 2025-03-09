import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AboutUs() {
  return (
    <section className="py-16 px-4 flex justify-center items-center">
      <div className="max-w-3xl w-full">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
          loop={true}
          className="rounded-lg shadow-lg"
          style={{ height: "350px" }} // Ensures uniform height
        >
          {/* Slide 1 - About Us */}
          <SwiperSlide className="bg-white dark:bg-gray-800 p-8 text-center h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              About Us
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Aloha Technologies and Management Consulting LLC (ATMC) empowers
              enterprises across the globe by optimizing operations for maximum
              efficiency and cost-effectiveness. With development centers in the
              USA and India, we provide world-class IT solutions.
            </p>
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
          </SwiperSlide>

          {/* Slide 4 - Experience */}
          <SwiperSlide className="bg-white dark:bg-gray-800 p-8 text-center h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Experience
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              With 3+ years of service and 20+ years of cumulative individual
              experience, we specialize in IT consulting and digital solutions.
              Our expertise spans industries, helping clients achieve innovation
              through technology.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
