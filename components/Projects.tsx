"use client";

import { useState } from "react";
import { CaseData } from "@/lib/cases";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";
import { User, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectsProps {
    personalCases: CaseData[];
    workCases: CaseData[];
    isOtherProjects?: boolean;
}

export default function Projects({
    personalCases,
    isOtherProjects,
    workCases,
}: ProjectsProps) {
    const [activeTab, setActiveTab] = useState<"personal" | "work">("work");

    const currentCases = activeTab === "personal" ? personalCases : workCases;

    return (
        <section id="projects" className="py-8 md:py-12 px-4 md:px-8">
            <div className="max-w-[740px] mx-auto">
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-[40px] font-bold text-heading">
                        {isOtherProjects ? "Другие проекты" : "Проекты"}
                    </h2>

                    <div className="flex gap-4 md:gap-6 relative">
                        <button
                            onClick={() => setActiveTab("work")}
                            className={cn(
                                "flex items-center gap-2 py-2 transition-colors relative z-10",
                                activeTab === "work"
                                    ? "text-heading font-medium"
                                    : "text-base-text/40 hover:text-base-text/80",
                            )}
                        >
                            <Briefcase
                                className={cn(
                                    "w-4 h-4",
                                    activeTab === "work"
                                        ? "text-[#2CAEFF]"
                                        : "text-base-text/40",
                                )}
                            />
                            <span className="text-sm md:text-base">
                                Рабочие
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab("personal")}
                            className={cn(
                                "flex items-center gap-2 py-2 transition-colors relative z-10",
                                activeTab === "personal"
                                    ? "text-heading font-medium"
                                    : "text-base-text/40 hover:text-base-text/80",
                            )}
                        >
                            <User
                                className={cn(
                                    "w-4 h-4",
                                    activeTab === "personal"
                                        ? "text-[#2CAEFF]"
                                        : "text-base-text/40",
                                )}
                            />
                            <span className="text-sm md:text-base">Личные</span>
                        </button>

                        <motion.div
                            layoutId="projects-tab-indicator"
                            className="absolute bottom-0 h-[2px] bg-heading rounded-full"
                            initial={false}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                            }}
                            style={{
                                width: "calc(50% - 8px)",
                                left:
                                    activeTab === "work"
                                        ? "0px"
                                        : "calc(50% + 16px)",
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-8 md:gap-12">
                    {currentCases.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
