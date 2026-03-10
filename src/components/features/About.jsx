import React from "react";
import { motion } from "framer-motion";
import teamImage from "../../assets/heroimage.jpg";
import {
  t2Initial, t2WhileInView, t2Viewport, t2Transition,
  fadeInitial, fadeWhileInView,
} from "../../lib/motionConfig";

const stats = [
  { value: "30+", label: "Events Organized" },
  { value: "4", label: "EE Credits over this Academic Year" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-bg py-16 md:py-20 overflow-hidden"
    >
      {/* Subtle Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Top Label — static, not animated (section label is not the dominant element) */}
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-semibold">
          Our Identity
        </p>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE — Tier 2 dominant entrance (y-displacement) */}
          <motion.div
            initial={t2Initial}
            whileInView={t2WhileInView}
            viewport={t2Viewport}
            transition={t2Transition}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-4 text-text">
              The Apex of <br />
              <span className="text-accent">Campus</span> Innovation
            </h2>

            <p className="text-base md:text-lg text-text-muted leading-relaxed mb-6 max-w-lg">
              We are not merely a student club. We are a structured ecosystem
              built to accelerate technical mastery and leadership development.
              At <span className="text-text font-medium">GFG Campus Body KARE</span>,
              we refine raw potential into industry-ready excellence.
            </p>
          </motion.div>

          {/* RIGHT SIDE IMAGE — opacity-only fade, no y displacement to vary pacing */}
          <motion.div
            initial={fadeInitial}
            whileInView={fadeWhileInView}
            viewport={t2Viewport}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-secondary/20 shadow-[0_0_30px_rgba(0,255,170,0.12)]">

              {/* Controlled Image Height */}
              <img
                src={teamImage}
                alt="GFG KARE Team"
                className="w-full h-[230px] object-contain bg-bg"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row — per-item opacity stagger (0.15s), no shared y-wrapper */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-6 border-t border-secondary/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={fadeInitial}
              whileInView={fadeWhileInView}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.15 }}
            >
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-accent">
                {stat.value}
              </h4>
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
