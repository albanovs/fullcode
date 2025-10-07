"use client";
import Header from "@/components/header";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarFold, ClockFading } from "lucide-react";
import AboutSection from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {

  const courses = [
    {
      title: "Javascript",
      discount: "-20%",
      desc: "JavaScript — язык для создания интерактивных веб-страниц. Освой React и Node.js, чтобы стать фулстэк-разработчиком.",
      date: "10 нояббря 2025",
      duration: "3 месяца",
      highlighted: true,
    },
    {
      title: "Python",
      desc: "Python — универсальный язык для веба, анализа данных и автоматизации. Изучай Django и создавай современные приложения.",
      date: "10 нояббря 2025",
      duration: "3 месяца",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Header />
      <div className="w-full h-full relative">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.png')" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

        <div className="lg:pt-20 pt-30 relative w-full min-h-[800px] flex flex-col md:flex-row items-center text-white justify-between max-w-7xl mx-auto px-4 py-10 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex-1 max-w-lg text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur p-3 border border-white/10 rounded-lg lg:w-80 text-center mb-2 text-sm"
            >
              Обучайся легко, учись круто
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-[#CCFF71] to-[#77C61C] bg-clip-text text-transparent animate-gradient-x">
                Fullcode
              </span>
              - легко, учись
              <br />
              <span className="bg-gradient-to-r from-[#CCFF71] to-[#77C61C] bg-clip-text text-transparent">
                &lt;/
              </span>
              круто
              <span className="bg-gradient-to-r from-[#CCFF71] to-[#77C61C] bg-clip-text text-transparent">
                &gt;
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-6 w-full bg-gradient-to-r from-[#936FFF] to-[#FF8AF9] rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-lg shadow-[#FF8AF9]/20"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-24 h-24 rounded-md flex items-center justify-center mx-auto sm:mx-0"
              >
                <Image src="/qr.svg" alt="cert" width={70} height={70} />
              </motion.div>
              <div>
                <p className="text-white text-sm sm:text-base">
                  Проверяйте свои сертификаты на уникальность на нашем сайте
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mt-3 px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition text-sm sm:text-base"
                >
                  Проверить
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex-1 w-full max-w-md mx-auto md:mx-0 relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-90 right-20 hidden md:block"
            >
              <Image
                src="/code.png"
                alt="Hero"
                width={220}
                height={220}
                className="rounded-xl shadow-lg shadow-green-400/20"
              />
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="bg-white/10 backdrop-blur border border-white/30 rounded-xl p-6 flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Имя и фамилия"
                className="p-3 rounded-lg bg-white/50 placeholder-gray-700 w-full focus:ring-2 focus:ring-lime-400 outline-none transition"
              />
              <input
                type="tel"
                placeholder="+996 0 555 27 10 28"
                className="p-3 rounded-lg bg-white/50 placeholder-gray-700 w-full focus:ring-2 focus:ring-lime-400 outline-none transition"
              />
              <textarea
                placeholder="Расскажите какой курс вас интересует?"
                className="p-3 rounded-lg bg-white/50 placeholder-gray-700 resize-none w-full focus:ring-2 focus:ring-lime-400 outline-none transition"
                rows={4}
              ></textarea>
              <div className="flex items-start gap-2 text-xs">
                <input type="checkbox" className="accent-purple-500 mt-1" />
                <span>
                  Нажимая на кнопку «Отправить», вы соглашаетесь с{" "}
                  <a href="#" className="underline text-purple-500">
                    Условиями пользования
                  </a>{" "}
                  и{" "}
                  <a href="#" className="underline text-purple-500">
                    Политикой конфиденциальности
                  </a>
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="mt-2 bg-[#77C61C] text-black py-3 rounded-lg font-medium hover:bg-[#CCFF71] transition"
              >
                Отправить
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl flex flex-col justify-center items-center mx-auto min-h-screen">
        <h2 className="lg:text-6xl text-3xl text-center font-semibold mb-4 mt-10">Ближайшие курсы</h2>
        <div>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-10 px-5 lg:px-0 bg-white">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-[#F5F6FA] rounded-2xl shadow-sm p-8 w-full md:w-full hover:shadow-md transition"
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-semibold text-black">{course.title}</h2>
                  {course.discount && (
                    <span className="bg-[#A25BFE] text-sm font-medium px-2 py-1 rounded-md text-white">
                      {course.discount}
                    </span>
                  )}
                </div>

                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {course.desc}
                </p>

                <hr className="border-gray-300 my-4" />

                <div className="flex flex-wrap justify-between items-center text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl"><CalendarFold color="#77C61C" /></span>
                    <div>
                      <p className="text-gray-400 text-xs">Запуск курса:</p>
                      <p className=" font-semibold">{course.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl"><ClockFading color="#77C61C" /></span>
                    <div>
                      <p className="text-gray-400 text-xs">Длительность:</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                  </div>

                  <button className="bg-black text-white px-5 py-2 rounded-md hover:opacity-80 transition font-medium mt-4 md:mt-0">
                    <a href="https://wa.me/+996501001112">Записаться</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AboutSection />
      </div>
      <div className="w-full lg:mt-20 p-5 min-h-full lg:mb-20 mb-10 text-sm">
        <div className="max-w-7xl mx-auto relative w-full min-h-[400px] flex lg:flex-row flex-col items-center justify-between px-5 bg-gradient-to-b from-[#CCFF71] to-[#77C61C] rounded-3xl p-5">
          <div className="flex-1 gap-2">
            <h3 className="lg:text-5xl text-2xl font-semibold">Дарим сертификат<br />
              после окончания курса</h3>
            <p className="text-md mt-4">После успешного окончания курса вы получите именной сертификат, подтверждающий ваши знания и навыки.</p>
            <div className="flex lg:flex-row flex-col lg:mr-10 mt-5 mb-5 justify-between gap-5">
              <div className="w-full h-20 p-3 rounded-xl flex items-center gap-2 bg-white">
                <Image src="/check.svg" alt="map" width={50} height={50} />
                <p className="text-ms font-semibold">Сертификат лицензирован</p>
              </div>
              <div className="w-full h-20 p-3 rounded-xl flex items-center gap-2 bg-white">
                <Image src="/check.svg" alt="map" width={50} height={50} />
                <p className="text-ms font-semibold">Международное признание</p>
              </div>
            </div>
          </div>
          <div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-15 right-110"
            >
              <Image src="/edu.png" alt="map" width={150} height={400} />
            </motion.div>
            <Image className="z-5 relative" src="/cert.png" alt="map" width={500} height={400} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
