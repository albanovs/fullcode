import Image from "next/image";
import { FaTelegramPlane, FaInstagram, FaTiktok, FaVk } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black pb-20 text-white px-6 md:px-16 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Image src="/logowhite.svg" alt="logo" width={100} height={50} />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Освой востребованные технологии и получи сертификат после окончания курса.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <a href="/" className="p-2 bg-white rounded-lg text-black hover:bg-gray-200 transition">
                            <FaTelegramPlane color="#B2E655" className="w-5 h-5" />
                        </a>
                        <a href=" https://instagram.com/fullcode.kg" className="p-2 bg-white rounded-lg text-black hover:bg-gray-200 transition">
                            <FaInstagram color="#B2E655" className="w-5 h-5" />
                        </a>
                        <a href="/" className="p-2 bg-white rounded-lg text-black hover:bg-gray-200 transition">
                            <FaTiktok color="#B2E655" className="w-5 h-5" />
                        </a>
                        <a href="/" className="p-2 bg-white rounded-lg text-black hover:bg-gray-200 transition">
                            <FaVk color="#B2E655" className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Компания</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="#" className="hover:text-purple-400">О нас</a></li>
                        <li><a href="#" className="hover:text-purple-400">Информация</a></li>
                        <li><a href="#" className="hover:text-purple-400">О компании</a></li>
                        <li><a href="#" className="hover:text-purple-400">Контакты</a></li>
                        <li><a href="#" className="hover:text-purple-400">Оформить возврат</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Клиентам</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="#" className="hover:text-purple-400">Бронирование и управление</a></li>
                        <li><a href="#" className="hover:text-purple-400">Информация</a></li>
                        <li><a href="#" className="hover:text-purple-400">О компании</a></li>
                        <li><a href="#" className="hover:text-purple-400">Контакты</a></li>
                        <li><a href="#" className="hover:text-purple-400">Оформить возврат</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Контакты</h3>
                    <p className="text-sm text-gray-300">
                        <span className="text-[#B2E655] font-semibold block">АДРЕС</span>
                        Панфилова 163, 2 этаж. Бишкек, Кыргызстан
                    </p>
                    <p className="text-sm text-gray-300 mt-3">
                        <span className="text-[#B2E655] font-semibold block">КОНТАКТЫ</span>
                        <a href="tel:+996501001112">+996 501 001 112</a>
                    </p>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-800 pt-4 flex justify-center gap-10 text-center text-xs text-gray-400">
                <p>Все права защищены © 2025 Fullcode LLC</p>
            </div>
        </footer>
    );
}
