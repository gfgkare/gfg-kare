import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Events.css';
import WinnersModal from './WinnersModal';
import TiltCard from '../../lib/TiltCard';
import { hoverScale, tapScale } from '../../lib/motionConfig';
import MagneticButton from '../../lib/MagneticButton';
import hackheist from '../../assets/hackheist.jpg';
import nationalSkillup from '../../assets/nationalSkillup.jpg';
import GeekFest from '../../assets/GeekFest.jpg';
import algotussle from '../../assets/algotussle.jpg';
import algorythms from '../../assets/algorythms.jpeg';
import page2stage from '../../assets/page2stage.jpg';
import uidoppleganger from '../../assets/uidoppleganger.jpg';
import algosniff from '../../assets/algosniff.jpg';
import codeblitz from '../../assets/codeblitz.jpg';
import outbreak2k26 from '../../assets/outbreak2k26.png';

const EVENTS_DATA = {
    upcoming: {
        title: "STAY TUNED FOR WHAT'S NEXT",
        date: "COMING SOON, STAY TUNED...",
        description: "We are gearing up for an exciting lineup of technical workshops, competitive hackathons, and skill-building sessions for the upcoming academic tenure. Stay tuned for official announcements!",
        image: null,
        link: "#"
    },
    past2026: [
        {
            id: 110,
            title: "OutBreak'26",
            description: "A 24-Hour Hackathon designed to isolate and amplify elite coding capabilities.",
            image: outbreak2k26,
            linkedin: "https://gfgkare-out-break-26.vercel.app/"
        }
    ],
    past2025: [
        {
            id: 101,
            title: "CodeBlitz|Algorithmist'26",
            description: "An elite challenge environment testing contestants in advanced problem solving, algorithm design, and real-time coding execution",
            image: codeblitz,
            linkedin:"https://www.instagram.com/p/DWff6iDD7EM/?igsh=MTYydDh2ejhmdW52bg=="
        },
        {
            id: 102,
            title: "Algo Sniff|Algorithmist'26",
            description: "An exciting challenge designed to test participants debugging skills and problem-solving abilities",
            image: algosniff,
            linkedin:"https://www.instagram.com/p/DWA81Epjz6d/?igsh=OG41cnBnNnhzdjll"
        },
        {
            id: 103,
            title: "UI-DOPPLE GANGER 2026",
            description: "A frontend design competition that highlighted creativity and UI development skills",
            image: uidoppleganger,
            linkedin: "https://www.instagram.com/p/DV1JeesDxSz/?igsh=MWplZmQzYWJ2YTd1eQ=="
        },
        {
            id: 104,
            title: "Page2Stage|Algorithmist'26",
            description: "Where ideas met algorithms, and the sharpest minds turned logic into innovation",
            image: page2stage,
            linkedin: "https://www.instagram.com/p/DVfQCo_DygF/?igsh=MWlsY2dwa2dnMnA3Zg=="
        },
        {
            id: 105,
            title: "AlgoRythms|Algorithmist'26",
            description: "A structured algorithm mastery challenge",
            image: algorythms,
            linkedin: "https://www.instagram.com/p/DVG598ejzwE/?igsh=MWwzY2M5MTdjYmRtMA=="
        },
        {
            id: 106,
            title: "AlgoTussle|Algorithmist'26",
            description: "A competitive quiz evaluating algorithmic thinking and complexity analysis.",
            image: algotussle,
            linkedin: "https://www.instagram.com/p/DUn43Szjzow/?utm_source=ig_web_copy_link"
        },
        {
            id: 107,
            title: "GeekFest",
            description: "An exciting coding competition designed to test logic and speed.",
            image: GeekFest,
            linkedin: "https://www.instagram.com/p/DQjgSIeD6n2/?igsh=MTVwcjNhMW9hcjF6NA=="
        },
        {
            id: 108,
            title: "HackHeist",
            description: "A 24-hour hackathon focused on building impactful real-world solutions.",
            image: hackheist,
            linkedin: "https://www.instagram.com/p/DPrZpuYj2sp/?igsh=a2R0ZWpxcnU0dmhs"
        },
        {
            id: 109,
            title: "National Skill UP",
            description: "Nationwide campaign for technical upskilling.",
            image: nationalSkillup,
            linkedin: "https://www.instagram.com/p/DOdiaZvjw7A/?igsh=azJxYmRjZTNwMDNo"
        }
    ]
};

