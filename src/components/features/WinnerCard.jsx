import React, { useState } from 'react';
import TiltCard from '../../lib/TiltCard';

/**
 * TeamPhotoArea
 * Renders the provided team image or a sleek, high-tech placeholder matching the GFG KARE design language.
 */
const TeamPhotoArea = ({ image, teamName, altText, rankNumber }) => {
  const [imageError, setImageError] = useState(false);

  const getRankGlow = () => {
    switch (rankNumber) {
      case 1:
        return 'from-accent/20 via-amber-500/10 to-transparent';
      case 2:
        return 'from-slate-300/20 via-sky-400/10 to-transparent';
      case 3:
        return 'from-amber-600/20 via-amber-800/10 to-transparent';
      default:
        return 'from-secondary/20 to-transparent';
    }
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  if (image && !imageError) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-bg/80 border border-secondary/20 mb-5">
        <img
          src={image}
          alt={altText || `${teamName} group photo`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/80 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  // Consistent high-tech placeholder for missing team photos
  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-gradient-to-br ${getRankGlow()} bg-bg/90 border border-secondary/30 flex flex-col items-center justify-center p-4 mb-5 transition-all duration-300 group-hover:border-accent/40`}
      aria-label={`${teamName} Team Photo placeholder`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,135,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Cyberpunk grid overlay lines */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-secondary/20 border border-accent/30 flex items-center justify-center text-accent font-mono font-bold text-lg mb-2 shadow-[0_0_15px_rgba(0,255,135,0.15)] group-hover:scale-105 transition-transform">
          {getInitials(teamName)}
        </div>
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-text-muted">
          Team Photo
        </span>
        <span className="text-[11px] font-mono text-accent/80 mt-1 max-w-[180px] truncate">
          {teamName}
        </span>
      </div>
    </div>
  );
};

/**
 * WinnerCard
 * Renders an official HackOdyssey 4.0 Winner card (Overall or SDG track)
 */
const WinnerCard = ({ team, isOverall = false }) => {
  const {
    teamName,
    badge,
    rankNumber,
    college,
    program,
    department,
    members = [],
    image,
    sdg
  } = team;

  // Rank-based badge and border styling
  const getRankTheme = () => {
    switch (rankNumber) {
      case 1:
        return {
          border: 'border-accent/40 hover:border-accent shadow-[0_0_25px_rgba(0,255,135,0.08)]',
          badgeBg: 'bg-accent/15 border-accent text-accent',
          pillBg: 'bg-accent/10 border-accent/30 text-white',
          glow: 'from-accent/10',
          trophy: '🥇'
        };
      case 2:
        return {
          border: 'border-slate-400/40 hover:border-slate-300 shadow-[0_0_25px_rgba(203,213,225,0.08)]',
          badgeBg: 'bg-slate-400/15 border-slate-300 text-slate-200',
          pillBg: 'bg-slate-400/10 border-slate-400/30 text-white',
          glow: 'from-slate-400/10',
          trophy: '🥈'
        };
      case 3:
        return {
          border: 'border-amber-600/40 hover:border-amber-500 shadow-[0_0_25px_rgba(217,119,6,0.08)]',
          badgeBg: 'bg-amber-600/15 border-amber-500 text-amber-300',
          pillBg: 'bg-amber-600/10 border-amber-600/30 text-white',
          glow: 'from-amber-600/10',
          trophy: '🥉'
        };
      default:
        return {
          border: 'border-secondary/40 hover:border-secondary',
          badgeBg: 'bg-secondary/20 border-secondary text-text-muted',
          pillBg: 'bg-secondary/10 border-secondary/30 text-white',
          glow: 'from-secondary/10',
          trophy: '🏆'
        };
    }
  };

  const theme = getRankTheme();

  return (
    <TiltCard
      className={`group relative flex flex-col justify-between bg-bg-surface/90 border ${theme.border} rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm overflow-hidden`}
    >
      {/* Subtle top corner ambient glow */}
      <div
        className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${theme.glow} to-transparent rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
      />

      <div>
        {/* Card Header: Position Badge & Category */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider border ${theme.badgeBg}`}
          >
            <span>{theme.trophy}</span>
            <span>{team.position || badge}</span>
          </span>

          {sdg && (
            <span className="text-[11px] font-mono tracking-wider text-text-muted uppercase bg-secondary/15 px-2.5 py-0.5 rounded border border-secondary/20">
              SDG {sdg}
            </span>
          )}

          {isOverall && (
            <span className="text-[11px] font-mono tracking-wider text-accent uppercase bg-accent/10 px-2.5 py-0.5 rounded border border-accent/20">
              Overall Winner
            </span>
          )}
        </div>

        {/* Group Photo / Placeholder */}
        <TeamPhotoArea
          image={image}
          teamName={teamName}
          altText={`${teamName} winning team photo`}
          rankNumber={rankNumber}
        />

        {/* Team Title */}
        <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight mb-2 group-hover:text-accent transition-colors">
          {teamName}
        </h3>

        {/* College / Institution */}
        <p className="text-sm font-medium text-accent mb-4 line-clamp-2 leading-snug">
          {college}
        </p>

        {/* Department & Program Info Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {program && (
            <span className="text-xs bg-bg/80 text-text-muted px-2.5 py-1 rounded-md border border-secondary/30 font-medium">
              {program}
            </span>
          )}
          {department && (
            <span className="text-xs bg-bg/80 text-text px-2.5 py-1 rounded-md border border-secondary/30 font-medium">
              Dept: <span className="text-accent/90">{department}</span>
            </span>
          )}
        </div>
      </div>

      {/* Team Members Roster */}
      <div className="pt-4 border-t border-secondary/20">
        <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-text-muted font-semibold mb-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span>Team Members ({members.length})</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {members.map((member, idx) => (
            <span
              key={idx}
              className={`text-xs px-2.5 py-1 rounded-full border ${theme.pillBg} transition-colors`}
            >
              {member}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
};

export default WinnerCard;
