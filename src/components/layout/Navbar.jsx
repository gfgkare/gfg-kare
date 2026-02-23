import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { t4Transition } from '../../lib/motionConfig';
import MagneticButton from '../../lib/MagneticButton';

import logo from '../../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/#home', id: 'home' },
        { name: 'About', path: '/#about', id: 'about' },
        { name: 'Team', path: '/#team-current', id: 'team-current' },
        { name: 'Events', path: '/#events', id: 'events' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'auto' });
        }
        setMenuOpen(false);
    };

    return (
        // Tier 4 — minimal fade entrance; no large displacement
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-bg-surface/90 backdrop-blur-md border-b border-secondary' : 'py-6 bg-transparent'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={t4Transition}
        >
            <div className="container flex justify-between items-center">
                <Link to="/" className="font-serif text-xl font-bold tracking-wider flex items-center gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                        <img
                            src={logo}
                            alt="GFG KARE Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-accent text-lg leading-tight">GFG</span>
                        <span className="text-text text-[10px] tracking-[0.3em] font-medium opacity-80 uppercase">Campus Body KARE</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            {location.pathname === '/' ? (
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className="relative text-sm uppercase tracking-wider font-medium text-text hover:text-accent transition-colors duration-300"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="relative text-sm uppercase tracking-wider font-medium text-text hover:text-accent transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                    <li>
                        <MagneticButton className="ml-4">
                            <button
                                onClick={() => scrollToSection('footer')}
                                className="btn btn-primary"
                            >
                                Join Us
                            </button>
                        </MagneticButton>
                    </li>
                </ul>

                {/* Hamburger Menu Button - Mobile Only */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 z-50"
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-accent transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-accent transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-accent transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {menuOpen && (
                <motion.div
                    className="md:hidden bg-bg-surface/95 backdrop-blur-md border-b border-secondary mt-4 py-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="container flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                {location.pathname === '/' ? (
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="block w-full text-left text-sm uppercase tracking-wider font-medium text-text hover:text-accent transition-colors duration-300"
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link
                                        to={link.path}
                                        onClick={() => setMenuOpen(false)}
                                        className="block w-full text-left text-sm uppercase tracking-wider font-medium text-text hover:text-accent transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li className="pt-2 border-t border-secondary/20">
                            <button
                                onClick={() => scrollToSection('footer')}
                                className="btn btn-primary w-full"
                            >
                                Join Us
                            </button>
                        </li>
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
