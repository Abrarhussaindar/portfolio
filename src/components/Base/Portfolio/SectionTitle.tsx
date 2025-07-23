// components/SectionTitle.tsx
'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
    title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {title}
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-primary"></div>
        </motion.div>
    );
};

export default SectionTitle;