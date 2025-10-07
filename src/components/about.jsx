"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function StatCard({ h, title, body, gradient = false }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <div
            style={!isMobile ? { height: h } : {}}
            className={[
                "w-full rounded-2xl p-6 flex flex-col gap-10 lg:gap-0 justify-between shadow-sm",
                gradient
                    ? "bg-gradient-to-b from-[#CCFF71] to-[#77C61C] text-white"
                    : "bg-[#F5F6FA] text-black",
            ].join(" ")}
        >
            <div className="text-[32px] leading-6 font-semibold">{title}</div>
            <p
                className={[
                    "text-[16px] leading-5",
                    gradient ? "text-white/85" : "text-gray-500",
                ].join(" ")}
            >
                {body}
            </p>
        </div>
    );
}

export default function AboutSection() {
    return (
        <section className="py-10">
            <div className="px-5 lg:px-0 mx-auto max-w-7xl">
                <h2 className="lg:mt-16 mb-10 lg:mb-0 text-center lg:text-left lg:text-4xl text-3xl md:text-[44px] font-bold leading-tight">
                    Что делает нас лучшими:
                    <br />
                    основные плюсы
                </h2>
                <div className="mt-5 flex lg:flex-row flex-col items-end gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <StatCard
                        h={180}
                        title="1,5 месяца"
                        body="Бесплатной стажировки"
                    />
                    <StatCard
                        h={230}
                        title="3+ года"
                        body="Опытные менторы проводят уроки"
                    />
                    <StatCard
                        h={280}
                        title="600+ выпускников"
                        body="которые воплощают свои цели и продолжают развиваться в профессиональной сфере."
                        gradient={true}
                    />
                </div>
                <div className="w-full h-full p-8 gap-10 lg:flex-row flex-col flex justify-between items-center lg:h-[200px] bg-[#F5F6FA] rounded-2xl mt-10 shadow-sm">
                    <Image
                        src="/book.png"
                        alt="about"
                        width={500}
                        height={500}
                    />
                    <p className="text-center">прекрасная возможность для<br /> самостоятельного изучения и закрепления знаний.</p>
                    <h5 className="lg:text-3xl text-xl text-center font-bold">В подарок курс по английскому языку</h5>
                </div>
            </div>
        </section>
    );
}
