// components/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle title="About Me" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-primary">
                            Passionate Backend Developer
                        </h3>
                        <p className="mb-6 leading-relaxed text-muted-foreground">
                            Based in Bengaluru, India, I'm a dedicated backend developer with extensive experience
                            in building scalable, high-performance applications. My expertise spans across modern
                            technologies including Node.js, TypeScript, and various database systems.
                        </p>
                        <p className="mb-6 leading-relaxed text-muted-foreground">
                            I've successfully delivered projects ranging from SaaS e-commerce platforms to
                            real-time booking systems, always focusing on optimal performance, security, and user experience.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <Card className="text-center">
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold mb-2 text-primary">2+</div>
                                    <div className="text-muted-foreground">Years Experience</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold mb-2 text-primary">15+</div>
                                    <div className="text-muted-foreground">Projects Completed</div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-center">
                                    <MapPin className="mr-3 text-primary" size={20} />
                                    <span className="text-muted-foreground">Bengaluru, India</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="mr-3 text-primary" size={20} />
                                    <span className="text-muted-foreground">abrardar988651@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="mr-3 text-primary" size={20} />
                                    <span className="text-muted-foreground">6006045264</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Education</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <div className="flex items-start">
                                    <GraduationCap className="mr-3 mt-1 text-primary flex-shrink-0" size={18} />
                                    <div>
                                        <p className="font-medium text-foreground">B.Tech Computer Science</p>
                                        <p className="text-sm text-muted-foreground">
                                            Presidency University, Bengaluru (2019-2023)
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;