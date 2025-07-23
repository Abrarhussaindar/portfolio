// components/AnimatedBackground.tsx
'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
    mousePosition: { x: number; y: number };
}

const AnimatedBackground = ({ mousePosition }: AnimatedBackgroundProps) => {
    return (
        <div className="fixed inset-0 -z-10 opacity-40 dark:opacity-20">
            <motion.div
                className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full blur-3xl"
                style={{ backgroundColor: 'hsl(var(--primary))' }}
                animate={{
                    x: mousePosition.x * 0.03,
                    y: mousePosition.y * 0.03,
                }}
                transition={{ type: "spring", stiffness: 40, damping: 20 }}
            />
            <motion.div
                className="absolute right-0 bottom-0 w-80 h-80 lg:w-96 lg:h-96 rounded-full blur-3xl"
                style={{ backgroundColor: 'hsl(var(--accent))' }}
                animate={{
                    x: mousePosition.x * -0.02,
                    y: mousePosition.y * -0.02,
                }}
                transition={{ type: "spring", stiffness: 30, damping: 20 }}
            />
        </div>
    );
};

export default AnimatedBackground;