// components/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Server, Zap } from 'lucide-react';
import { skillsData } from '@/data/portfolioData';
import SectionTitle from './SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 relative z-10 bg-muted">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle title="Technical Skills" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-foreground">{skill.name}</span>
                                    <span className="text-sm text-primary">{skill.level}%</span>
                                </div>
                                <div className="w-full rounded-full h-2.5 bg-accent">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-primary"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                                <span className="text-xs mt-2 block text-muted-foreground">{skill.category}</span>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;