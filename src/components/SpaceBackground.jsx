// src/components/SpaceBackground.jsx
import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
    const spaceRef = useRef(null);

    useEffect(() => {
        if (!spaceRef.current) return;

        const container = spaceRef.current;
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;

        // Create regular stars
        for (let i = 0; i < 200; i++) {
            createStar(container, containerWidth, containerHeight);
        }

        // Create shooting stars at intervals
        const shootingStarInterval = setInterval(() => {
            createShootingStar(container, containerWidth, containerHeight);
        }, 2000);

        return () => {
            clearInterval(shootingStarInterval);
            container.innerHTML = '';
        };
    }, []);

    const createStar = (container, width, height) => {
        const star = document.createElement('div');
        star.className = 'star';

        // Random position
        const x = Math.random() * width;
        const y = Math.random() * height;

        // Random size (0.5px to 3px)
        const size = Math.random() * 2.5 + 0.5;

        // Random opacity
        const opacity = Math.random() * 0.8 + 0.2;
        const opacityHalf = opacity / 2;

        // Random duration (3s to 8s)
        const duration = Math.random() * 5 + 3 + 's';

        // Random delay
        const delay = Math.random() * 8 + 's';

        // Apply styles
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--opacity', opacity);
        star.style.setProperty('--opacity-half', opacityHalf);
        star.style.setProperty('--duration', duration);
        star.style.setProperty('--delay', delay);

        container.appendChild(star);
    };

    const createShootingStar = (container, width, height) => {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';

        // Random starting position (always from top half of screen)
        const startX = Math.random() * width;
        const startY = Math.random() * (height / 2);

        // Random ending position (going down and to the right or left)
        const direction = Math.random() > 0.5 ? 1 : -1;
        const endX = startX + (direction * (Math.random() * 500 + 200));
        const endY = startY + (Math.random() * 500 + 200);

        // Random rotation
        const rotation = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

        // Random duration (1s to 3s)
        const duration = Math.random() * 2 + 1 + 's';

        // Random delay
        const delay = Math.random() * 2 + 's';

        // Apply styles
        shootingStar.style.setProperty('--start-x', `${startX}px`);
        shootingStar.style.setProperty('--start-y', `${startY}px`);
        shootingStar.style.setProperty('--end-x', `${endX}px`);
        shootingStar.style.setProperty('--end-y', `${endY}px`);
        shootingStar.style.setProperty('--rotation', `${rotation}deg`);
        shootingStar.style.setProperty('--duration', duration);
        shootingStar.style.setProperty('--delay', delay);

        container.appendChild(shootingStar);

        // Remove shooting star after animation
        setTimeout(() => {
            shootingStar.remove();
        }, (parseFloat(duration) + parseFloat(delay)) * 1000);
    };

    return <div ref={spaceRef} className="space-background"></div>;
};

export default SpaceBackground;