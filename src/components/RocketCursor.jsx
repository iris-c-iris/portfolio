// src/components/RocketCursor.jsx
import React, { useEffect, useRef } from 'react';

const RocketCursor = () => {
    const rocketRef = useRef(null);
    const trailContainer = useRef(null);

    useEffect(() => {
        if (!rocketRef.current || !trailContainer.current) return;

        const rocket = rocketRef.current;
        const trail = trailContainer.current;

        let mouseX = 0;
        let mouseY = 0;
        let rocketX = 0;
        let rocketY = 0;

        // Mouse position update
        const updateMousePosition = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        // Rocket position update (with smooth following)
        const updateRocketPosition = () => {
            // Calculate the distance between current position and target
            const dx = mouseX - rocketX;
            const dy = mouseY - rocketY;

            // Update rocket position with easing
            rocketX += dx * 0.1;
            rocketY += dy * 0.1;

            // Calculate angle for rotation
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);

            // Apply new position and rotation
            rocket.style.left = `${rocketX}px`;
            rocket.style.top = `${rocketY}px`;
            rocket.style.transform = `rotate(${angle + 45}deg) translate(-50%, -50%)`;

            // Generate trail particles when moving
            if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                createTrailParticle(rocketX, rocketY, angle);
            }

            requestAnimationFrame(updateRocketPosition);
        };

        // Create trail particle
        const createTrailParticle = (x, y, angle) => {
            if (Math.random() > 0.3) return; // Only create particles sometimes

            const particle = document.createElement('div');
            particle.className = 'particle';

            // Random size
            const size = Math.random() * 5 + 3;

            // Random color hue
            const hue = Math.random() * 30 + 15; // Orange to yellowish

            // Calculate offset position behind rocket
            const rad = (angle - 135) * (Math.PI / 180);
            const offsetX = Math.cos(rad) * 10;
            const offsetY = Math.sin(rad) * 10;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x + offsetX}px`;
            particle.style.top = `${y + offsetY}px`;
            particle.style.backgroundColor = `hsla(${hue}, 100%, 60%, 0.8)`;

            trail.appendChild(particle);

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 1000);
        };

        window.addEventListener('mousemove', updateMousePosition);
        updateRocketPosition();

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <>
            <div ref={trailContainer} className="trail-container"></div>
            <div ref={rocketRef} className="rocket-cursor">
                <svg
                    className="rocket"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#ffffff"
                        d="M12,2.5c0,0,4.5,2.04,4.5,10.5c0,2.49-1.04,5.57-1.6,7H9.1c-0.56-1.43-1.6-4.51-1.6-7C7.5,4.54,12,2.5,12,2.5z"
                    />
                    <path
                        fill="#ff6a00"
                        d="M12,2.5c0,0-4.5,2.04-4.5,10.5c0,2.49,1.04,5.57,1.6,7h1.9c-0.56-1.43-0.6-4.51-0.6-7C10.4,10,12,2.5,12,2.5z"
                    />
                    <path
                        fill="#ff0000"
                        d="M9,20l3,3l3-3H9z"
                    />
                    <path
                        fill="#ffcc00"
                        d="M11.5,20.5c0,0-1.5,1-1.5,3h4c0-2-1.5-3-1.5-3H11.5z"
                    />
                </svg>
            </div>
        </>
    );
};

export default RocketCursor;