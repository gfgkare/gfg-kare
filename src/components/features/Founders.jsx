import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from '../../lib/TeamCard';
import {
    fadeInitial, fadeWhileInView,
    t3Viewport, t3Transition,
} from '../../lib/motionConfig';

const Founders = () => {
    // Mock data for founders - in production this would come from dataService
    const founders = [
        {
            name: "Founder Name",
            role: "Founding Lead",
            image: null // Placeholder
        },
        {
            name: "Co-Founder Name",
            role: "Co-Founding Lead",
            image: null
        }
    ];

    return (
        <section id="founders" className="py-32 bg-bg-surface border-t border-secondary relative overflow-hidden">
            {/* Exclusive Gold Glow for Founders Only */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.03)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="text-center mb-20">
                    {/* "Legacy" label — static; heading fades calmly, cards carry the directional entrance */}
                    <h2 className="text-accent mb-4 text-sm uppercase tracking-[0.5em] font-bold">
                        Legacy
                    </h2>
                    <motion.h3
                        className="text-4xl md:text-5xl font-serif text-text"
                        initial={fadeInitial}
                        whileInView={fadeWhileInView}
                        viewport={t3Viewport}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        The Founding <span className="text-accent text-glow">Signatories</span>
                    </motion.h3>
                </div>

                <div className="flex flex-wrap justify-center gap-16">
                    {founders.map((founder, index) => (
                        // Alternating left/right scroll entry + TiltCard for interactive depth
                        <TeamCard
                            key={index}
                            variant="founder"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={t3Viewport}
                            transition={{ ...t3Transition, delay: index * 0.15 }}
                        >
                            <div className="w-64 h-80 bg-gradient-to-b from-bg to-secondary/30 border border-accent/30 rounded-t-full mb-6 relative overflow-hidden transition-all duration-500 group-hover:border-accent/60">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-secondary/10"></div>
                            </div>

                            <h4 className="text-2xl font-serif text-text mb-2 group-hover:text-accent group-hover:-translate-y-[3px] transition-all duration-300">{founder.name}</h4>
                            <p className="text-accent/80 text-xs uppercase tracking-widest">{founder.role}</p>
                        </TeamCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;
