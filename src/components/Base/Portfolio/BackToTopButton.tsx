// components/BackToTopButton.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTopButton = () => {

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 1 }}
            >
                <Button
                    isIconOnly
                    aria-label="Back to top"
                    size="icon"
                    className="h-12 w-12 rounded-full shadow-lg"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    asChild
                >
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <ArrowUp size={20} />
                    </motion.button>
                </Button>
            </motion.div>
        </div>
    );
};

export default BackToTopButton;