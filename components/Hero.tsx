"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

export default function Hero() {
    return (
        <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-8">
            <div className="max-w-[740px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 md:mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-3 rounded-tag bg-[#E5F4FF] text-heading text-sm md:text-base font-medium leading-tight">
                        <Info className="w-4 h-4 shrink-0 text-heading" />
                        <span>
                            Открыт к новым проектам и предложениям
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8 md:mb-12"
                >
                    <h1 className="text-2xl md:text-[40px] font-bold mb-2 md:mb-3">
                        Привет, меня зовут Гриша ✌
                    </h1>

                    <p className="text-base md:text-2xl text-base-text/60 font-medium mt-5">
                        Middle Web / Product Designer
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8 md:mb-12"
                >
                    <p className="text-lg md:text-2xl text-heading font-medium ">
                        Мне 21 год, я UX/UI, product и web дизайнер из Москвы.{" "}
                        <span className="underline">
                            Я проектирую интерфейсы веб-сервисов, CRM/ERP и мобильных
                        приложений.
                        </span>{" "}
                        Веду проекты от исследования и гипотез до запуска и
                        сопровождения с разработкой.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-8 md:mb-12"
                >
                    <div className="relative w-full max-w-[740px] aspect-square rounded-card overflow-hidden bg-gray-200">
                        <Image
                            src="/images/grisha.png"
                            alt="Гриша"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p className="text-lg md:text-2xl text-heading ">
                        В работе опираюсь на метрики, сессии пользователей,
                        интервью и тесты. Делаю дизайн-системы, защищаю решения
                        перед стейкхолдерами и говорю с разработкой на одном
                        языке.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
