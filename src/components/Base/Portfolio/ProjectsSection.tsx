// components/ProjectsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolioData';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle title="Featured Projects" />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col hover:border-primary transition-colors duration-300">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-xl">{project.title}</CardTitle>
                                        <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                    <CardDescription>{project.subtitle}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="mb-4 leading-relaxed text-muted-foreground">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="outline">{tech}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <div className="grid grid-cols-3 gap-4 w-full text-center">
                                        {Object.entries(project.metrics).map(([key, value]) => (
                                            <div key={key}>
                                                <div className="text-lg font-bold text-primary">{value}</div>
                                                <div className="text-xs capitalize text-muted-foreground">{key}</div>
                                            </div>
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;