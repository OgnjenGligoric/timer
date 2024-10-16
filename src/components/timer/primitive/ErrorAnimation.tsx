import React, { useEffect, useState } from 'react';

const ErrorAnimation = () => {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const animate = () => {
            setScale(1.2);
            setTimeout(() => {
                setScale(1);
            }, 300);
        };

        animate();
        const intervalId = setInterval(animate, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <svg
            width="250"
            height="250"
            viewBox="0 0 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}
        >
            <path d="M118.938 35.5C121.632 30.8333 128.368 30.8333 131.062 35.5L205.54 164.5C208.235 169.167 204.867 175 199.478 175H50.5218C45.1332 175 41.7653 169.167 44.4596 164.5L118.938 35.5Z" fill="#A2A4CB" />
            <rect x="147.184" y="92" width="16.6281" height="77.2019" transform="rotate(45 147.184 92)" fill="#26273D" />
            <rect x="92" y="104.124" width="16.6281" height="77.2019" transform="rotate(-45 92 104.124)" fill="#26273D" />
        </svg>
    );
};

export default ErrorAnimation;
