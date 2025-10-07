"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Phone, BookOpenText, CircleUserRound, Instagram, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const tabs = [
        { href: "/", label: "Главная", icon: Home },
        { href: "#curs", label: "Курсы", icon: BookOpenText },
        { href: "#profile", label: "Профиль", icon: CircleUserRound },
    ];

    return (
        <>
            <nav className="w-full bg-gradient-to-r from-[#BCF655] to-[#77C61C] text-white px-4 md:px-10 py-3 shadow-md fixed top-0 left-0 z-10">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <Link
                            href="/"
                            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white text-black text-2xl flex items-center justify-center font-semibold"
                        >
                            <Image src="/logo.svg" alt="logo" width={70} height={70} />
                        </Link>
                        <Link
                            href="/"
                            className="font-semibold lg:text-[26px] tracking-wide"
                        >
                            <Image src="/logotext.png" alt="logo" width={120} height={50} />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="#curs" className="hover:opacity-80 transition">
                            Курсы
                        </Link>
                        <Link href="#contact" className="hover:opacity-80 transition">
                            Контакты
                        </Link>
                        <Link href="#about" className="hover:opacity-80 transition">
                            О нас
                        </Link>
                        <Link href="#review" className="hover:opacity-80 transition">
                            Отзывы
                        </Link>

                        <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                            <a href="https://wa.me/+996501001112">Связаться</a>
                        </button>
                    </div>
                    <div className="flex items-center gap-2 md:hidden">
                        <button onClick={() => setMenuOpen(true)}>
                            <Menu className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </nav>

            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[998]"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-[999] shadow-lg transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <span className="font-semibold text-lg">Меню</span>
                    <button onClick={() => setMenuOpen(false)}>
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <nav className="flex flex-col p-4 space-y-4 flex-1">
                    <Link href="#curs" className="flex items-center gap-2 hover:opacity-80 transition">
                        Курсы
                    </Link>
                    <Link href="#contact" className="flex items-center gap-2 hover:opacity-80 transition">
                        Контакты
                    </Link>
                    <Link href="#about" className="flex items-center gap-2 hover:opacity-80 transition">
                        О нас
                    </Link>
                    <Link href="#review" className="flex items-center gap-2 hover:opacity-80 transition">
                        Отзывы
                    </Link>

                    <a
                        href="https://wa.me/+996501001112"
                        className="mt-4 bg-[#CCFF71] text-black py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#77C61C] transition"
                    >
                        <Phone className="w-5 h-5" /> Связаться
                    </a>
                </nav>

                <div className="p-4 border-t text-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> г. Бишкек, ул. Панфилова 163, 2 этаж
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" /><a href="tel:+996501001112">+996 501 001 112</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" /> <a href="mailto:fullcode.kg@gmail.com">fullcode.kg@gmail.com</a>
                    </div>
                </div>
            </div>

            <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-2 z-[997]">
                {tabs.map(({ href, label, icon: Icon }) => {
                    const active = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex flex-col items-center transition ${active ? "text-[#77C61C]" : "text-gray-500"
                                }`}
                        >
                            <Icon className="w-6 h-6" />
                            <span className="text-xs">{label}</span>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
