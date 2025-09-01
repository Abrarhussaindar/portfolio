"use client"
import React, { useState, useEffect } from 'react';
import colors from '@/components/Global/colors';
import AnimatedBackground from '@/components/Base/Portfolio/AnimatedBackground';
import Header from '@/components/Base/Header';
import HeroSection from '@/components/Base/Portfolio/HeroSection';
import AboutSection from '@/components/Base/Portfolio/AboutSection';
import ExperienceSection from '@/components/Base/Portfolio/ExperienceSection';
import ProjectsSection from '@/components/Base/Portfolio/ProjectsSection';
import SkillsSection from '@/components/Base/Portfolio/SkillsSection';
import ContactSection from '@/components/Base/Portfolio/ContactSection';
import Footer from '@/components/Base/Footer';
import BackToTopButton from '@/components/Base/Portfolio/BackToTopButton';

const PortfolioPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen relative overflow-x-hidden" style={{ background: colors.tertiary, color: colors.secondary }}>
            <AnimatedBackground mousePosition={mousePosition} />
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main>
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default PortfolioPage;