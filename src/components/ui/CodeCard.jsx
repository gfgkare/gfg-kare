import React from 'react';
import { motion } from 'framer-motion';
import { t3Transition } from '../../lib/motionConfig';

const CodeCard = () => {
    return (
        // Tier 3 — light x-entrance; rotate handled by animate
        <motion.div
            initial={{ opacity: 0, x: 30, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ ...t3Transition, delay: 0.3 }}
            className="relative w-[400px] h-[280px] bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{
                transform: 'rotate(3deg)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
        >
            {/* Terminal Header */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm bg-white">
                <div className="space-y-2">
                    <div className="text-gray-600">
                        <span className="text-purple-600">function</span>{' '}
                        <span className="text-blue-600">solveProblem</span>
                        <span className="text-gray-800">{'() {'}</span>
                    </div>
                    <div className="pl-4 text-gray-600">
                        <span className="text-purple-600">if</span>{' '}
                        <span className="text-gray-800">(!problemIsSolved) {'{'}</span>
                    </div>
                    <div className="pl-8 text-gray-500">
                        <span className="text-gray-600">// Apply logic</span>
                    </div>
                    <div className="pl-8 text-gray-600">
                        <span className="text-blue-600">think</span>
                        <span className="text-gray-800">(problem);</span>
                    </div>
                    <div className="pl-8 text-gray-600">
                        <span className="text-blue-600">code</span>
                        <span className="text-gray-800">(solution);</span>
                    </div>
                    <div className="pl-8 text-gray-600">
                        <span className="text-purple-600">return</span>{' '}
                        <span className="text-orange-500">SUCCESS</span>
                        <span className="text-gray-800">;</span>
                    </div>
                    <div className="pl-4 text-gray-800">{'}'}</div>
                    <div className="text-gray-800">{'}'}</div>
                </div>
            </div>

            {/* Green Arrow Accent */}
            <div className="absolute bottom-4 right-4">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent"
                >
                    <path
                        d="M13 7L18 12M18 12L13 17M18 12H6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </motion.div>
    );
};

export default CodeCard;
