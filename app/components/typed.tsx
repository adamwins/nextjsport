"use client"

import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypedHome = () => {
    const animate = useRef(null);

    useEffect(() => {
        const typed = new Typed(animate.current, {
            strings: [
                'Software Developer',
                'Backend Developer',
                'Frontend Developer',
                'Quick Learner',
                'Team Player',
                'Hard Working',
                'Highly Motivated',
            ],
            typeSpeed: 70,
            backSpeed: 70,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="typed-wrapper" style={{ height: '50px', overflow: 'hidden', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
            <p ref={animate} className="text-lg text-zinc-500 m-0 p-0 inline-block"></p>
        </div>
    );
};

export default TypedHome;
