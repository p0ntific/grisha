"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Cpu, Layout } from "lucide-react"; // Using placeholder icons
import Image from "next/image";

type Category = "design" | "ai" | "management";

interface Tool {
    id: string;
    name: string;
    description: string;
    category: Category;
    icon?: string; // Path to icon if custom
    color?: string;
}

const tools: Tool[] = [
    // Design
    {
        id: "figma",
        name: "Figma",
        description:
            "Умею в сложные компоненты, токены, варианты и прочее. Есть опыт развития и построения дизайн-систем. Умею делать интерактивные прототипы",
        category: "design",
        color: "#F24E1E",
    },
    {
        id: "ps",
        name: "Photoshop",
        description:
            "Ретушь, цветокоррекция, продвинутое коллажирование и подготовка графики",
        category: "design",
        color: "#31A8FF",
    },
    {
        id: "ai",
        name: "Illustrator",
        description:
            "Векторная графика, иконки, иллюстрации и подготовка к печати",
        category: "design",
        color: "#FF9A00",
    },
    // AI
    {
        id: "chatgpt",
        name: "ChatGPT",
        description: "Генерация идей, текстов, помощь в анализе данных",
        category: "ai",
    },
    {
        id: "midjourney",
        name: "Midjourney",
        description: "Генерация изображений и визуальных концепций",
        category: "ai",
    },
    // Management
    {
        id: "notion",
        name: "Notion",
        description: "Ведение документации, базы знаний, таск-трекинг",
        category: "management",
    },
    {
        id: "jira",
        name: "Jira",
        description: "Управление проектами и задачами",
        category: "management",
    },
    {
        id: "tracker",
        name: "Tracker",
        description: "Система управления задачами и проектами",
        category: "management",
    },
    {
        id: "cloude",
        name: "Cloude",
        description: "Облачные сервисы и хранение данных",
        category: "management",
    },
];

const categories: { id: Category; label: string; icon: React.ElementType }[] = [
    { id: "design", label: "Дизайн", icon: Layout },
    { id: "ai", label: "Нейронки", icon: Cpu },
    { id: "management", label: "Менеджмент", icon: Briefcase },
];

