'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, ExternalLink } from 'lucide-react';
import { navigation } from '@/data/portfolioData';
import { Button } from '@/components/ui/button'; 
interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
    return (
        <>
            <motion.nav
                // ✨ Replaced inline styles with Tailwind classes
                className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-border/60 bg-background/80 shadow-lg"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo/Brand */}
                        <motion.div
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <motion.div
                                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-primary/70 shadow-md shadow-primary/30"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    boxShadow: `0 6px 24px hsl(var(--primary) / 0.4)`
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Code size={20} className="text-primary-foreground" />
                            </motion.div>
                            <motion.div
                                className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
                                whileHover={{ scale: 1.02 }}
                            >
                                Abrar Dar
                            </motion.div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <motion.div
                            className="hidden md:flex items-center space-x-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            {navigation.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index + 0.5, duration: 0.4 }}
                                    whileHover="hover"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {/* ✨ Using hover:opacity-100 for hover effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-lg bg-accent opacity-0"
                                        variants={{ hover: { opacity: 1 } }}
                                        transition={{ duration: 0.2 }}
                                    />
                                    {/* ✨ The underline effect simplified with variants */}
                                    <motion.div
                                        className="absolute bottom-0 left-1/2 w-0 h-0.5 rounded-full bg-primary"
                                        style={{ transform: 'translateX(-50%)' }}
                                        variants={{ hover: { width: "80%" } }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* CTA Button (Desktop) - Using Shadcn Button */}
                        <div className="hidden md:flex">
                            <Button asChild>
                                <motion.a
                                    href="#contact"
                                    className="flex items-center space-x-2"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8, duration: 0.4 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Get In Touch</span>
                                    <ExternalLink size={16} />
                                </motion.a>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-2 rounded-lg text-foreground bg-accent"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileHover={{ scale: 1.1, backgroundColor: `hsl(var(--accent-hover))` }} // Custom hover if needed
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden border-t border-border/60 bg-background/95"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <div className="px-4 py-6 space-y-2">
                                {navigation.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-between px-4 py-3 rounded-xl text-muted-foreground transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                        whileHover={{ x: 5, color: `hsl(var(--foreground))`, backgroundColor: `hsl(var(--accent))` }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>{item.name}</span>
                                    </motion.a>
                                ))}

                                {/* Mobile CTA */}
                                <div className="pt-6">
                                    <Button asChild className="w-full">
                                        <motion.a
                                            href="#contact"
                                            className="flex items-center justify-center space-x-2"
                                            onClick={() => setIsMenuOpen(false)}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: navigation.length * 0.1 + 0.2, duration: 0.3 }}
                                        >
                                            <span>Get In Touch</span>
                                            <ExternalLink size={16} />
                                        </motion.a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;