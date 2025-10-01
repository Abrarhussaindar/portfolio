// components/ProjectsSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Folder } from 'lucide-react';
import { projects } from '@/data/portfolioData';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="py-20 relative z-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle title="Featured Projects" />

                <div className="relative h-[700px] flex items-center justify-center px-4 sm:px-20 mt-12" style={{ perspective: '1000px' }}>
                    {/* Left Navigation Button */}
                    <motion.div
                        className="absolute left-4 z-50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button
                            onClick={prevProject}
                            className="rounded-full w-14 h-14 p-0 shadow-xl bg-primary hover:bg-primary/90"
                        >
                            <ChevronLeft size={28} className="text-white" />
                        </Button>
                    </motion.div>

                    {/* Right Navigation Button */}
                    <motion.div
                        className="absolute right-4 z-50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button
                            onClick={nextProject}
                            className="rounded-full w-14 h-14 p-0 shadow-xl bg-primary hover:bg-primary/90"
                        >
                            <ChevronRight size={28} className="text-white" />
                        </Button>
                    </motion.div>

                    {projects.map((project, index) => {
                        const totalItems = projects.length;
                        let offset = index - activeIndex;
                        if (offset > totalItems / 2) {
                            offset -= totalItems;
                        } else if (offset < -totalItems / 2) {
                            offset += totalItems;
                        }

                        const isActive = offset === 0;
                        const isVisible = Math.abs(offset) <= 1;

                        return (
                            <motion.div
                                key={index}
                                className="absolute w-full max-w-md"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    pointerEvents: isVisible ? 'auto' : 'none',
                                }}
                                animate={{
                                    x: offset * 420,
                                    scale: isActive ? 1 : 0.85,
                                    rotateY: offset * -15,
                                    zIndex: 10 - Math.abs(offset),
                                    opacity: isVisible ? 1 : 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                            >
                                <Card className="h-full flex flex-col hover:border-primary transition-colors duration-300 shadow-2xl border-2">
                                    <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5 pb-6">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="p-2 bg-primary/10 rounded-lg">
                                                        <Folder className="text-primary" size={24} />
                                                    </div>
                                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                                </div>
                                                <CardDescription className="text-base">{project.subtitle}</CardDescription>
                                            </div>
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:text-primary/80 transition-colors p-2 hover:bg-primary/10 rounded-lg"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow pt-6">
                                        <p className="mb-6 leading-relaxed text-muted-foreground">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    variant="outline"
                                                    className="bg-primary/5 hover:bg-primary/10 transition-colors"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="border-t pt-6 bg-gray-50/50">
                                        <div className="grid grid-cols-3 gap-4 w-full text-center">
                                            {Object.entries(project.metrics).map(([key, value]) => (
                                                <div key={key} className="flex flex-col items-center">
                                                    <div className="text-2xl font-bold text-primary">{value}</div>
                                                    <div className="text-xs capitalize text-muted-foreground mt-1">{key}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;