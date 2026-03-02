"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const careerData = [
    {
        company: "Фриланс",
        role: "Графический дизайнер",
        period: "2024-2024",
    },
    {
        company: "goji.studio",
        role: "Продуктовый дизайнер",
        period: "2024-н.в.",
    },
    {
        company: "PENA",
        role: "Веб-дизайнер",
        period: "2024-н.в.",
    },
     {
        company: "Sovlium",
        role: "UX/UI дизайнер",
        period: "2026-н.в.",
    },
];

const pathContent = `Начал путь в дизайне с фриланса: логотипы, полиграфия, контент для статей и рекламные креативы. Это дало сильную визуальную базу и привычку работать в сроки.

Дальше перешел в веб и продукт. В стартапах и студиях занимался сайтами, внутренними сервисами и сложными интерфейсами. Работал с аналитикой, интервью, прототипами, защищал решения и сопровождал запуск.

Сейчас как middle web/product дизайнер веду проекты от гипотез и структуры до продакшена: проектирование, дизайн-система, передача в разработку и развитие по метрикам.`;

export default function Career() {
    const [isPathOpen, setIsPathOpen] = useState(false);

    return (
        <section className="py-8 md:py-12 px-4 md:px-8">
            <div className="max-w-[740px] mx-auto">
                <h2 className="text-2xl md:text-[40px] font-bold mb-8 text-heading">
                    Карьера
                </h2>

                <div className="space-y-6 mb-8">
                    {careerData.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-start pb-4 last:pb-0"
                        >
                            <div>
                                <h3 className="text-lg md:text-2xl font-bold text-heading mb-1">
                                    {item.company}
                                </h3>
                                <p className="text-lg md:text-2xl text-base-text/60">
                                    {item.role}
                                </p>
                            </div>
                            <span className="font-mono text-lg md:text-2xl font-bold text-heading">
                                {item.period}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-2xl px-6 py-4">
                    <button
                        onClick={() => setIsPathOpen(!isPathOpen)}
                        className="w-full flex items-center justify-between group"
                    >
                        <span className="text-lg md:text-2xl font-medium text-heading">
                            Путь в дизайне
                        </span>
                        <ChevronDown
                            className={cn(
                                "w-6 h-6 text-heading transition-transform duration-300",
                                isPathOpen ? "rotate-180" : ""
                            )}
                        />
                    </button>

                    <AnimatePresence>
                        {isPathOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-6 pb-2 text-lg md:text-2xl text-heading whitespace-pre-line leading-relaxed">
                                    {pathContent
                                        .split("\n\n")
                                        .map((paragraph, index, array) => (
                                            <span key={index}>
                                                {paragraph}
                                                {index < array.length - 1 && (
                                                    <>
                                                        <br />
                                                        <br />
                                                        <span className="text-heading/30">
                                                            - - - - - - - - - -
                                                            - - - - - -
                                                        </span>
                                                        <br />
                                                        <br />
                                                    </>
                                                )}
                                            </span>
                                        ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
