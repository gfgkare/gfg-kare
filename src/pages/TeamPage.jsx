import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getTeam } from '../services/dataService';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import TeamCard from '../lib/TeamCard';
import {
    t3Initial, t3WhileInView, t3Viewport, t3Transition,
} from '../lib/motionConfig';

const TeamPage = () => {
    const [teamData, setTeamData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchTeam = async () => {
        try {
            const result = await getTeam();

            if (!Array.isArray(result)) {
                console.error("getTeam() did not return an array:", result);
                setTeamData({});
                setLoading(false);
                return;
            }

            const grouped = result.reduce((acc, member) => {
                if (!acc[member.tenure]) acc[member.tenure] = [];
                acc[member.tenure].push(member);
                return acc;
            }, {});

            setTeamData(grouped);
        } catch (error) {
            console.error("Error fetching team:", error);
            setTeamData({});
        } finally {
            setLoading(false);
        }
    };

    fetchTeam();
    window.scrollTo(0, 0);
}, []);

    // 🔥 ORDER: Faculty → Founders → 2024 → Current
    const sections = Object.keys(teamData).sort((a, b) => {
        const getPriority = (tenure) => {
            const t = tenure.toLowerCase();

            if (t.includes("faculty")) return 0;
            if (t.includes("founder")) return 1;
            if (t.includes("2024")) return 2;
            if (t.includes("current")) return 3;

            return 99;
        };

        return getPriority(a) - getPriority(b);
    });

    return (
        <div className="bg-bg min-h-screen">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="container">
                    {/* Tier 3 — page title entrance */}
                    <motion.div
                        className="text-center mb-24"
                        initial={t3Initial}
                        animate={{ opacity: 1, y: 0 }}
                        transition={t3Transition}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-text mb-6">
                            The <span className="text-accent text-glow">Roster</span>
                        </h1>
                        <p className="text-text-muted text-lg max-w-2xl mx-auto uppercase tracking-widest text-xs opacity-70">
                            The collective brilliance that has shaped GFG CAMPUS BODY KARE through the years.
                        </p>
                    </motion.div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                        </div>
                    ) : (
                        <div className="space-y-32">
                            {sections.map((tenure) => {
                                const isFounders = tenure.toLowerCase().includes("founder");

                                return (
                                    <section key={tenure} className="relative">
                                        <div className="flex items-center gap-6 mb-12">
                                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-accent">
    {tenure
        .replace("faculty", "Faculty Coordinators")
        .replace("founders", "Founders (2023–2024)")
        .replace("current", "2025–2026 (Current)")
        .replace("2024–2025", "2024–2025")}
</h2>

                                            <div className="flex-1 h-[1px] bg-secondary/20"></div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                                            {teamData[tenure].map((member, index) => (
                                                // Alternating left/right scroll entry + TiltCard for interactive depth
                                                <TeamCard
                                                    key={member.id}
                                                    initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={t3Viewport}
                                                    transition={{ ...t3Transition, delay: Math.min(index * 0.1, 0.45) }}
                                                >
                                                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-secondary group-hover:border-accent transition-all duration-500">
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="w-full h-full object-cover transition-[transform] duration-500 group-hover:scale-[1.04]"
                                                        />
                                                    </div>

                                                    <h3 className="text-xl font-bold mb-1 text-text group-hover:-translate-y-[3px] transition-transform duration-300">
                                                        {member.name}
                                                    </h3>

                                                    <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium">
                                                        {member.role}
                                                    </p>

                                                    <a
                                                        href={member.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-accent hover:scale-110"
                                                    >
                                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        </svg>
                                                    </a>
                                                </TeamCard>
                                            ))}
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TeamPage;
