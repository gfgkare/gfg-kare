import React from 'react';
import { motion } from 'framer-motion';
import { hoverScale, tapScale } from '../../lib/motionConfig';

const Footer = () => {
    const coordinators = {
        student: [
            { name: "L Harsha Vardhan", phone: "+91 9100550609" },
            { name: "P Harshika Suryanjali", phone: "+91 9502795034" },
            { name: "Harpreet Singh", phone: "+91 7367991695" }
        ],
        faculty: [
            { name: "Dr. R. Raja Sekar", role: "Assistant Professor / CSE" },
            { name: "Mrs. S. Reshni", role: "Assistant Professor / CSE" }
        ]
    };


    const socialLinks = [
        { name: 'Instagram', url: 'https://www.instagram.com/gfg_campus_body_kare?igsh=MWRrazdtOHBueHdvYw==', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.225.144 4.737 1.633 4.881 4.859.058 1.266.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.85-.144 3.225-1.633 4.737-4.859 4.881-1.266.058-1.645.069-4.849.069-3.204 0-3.584-.012-4.85-.07-3.225-.144-4.737-1.633-4.881-4.859-.058-1.266-.069-1.645-.069-4.849 0-3.204.012-3.584.07-4.85.144-3.225 1.633-4.737 4.859-4.881 1.266-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/gfg-kare-student-chapter/posts/?feedView=all', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
        {
            name: 'WhatsApp',
            url: 'https://chat.whatsapp.com/I3cvQ5036WP2ug9pOdX7nl',
            icon: 'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.399.636-1.155 4.218 4.319-1.133.58.346z'
        },
        {
            name: 'Mail',
            url: 'mailto:gfgkarestudentchapter@klu.ac.in',
            icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'
        }

    ];

    return (
        <footer id="footer" className="bg-bg text-text-muted border-t border-secondary/20 pt-20 pb-8 relative overflow-hidden">
            {/* Subtle SEO-friendly hidden H2 for heading hierarchy */}
            <h2 className="sr-only">GFG Campus Body KARE</h2>

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">

                    {/* Brand Section — Tier 4: no scroll-triggered animation */}
                    <div className="lg:col-span-1">
                        <h3 className="text-accent font-serif text-2xl font-bold mb-6 tracking-tight">
                            GFG Campus Body KARE
                        </h3>
                        <p className="text-sm leading-relaxed mb-8 max-w-xs opacity-70">
                            A student-driven technical community nurturing future leaders through coding excellence, innovation, and peer collaboration.
                        </p>

                    </div>

                    {/* Student Coordinators */}
                    <div>
                        <h4 className="text-accent font-serif text-lg font-medium mb-6">Student Leadership</h4>
                        <ul className="space-y-4">
                            {coordinators.student.map((student, idx) => (
                                <li
                                    key={idx}
                                    className="text-sm opacity-80 flex justify-between items-start gap-4 group"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-accent transition-colors"></span>
                                        <span>{student.name}</span>
                                    </div>
                                    <span className="text-xs opacity-60 whitespace-nowrap">
                                        {student.phone}
                                    </span>
                                </li>
                            ))}

                        </ul>
                    </div>

                    {/* Faculty Coordinators */}
                    <div>
                        <h4 className="text-accent font-serif text-lg font-medium mb-6">Faculty Council</h4>
                        <ul className="space-y-4">
                            {coordinators.faculty.map((faculty, idx) => (
                                <li key={idx} className="text-sm opacity-80 group">
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-accent transition-colors"></span>
                                        <span>{faculty.name}</span>
                                    </div>
                                    <div className="text-xs opacity-60 ml-4 mt-1">
                                        {faculty.role}
                                    </div>
                                </li>
                            ))}

                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h4 className="text-accent font-serif text-lg font-medium mb-6">Connect</h4>
                        <div className="flex gap-4 mb-8">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-secondary/50 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent group transition-all duration-300"
                                    whileHover={hoverScale}
                                    whileTap={tapScale}
                                    aria-label={social.name}
                                >
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                                        <path d={social.icon} />
                                    </svg>
                                </motion.a>
                            ))}
                        </div>

                    </div>

                </div>
                {/* Bottom Bar */}
                <div className="pt-12 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-70">
                        © {new Date().getFullYear()} GFG CAMPUS BODY KARE. ALL RIGHTS RESERVED.
                    </p>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
