// src/components/AnimatedPlanet.jsx
import React, { useEffect, useRef, useState } from 'react';

const AnimatedPlanet = () => {
    const planetRef = useRef(null);
    const [developmentStage, setDevelopmentStage] = useState(0);

    // Progress development stages over time
    useEffect(() => {
        const totalStages = 5;
        const timePerStage = 15000; // 15 seconds per stage

        // Advance to the next development stage every timePerStage milliseconds
        const developmentInterval = setInterval(() => {
            setDevelopmentStage(prevStage => {
                const nextStage = prevStage + 1;
                return nextStage < totalStages ? nextStage : prevStage;
            });
        }, timePerStage);

        return () => clearInterval(developmentInterval);
    }, []);

    return (
        <div className="planet-container relative w-96 h-96 mx-auto">
            {/* Cosmic background glow */}
            <div className="absolute inset-0 rounded-full cosmic-glow"></div>

            <div className="absolute inset-0 rounded-full overflow-hidden bg-[#0d1925] advanced-glow">
                <svg
                    ref={planetRef}
                    className="w-full h-full planet-rotation"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Stars in background */}
                    {Array.from({ length: 30 }).map((_, i) => (
                        <circle
                            key={`star-${i}`}
                            cx={Math.random() * 500}
                            cy={Math.random() * 500}
                            r={Math.random() * 1.5}
                            fill="#ffffff"
                            className="background-star"
                            style={{
                                animationDelay: `${Math.random() * 5}s`,
                                opacity: Math.random() * 0.8 + 0.2
                            }}
                        />
                    ))}

                    {/* Base Planet */}
                    <circle cx="250" cy="250" r="200" fill="url(#planetGradient)" className="base-planet" />

                    {/* Craters and surface details */}
                    <circle cx="150" cy="180" r="15" fill="url(#craterGradient1)" opacity="0.3" />
                    <circle cx="320" cy="140" r="10" fill="url(#craterGradient2)" opacity="0.4" />
                    <circle cx="370" cy="300" r="20" fill="url(#craterGradient1)" opacity="0.3" />
                    <circle cx="200" cy="350" r="18" fill="url(#craterGradient2)" opacity="0.4" />

                    {/* Ocean Areas - More detailed and visually interesting */}
                    <path
                        d="M100,220 C140,190 190,200 240,180 C290,160 340,180 400,220 C440,240 440,300 400,340 C360,380 300,385 250,390 C200,395 150,390 120,350 C90,310 80,260 100,220 Z"
                        fill="url(#oceanGradient)"
                        opacity="0.85"
                        className="ocean-waves"
                    />
                    <path
                        d="M80,280 C90,300 120,320 180,310 C230,302 270,295 310,310 C350,325 380,340 390,370 C400,400 380,420 350,430 C310,442 270,445 230,440 C190,435 150,425 120,400 C90,375 70,335 80,280 Z"
                        fill="url(#oceanGradient2)"
                        opacity="0.75"
                        className="ocean-waves"
                    />

                    {/* Land Masses - More detailed with variations */}
                    <g className="land-masses">
                        {/* Main Landmass - Larger continent */}
                        <path
                            d="M180,90 C220,70 270,65 320,60 C370,55 410,70 430,120 C450,170 445,220 420,260 C395,300 350,320 300,330 C250,340 200,335 160,310 C120,285 100,230 110,180 C120,130 140,110 180,90 Z"
                            fill="url(#landGradient)"
                            className="continent"
                        />

                        {/* Secondary Landmass - Archipelago looking */}
                        <path
                            d="M140,350 C160,335 190,330 220,335 C250,340 270,355 290,370 C310,385 325,400 320,420 C315,440 290,455 260,460 C230,465 200,460 175,440 C150,420 120,365 140,350 Z"
                            fill="url(#landGradient2)"
                            className="continent"
                        />

                        {/* Island chains */}
                        <circle cx="380" cy="240" r="25" fill="url(#landGradient)" className="island" />
                        <circle cx="400" cy="285" r="15" fill="url(#landGradient2)" className="island" />
                        <circle cx="130" cy="270" r="20" fill="url(#landGradient)" className="island" />
                        <circle cx="180" cy="230" r="12" fill="url(#landGradient2)" className="island" />
                    </g>

                    {/* Ring around the planet */}
                    <ellipse cx="250" cy="250" rx="240" ry="60" fill="none" stroke="url(#ringGradient)" strokeWidth="8" opacity="0.7" transform="rotate(-15, 250, 250)" className="planet-ring" />

                    {/* City Lights - Development Stage 0 (Initial) */}
                    <g className={`city-lights-stage-0 ${developmentStage >= 0 ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Small settlements */}
                        <circle cx="230" cy="120" r="3" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="320" cy="150" r="2" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="190" cy="220" r="2" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="280" cy="350" r="3" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="340" cy="370" r="2" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="380" cy="240" r="2" fill="#ffcc00" className="city-light twinkle-slow" />
                    </g>

                    {/* City Lights - Development Stage 1 */}
                    <g className={`city-lights-stage-1 ${developmentStage >= 1 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                        {/* Growing settlements */}
                        <circle cx="250" cy="140" r="3" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="300" cy="130" r="4" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="210" cy="180" r="3" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="360" cy="170" r="3" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="220" cy="360" r="2" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="270" cy="390" r="3" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="400" cy="285" r="2" fill="#ffcc00" className="city-light twinkle-slow" />
                        <circle cx="130" cy="270" r="2.5" fill="#ffcc00" className="city-light twinkle-slow" />

                        {/* Small connecting roads */}
                        <line x1="230" y1="120" x2="250" y2="140" stroke="#ffcc00" strokeWidth="0.8" strokeOpacity="0.6" />
                        <line x1="300" y1="130" x2="320" y2="150" stroke="#ffcc00" strokeWidth="0.8" strokeOpacity="0.6" />
                        <line x1="210" y1="180" x2="190" y2="220" stroke="#ffcc00" strokeWidth="0.8" strokeOpacity="0.6" />
                        <line x1="380" y1="240" x2="400" y2="285" stroke="#ffcc00" strokeWidth="0.8" strokeOpacity="0.6" />
                    </g>

                    {/* City Lights - Development Stage 2 */}
                    <g className={`city-lights-stage-2 ${developmentStage >= 2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                        {/* Cities forming */}
                        <circle cx="270" cy="150" r="5" fill="rgba(255, 204, 0, 0.8)" className="city-light glow-effect twinkle-slow" />
                        <circle cx="350" cy="190" r="4" fill="rgba(255, 204, 0, 0.8)" className="city-light glow-effect twinkle-slow" />
                        <circle cx="230" cy="230" r="4" fill="rgba(255, 204, 0, 0.8)" className="city-light glow-effect twinkle-slow" />
                        <circle cx="290" cy="380" r="5" fill="rgba(255, 204, 0, 0.8)" className="city-light glow-effect twinkle-slow" />
                        <circle cx="380" cy="250" r="6" fill="rgba(255, 204, 0, 0.8)" className="city-light glow-effect twinkle-slow" />

                        {/* More connecting roads */}
                        <line x1="250" y1="140" x2="270" y2="150" stroke="#ffcc00" strokeWidth="1" strokeOpacity="0.7" />
                        <line x1="270" y1="150" x2="300" y2="130" stroke="#ffcc00" strokeWidth="1" strokeOpacity="0.7" />
                        <line x1="320" y1="150" x2="350" y2="190" stroke="#ffcc00" strokeWidth="1" strokeOpacity="0.7" />
                        <line x1="210" y1="180" x2="230" y2="230" stroke="#ffcc00" strokeWidth="1" strokeOpacity="0.7" />
                        <line x1="280" y1="350" x2="290" y2="380" stroke="#ffcc00" strokeWidth="1" strokeOpacity="0.7" />
                        <line x1="270" y1="390" x2="290" y2="380" stroke="#ffcc00" strokeWidth="1" strokeOpacity="0.7" />
                        <line x1="360" y1="170" x2="380" y2="250" stroke="#ffcc00" strokeWidth="1" strokeOpacity="0.7" />
                        <line x1="350" y1="190" x2="380" y2="250" stroke="#ffcc00" strokeWidth="1" strokeOpacity="0.7" />
                    </g>

                    {/* City Lights - Development Stage 3 */}
                    <g className={`city-lights-stage-3 ${developmentStage >= 3 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                        {/* Major cities and trade center */}
                        <circle cx="280" cy="160" r="8" fill="rgba(255, 220, 150, 0.9)" className="city-light major-city glow-effect twinkle-slow" />
                        <circle cx="350" cy="200" r="6" fill="rgba(255, 220, 150, 0.9)" className="city-light major-city glow-effect twinkle-slow" />
                        <circle cx="230" cy="240" r="7" fill="rgba(255, 220, 150, 0.9)" className="city-light major-city glow-effect twinkle-slow" />
                        <circle cx="380" cy="260" r="9" fill="rgba(255, 220, 150, 0.9)" className="city-light major-city glow-effect twinkle-slow" />

                        {/* Trade port */}
                        <circle cx="290" cy="400" r="10" fill="rgba(200, 230, 255, 0.9)" className="city-light spaceport glow-effect twinkle-slow" />

                        {/* City networks */}
                        <path d="M280,160 Q320,170 350,200" stroke="#ffdd99" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
                        <path d="M280,160 Q250,200 230,240" stroke="#ffdd99" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
                        <path d="M230,240 Q260,300 290,400" stroke="#ffdd99" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
                        <path d="M350,200 Q330,300 290,400" stroke="#ffdd99" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
                        <path d="M350,200 Q370,230 380,260" stroke="#ffdd99" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
                        <path d="M380,260 Q335,330 290,400" stroke="#ffdd99" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
                    </g>

                    {/* City Lights - Development Stage 4 (Most Advanced) */}
                    <g className={`city-lights-stage-4 ${developmentStage >= 4 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                        {/* Megacity complexes */}
                        <path d="M270,150 Q300,140 330,160 Q350,180 340,210 Q320,230 290,220 Q270,210 260,190 Q260,160 270,150 Z"
                              fill="rgba(255, 255, 200, 0.2)" stroke="rgba(255, 230, 150, 0.8)" strokeWidth="1" className="megacity" />

                        <path d="M220,230 Q240,220 260,230 Q270,250 260,270 Q240,280 220,270 Q210,250 220,230 Z"
                              fill="rgba(255, 255, 200, 0.2)" stroke="rgba(255, 230, 150, 0.8)" strokeWidth="1" className="megacity" />

                        <path d="M370,250 Q390,240 410,260 Q420,280 400,295 Q380,305 360,290 Q350,270 370,250 Z"
                              fill="rgba(255, 255, 200, 0.2)" stroke="rgba(255, 230, 150, 0.8)" strokeWidth="1" className="megacity" />

                        {/* Advanced trade port with launchpads */}
                        <circle cx="290" cy="400" r="15" fill="rgba(180, 220, 255, 0.3)" stroke="rgba(200, 230, 255, 0.9)" strokeWidth="1.5" className="spaceport-complex" />

                        {/* Orbital station */}
                        <circle cx="180" cy="160" r="5" fill="rgba(220, 240, 255, 0.8)" stroke="#ffffff" strokeWidth="0.5" className="orbital-station" />

                        {/* Spaceships */}
                        <g className="spaceship-1 animate-launch-1">
                            <circle cx="290" cy="380" r="1.5" fill="#ffffff" />
                            <path d="M290,378 L291,382 L289,382 Z" fill="#77aaff" />
                        </g>

                        <g className="spaceship-2 animate-launch-2">
                            <circle cx="300" cy="390" r="1.5" fill="#ffffff" />
                            <path d="M300,388 L301,392 L299,392 Z" fill="#77aaff" />
                        </g>

                        <g className="spaceship-3 animate-orbit">
                            <circle cx="350" cy="150" r="1" fill="#ffffff" />
                            <path d="M350,149 L351,151 L349,151 Z" fill="#aaddff" />
                        </g>

                        <g className="spaceship-4 animate-orbit-2">
                            <circle cx="220" cy="320" r="1.2" fill="#ffffff" />
                            <path d="M220,318 L221.5,322 L218.5,322 Z" fill="#aaddff" />
                        </g>

                        {/* Laser defense system shots */}
                        <line x1="270" y1="150" x2="250" y2="100" stroke="rgba(0, 255, 200, 0.6)" strokeWidth="0.8" className="laser-shot-1" />
                        <line x1="380" y1="260" x2="420" y2="230" stroke="rgba(0, 255, 200, 0.6)" strokeWidth="0.8" className="laser-shot-2" />

                        {/* Advanced transportation network */}
                        <path d="M280,160 Q310,170 350,200 Q340,230 320,250 Q270,270 230,240 Q240,200 280,160"
                              stroke="rgba(255, 230, 150, 0.9)" strokeWidth="1" fill="none" strokeDasharray="2,1" className="advanced-network" />

                        <path d="M230,240 Q240,300 260,350 Q280,380 290,400"
                              stroke="rgba(255, 230, 150, 0.9)" strokeWidth="1" fill="none" strokeDasharray="2,1" className="advanced-network" />

                        <path d="M350,200 Q330,250 320,300 Q310,350 290,400"
                              stroke="rgba(255, 230, 150, 0.9)" strokeWidth="1" fill="none" strokeDasharray="2,1" className="advanced-network" />

                        <path d="M350,200 Q360,230 380,260"
                              stroke="rgba(255, 230, 150, 0.9)" strokeWidth="1" fill="none" strokeDasharray="2,1" className="advanced-network" />
                    </g>

                    {/* Clouds layer */}
                    <g className="clouds">
                        <path d="M200,120 Q230,100 260,110 Q280,120 260,130 Q230,140 200,120 Z" fill="rgba(255, 255, 255, 0.3)" className="cloud cloud-1" />
                        <path d="M340,200 Q370,190 390,210 Q400,230 380,240 Q350,250 340,200 Z" fill="rgba(255, 255, 255, 0.25)" className="cloud cloud-2" />
                        <path d="M180,300 Q200,290 220,300 Q230,310 210,320 Q190,330 180,300 Z" fill="rgba(255, 255, 255, 0.2)" className="cloud cloud-3" />
                    </g>

                    {/* Atmosphere Glow */}
                    <circle cx="250" cy="250" r="205" fill="url(#atmosphereGlow)" className="atmosphere" />

                    {/* Satellites orbiting */}
                    <circle cx="150" cy="120" r="1" fill="white" className="satellite-1" />
                    <circle cx="400" cy="320" r="1" fill="white" className="satellite-2" />

                    {/* Shooting stars occasionally */}
                    <line x1="100" y1="80" x2="150" y2="120" stroke="white" strokeWidth="1" className="shooting-star-1" />
                    <line x1="350" y1="450" x2="300" y2="410" stroke="white" strokeWidth="1" className="shooting-star-2" />

                    {/* Gradients Definitions */}
                    <defs>
                        <radialGradient id="planetGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="#1a3653" />
                            <stop offset="70%" stopColor="#102437" />
                            <stop offset="100%" stopColor="#0a1824" />
                        </radialGradient>

                        <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#1e40af" />
                        </linearGradient>

                        <linearGradient id="oceanGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="#1e3a8a" />
                        </linearGradient>

                        <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#84cc16" />
                            <stop offset="100%" stopColor="#4d7c0f" />
                        </linearGradient>

                        <linearGradient id="landGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#65a30d" />
                            <stop offset="100%" stopColor="#3f6212" />
                        </linearGradient>

                        <radialGradient id="atmosphereGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="85%" stopColor="transparent" />
                            <stop offset="95%" stopColor="rgba(56, 189, 248, 0.2)" />
                            <stop offset="100%" stopColor="rgba(56, 189, 248, 0.3)" />
                        </radialGradient>

                        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(220, 220, 255, 0.1)" />
                            <stop offset="20%" stopColor="rgba(220, 220, 255, 0.3)" />
                            <stop offset="50%" stopColor="rgba(220, 220, 255, 0.5)" />
                            <stop offset="80%" stopColor="rgba(220, 220, 255, 0.3)" />
                            <stop offset="100%" stopColor="rgba(220, 220, 255, 0.1)" />
                        </linearGradient>

                        <radialGradient id="craterGradient1" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#1c456e" />
                            <stop offset="100%" stopColor="#0f2942" />
                        </radialGradient>

                        <radialGradient id="craterGradient2" cx="40%" cy="40%" r="60%">
                            <stop offset="0%" stopColor="#1c4e6e" />
                            <stop offset="100%" stopColor="#0f2f42" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            {/* Day/Night Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-rgba(0,0,15,0.8) rounded-full mix-blend-multiply night-side"></div>

            {/* Floating spacecraft around planet */}
            <div className="absolute w-4 h-2 bg-gray-200 rounded-full top-1/4 -right-2 animate-float spaceship-float">
                <div className="w-1 h-1 bg-blue-400 rounded-full absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 engine-glow"></div>
            </div>

            <div className="absolute w-3 h-1.5 bg-gray-300 rounded-full bottom-1/3 -left-1 animate-float-reverse spaceship-float-2">
                <div className="w-0.5 h-0.5 bg-blue-400 rounded-full absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 engine-glow"></div>
            </div>
        </div>
    );
};

export default AnimatedPlanet;