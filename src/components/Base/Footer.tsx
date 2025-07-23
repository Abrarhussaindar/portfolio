'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Server, Shield } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-border/60 relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="mb-6">
                        <motion.div
                            className="text-3xl font-bold text-foreground inline-block"
                            whileHover={{ scale: 1.05 }}
                        >
                            Abrar Hussain Dar
                        </motion.div>
                        <p className="mt-2 text-muted-foreground">Backend Developer & Technology Enthusiast</p>
                    </div>

                    <div className="flex justify-center space-x-6 mb-8">
                        {[
                            { icon: Code2, label: "Clean Code" },
                            { icon: Database, label: "Scalable Systems" },
                            { icon: Server, label: "High Performance" },
                            { icon: Shield, label: "Security First" }
                        ].map(({ icon: Icon, label }, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-2 text-muted-foreground"
                                whileHover={{ scale: 1.1, color: `hsl(var(--primary))` }}
                            >
                                <Icon size={18} />
                                <span className="text-sm hidden sm:inline">{label}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="border-t border-border/60 pt-8">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Abrar Hussain Dar. <br/> Crafted with ❤️ using Next.js, TypeScript, Shadcn/ui & Framer Motion.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;