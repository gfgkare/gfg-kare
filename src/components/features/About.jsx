import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        className="text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-secondary mb-4 text-xs font-bold uppercase tracking-[0.2em]">Our Identity</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
                            <span className="text-text">The Apex of</span> <br />
                            <span className="text-accent">Campus</span> <span className="text-text">Innovation.</span>
                        </h3>

                        <p className="text-text-muted text-lg mb-8 leading-relaxed font-light">
                            We are not merely a student club; we are a precision-engineered ecosystem designed to accelerate technical mastery.
                            At <strong className="text-text font-medium">GFG CAMPUS BODY KARE</strong>, we cultivate an environment where raw potential is refined into industry-ready leadership.
                        </p>

                        <div className="grid grid-cols-2 gap-x-12 gap-y-8 pt-8 border-t border-secondary/20">
                            <div>
                                <h4 className="text-3xl font-serif font-bold text-accent mb-1">500+</h4>
                                <span className="text-xs uppercase tracking-widest text-text-muted/60">Active Cadets</span>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif font-bold text-accent mb-1">50+</h4>
                                <span className="text-xs uppercase tracking-widest text-text-muted/60">Summits Executed</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Abstract Visual Pattern */}
                    <motion.div
                        className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-secondary/20 bg-bg-surface card-hover"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* CSS Abstract Pattern - No Stock Photos */}
                        <div className="absolute inset-0 opacity-40">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,135,0.2)_25%,transparent_25%,transparent_50%,rgba(0,255,135,0.2)_50%,rgba(0,255,135,0.2)_75%,transparent_75%,transparent_100%)] bg-[length:24px_24px]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-accent/20 rounded-full animate-pulse-slow"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-accent/40 rounded-full dashed-border animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_20px_rgba(0,255,135,0.8)]"></div>
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"></div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .dashed-border {
                    border-style: dashed;
                }
            `}</style>
        </section>
    );
};

export default About;