const Events = () => {
    const [selectedEventId, setSelectedEventId] = useState(null);
    const scroll2026Ref = useRef(null);
    const scroll2025Ref = useRef(null);

    const scroll = (ref, direction) => {
        if (ref.current) {
            const scrollAmount = 400;
            ref.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const renderFeaturedEvent = ({
        wrapperClass,
        sectionLabel,
        sectionAccentClass,
        event,
        badgeText,
        badgeClass,
        buttonText,
        priorityImage = false
    }) => (
        <div className={wrapperClass}>
            <div className="text-left mb-12">
                <h3 className="text-4xl font-serif"><span className={sectionAccentClass}>{sectionLabel}</span> <span className="text-text">Events</span></h3>
            </div>

            <div className="relative w-full rounded-2xl overflow-hidden border border-secondary/30 group">
                <div className={`grid grid-cols-1 ${event.image ? 'lg:grid-cols-2 lg:min-h-[60vh]' : ''}`}>
                    {event.image && (
                        <div className="relative h-[60vh] lg:h-auto flex items-center justify-center overflow-hidden">
                            <img
                                src={event.image}
                                alt={`${event.title} Poster`}
                                className="w-full h-full object-contain p-4 lg:p-8"
                                decoding="async"
                                loading={priorityImage ? "eager" : "lazy"}
                                fetchPriority={priorityImage ? "high" : "low"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent pointer-events-none"></div>
                        </div>
                    )}

                    <div className={`bg-bg-surface p-6 lg:p-10 flex flex-col justify-center relative ${!event.image ? 'w-full py-12' : ''}`}>

                        <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-widest w-fit mb-6 ${badgeClass}`}>
                            {badgeText}
                        </span>

                        <h3 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tighter text-glow uppercase text-text">
                            {event.title}
                        </h3>
                        <p className="text-accent text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                            {event.date}
                        </p>
                        <p className="text-text-muted text-lg mb-10 leading-relaxed border-l-2 border-secondary pl-6">
                            {event.description}
                        </p>
                        <MagneticButton>
                            <a href={event.link} onClick={(e) => event.link === '#' && e.preventDefault()}>
                                <button className="btn btn-primary self-start">
                                    {buttonText}
                                </button>
                            </a>
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPastSlider = (eventsList, scrollRef, sublabel, titleText) => (
        <div className="mb-16">
            <div className="text-left mb-12">
                <h2 className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-2">{sublabel}</h2>
                <h3 className="text-4xl font-serif">
                    <span className="text-red-500">Past</span>{" "}
                    <span className="text-white">{titleText}</span>
                </h3>
            </div>

            <div className="relative group/slider">
                <motion.button
                    onClick={() => scroll(scrollRef, 'left')}
                    className="hidden md:flex absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-secondary bg-bg/80 backdrop-blur-sm items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all z-20 opacity-0 group-hover/slider:opacity-100 shadow-lg"
                    whileHover={hoverScale}
                    whileTap={tapScale}
                    aria-label="Previous Events"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>

                <motion.button
                    onClick={() => scroll(scrollRef, 'right')}
                    className="hidden md:flex absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-secondary bg-bg/80 backdrop-blur-sm items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all z-20 opacity-0 group-hover/slider:opacity-100 shadow-lg"
                    whileHover={hoverScale}
                    whileTap={tapScale}
                    aria-label="Next Events"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                >
                    {eventsList.map((event) => (
                        <TiltCard
                            key={event.id}
                            className="min-w-[85vw] md:min-w-[400px] snap-center bg-bg-surface border border-secondary/30 rounded-xl overflow-hidden flex flex-col group hover:border-accent/50 transition-colors duration-300"
                        >
                            <div className="h-48 relative overflow-hidden bg-secondary/10">
                                {typeof event.image === 'string' && event.image.startsWith('bg-') ? (
                                    <div className={`absolute inset-0 ${event.image}`}></div>
                                ) : (
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                                        decoding="async"
                                        loading="lazy"
                                        fetchPriority="low"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="inline-block px-4 py-2 bg-bg/80 backdrop-blur-md border-l-4 border-accent rounded-r-lg">
                                        <h4 className="text-lg md:text-l font-bold text-white font-serif tracking-wide">{event.title}</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <p className="text-text-muted text-sm mb-8 flex-1 opacity-80">{event.description}</p>

                                <div className="flex gap-4 mt-8">
                                    <a
                                        href={event.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 text-xs font-bold uppercase tracking-wider border border-secondary text-text rounded-full hover:bg-secondary hover:text-white transition-all text-center"
                                    >
                                        Visit Site
                                    </a>

                                    <button
                                        onClick={() => setSelectedEventId(event.id)}
                                        className="flex-1 py-3 text-xs font-bold uppercase tracking-wider bg-secondary/10 text-accent border border-secondary rounded-full hover:bg-accent hover:text-bg hover:border-accent transition-all"
                                    >
                                        View Winners
                                    </button>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section id="events" className="py-3 md:py-6">
            <div className="container">

                {/* --- UPCOMING EVENT SECTION --- */}
                <div className="mb-16">
                    {renderFeaturedEvent({
                        wrapperClass: 'upcoming-event',
                        sectionLabel: 'Upcoming',
                        sectionAccentClass: 'text-yellow-500',
                        event: EVENTS_DATA.upcoming,
                        badgeText: 'Announcements',
                        badgeClass: 'border border-yellow-500/40 text-yellow-500',
                        buttonText: 'Stay Tuned',
                        priorityImage: false
                    })}
                </div>

                {/* --- 2026-2027 PAST EVENTS --- */}
                {renderPastSlider(EVENTS_DATA.past2026, scroll2026Ref, "2026–2027 Mission Logs", "Events (2026–2027)")}

                {/* --- 2025-2026 PAST EVENTS --- */}
                {renderPastSlider(EVENTS_DATA.past2025, scroll2025Ref, "2025–2026 Mission Logs", "Events (2025–2026)")}

            </div>

            <AnimatePresence>
                {selectedEventId && (
                    <WinnersModal
                        key={selectedEventId}
                        eventId={selectedEventId}
                        onClose={() => setSelectedEventId(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Events;



