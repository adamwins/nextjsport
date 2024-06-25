"use client"

import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypedHome = () => {
    const animate = useRef(null);
  
    useEffect(() => {
      const typed = new Typed(animate.current, {
        strings: ['Software Developer', 'Backend Developer', 'Frontend Developer', 'Quick Learner', 'Team Player'],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);

    return (
        <p ref={animate} className="text-lg text-zinc-500" style={{ height: '50px', overflow: 'hidden' }}>
        </p>
    );
};

export default TypedHome