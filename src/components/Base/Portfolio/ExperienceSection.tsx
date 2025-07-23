// components/ExperienceSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data/portfolioData';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 relative z-10 bg-muted">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle title="Professional Experience" />
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border/70">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute left-5 top-2 z-10 -ml-[9px] h-4 w-4 rounded-full bg-primary" />
                            <Card className="ml-12 hover:border-primary transition-colors">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <div>
                                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                                            <div className="flex items-center text-sm text-primary mt-1">
                                                <Building2 size={16} className="mr-2" />
                                                {exp.company}
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Calendar size={16} className="mr-2" />
                                            {exp.period}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                                        <MapPin size={16} className="mr-2" />
                                        {exp.location}
                                    </div>
                                    <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                                        {exp.responsibilities.map((resp, respIndex) => (
                                            <li key={respIndex}>{resp}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;