export default function SoftSkills() {
    const [activeCategory, setActiveCategory] = useState<Category>("design");
    const [selectedToolId, setSelectedToolId] = useState<string | null>(
        "figma"
    );
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const [indicatorLeft, setIndicatorLeft] = useState(0);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const filteredTools = tools.filter((t) => t.category === activeCategory);
    const selectedTool =
        tools.find((t) => t.id === selectedToolId) || filteredTools[0];

    useEffect(() => {
        const updateIndicator = () => {
            const activeIndex = categories.findIndex(
                (cat) => cat.id === activeCategory
            );
            const activeButton = buttonRefs.current[activeIndex];
            if (activeButton) {
                setIndicatorWidth(activeButton.offsetWidth);
                let left = 0;
                const gap = window.innerWidth >= 768 ? 32 : 24; // gap-8 on desktop = 32px, gap-6 on mobile = 24px
                for (let i = 0; i < activeIndex; i++) {
                    if (buttonRefs.current[i]) {
                        left += buttonRefs.current[i]!.offsetWidth + gap;
                    }
                }
                setIndicatorLeft(left);
            }
        };

        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [activeCategory]);

    const handleCategoryChange = (cat: Category) => {
        setActiveCategory(cat);
        const firstInCat = tools.find((t) => t.category === cat);
        if (firstInCat) {
            setSelectedToolId(firstInCat.id);
        }
    };

    return (
        <section className="py-12 px-4 md:px-8">
            <div className="max-w-[740px] mx-auto">
                <h2 className="text-2xl md:text-[40px] font-bold mb-8 text-heading">
                    Софт
                </h2>

                {/* Category Tabs */}
                <div className="flex gap-6 md:gap-8 mb-8 overflow-x-auto pb-2 relative">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        const colors = ["#2CAEFF", "#FFD700", "#FF9A00"]; // синий, желтый, оранжевый
                        return (
                            <button
                                ref={(el) => {
                                    buttonRefs.current[index] = el;
                                }}
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={cn(
                                    "flex items-center gap-2 transition-colors whitespace-nowrap pb-2 relative z-10",
                                    activeCategory === cat.id
                                        ? ""
                                        : "text-base-text/40 hover:text-base-text/80"
                                )}
                                style={
                                    activeCategory === cat.id
                                        ? {
                                              color: colors[index],
                                          }
                                        : {}
                                }
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium text-sm md:text-base">
                                    {cat.label}
                                </span>
                            </button>
                        );
                    })}
                    <motion.div
                        layoutId="softskills-tab-indicator"
                        className="absolute bottom-0 h-[2px] rounded-full"
                        initial={false}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                        }}
                        style={{
                            width: indicatorWidth || 0,
                            left: indicatorLeft || 0,
                            backgroundColor:
                                activeCategory === "design"
                                    ? "#2CAEFF"
                                    : activeCategory === "ai"
                                      ? "#FFD700"
                                      : "#FF9A00",
                        }}
                    />
                </div>

                {/* Icons Grid */}
                <div className="flex gap-3 mb-6">
                    {filteredTools.map((tool) => (
                        <button
                            key={tool.id}
                            onClick={() => setSelectedToolId(tool.id)}
                            className={cn(
                                "w-12 h-12 md:w-14 md:h-14 rounded-[12px] flex items-center justify-center transition-all duration-200",
                                selectedToolId === tool.id
                                    ? "bg-white scale-105 z-10 border-2 border-black"
                                    : "bg-gray-50 hover:bg-gray-100"
                            )}
                        >
                            {tool.id === "figma" && (
                                <Image
                                    src="/images/figma-logo.png"
                                    alt="Figma"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 md:w-7 md:h-7"
                                />
                            )}
                            {tool.id === "ps" && (
                                <Image
                                    src="/images/photoshop-logo.png"
                                    alt="Photoshop"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 md:w-7 md:h-7"
                                />
                            )}
                            {tool.id === "ai" && (
                                <Image
                                    src="/images/illustrator-logo.png"
                                    alt="Illustrator"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 md:w-7 md:h-7"
                                />
                            )}
                            {tool.id === "chatgpt" && (
                                <Image
                                    src="/images/gpt-logo.png"
                                    alt="ChatGPT"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 md:w-7 md:h-7"
                                />
                            )}
                            {tool.id === "midjourney" && (
                                <Image
                                    src="/images/midjourney-logo.png"
                                    alt="Midjourney"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 md:w-7 md:h-7"
                                />
                            )}
                            {tool.id === "notion" && (
                                <span className="font-bold text-xs md:text-sm text-heading">
                                    {tool.name.slice(0, 2)}
                                </span>
                            )}
                            {tool.id === "jira" && (
                                <Image
                                    src="/images/jira-logo.png"
                                    alt="Jira"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 md:w-7 md:h-7"
                                />
                            )}
                            {tool.id === "tracker" && (
                                <Image
                                    src="/images/tracker-logo.png"
                                    alt="Tracker"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 md:w-7 md:h-7"
                                />
                            )}
                            {tool.id === "cloude" && (
                                <Image
                                    src="/images/cloude-logo.png"
                                    alt="Cloude"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 md:w-7 md:h-7"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Description */}
                <div className="min-h-[80px]">
                    <AnimatePresence mode="wait">
                        {selectedTool && (
                            <motion.div
                                key={selectedTool.id}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h3 className="text-lg md:text-2xl font-medium mb-2 text-heading">
                                    {selectedTool.name}
                                </h3>
                                <p className="text-lg md:text-2xl text-base-text  leading-relaxed">
                                    {selectedTool.description}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
