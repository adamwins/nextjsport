"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles from '../components/particles';

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }
};

const isMobile = () => {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|webOS|BlackBerry/i.test(navigator.userAgent);
};

const AboutMeClient = () => {
    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        setIsMobileDevice(isMobile());
    }, []);

    return (
        <>
            {hasMounted && <Particles className="absolute inset-0 -z-10" quantity={100} />}
            <div className="pt-20 md:pt-40 container mx-4 md:mx-10 flex flex-col md:flex-row justify-center items-start">
                <motion.div
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-10"
                    initial="hidden"
                    animate={hasMounted ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    <h1 className="text-xl md:text-2xl font-bold mb-4">About Me</h1>
                    <p className="text-sm md:text-base">
                        Hi, I'm Adam Winfield-Smith, a student studying computer science at the University of Hawaii at Manoa. After discovering coding in high school, I fell in love with the ability to create anything you can imagine through programming. Throughout my time at the University of Hawaii at Manoa, I have honed my problem-solving skills, communication skills, and the ability to work with others. I am excited at the prospect of using the technologies I have learned to contribute to meaningful projects.
                    </p>
                    
                    <h1 className="text-xl md:text-2xl font-bold mb-4 pt-6 md:pt-10">Skills:</h1>
                    <div className="w-full flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 p-0 m-0">
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold mb-4 pt-6 md:pt-10">Currently Learning:</h1>
                    <div className="w-full flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 p-0 m-0">
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" 
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={!isMobileDevice ? { scale: 1.1 } : {}}
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="w-full md:w-1/2 flex justify-center md:justify-center p-4 md:p-10"
                    initial={!isMobileDevice ? { scale: 0.8 } : {}}
                    animate={!isMobileDevice ? { scale: 1, transition: { duration: 1.5 } } : {}}
                >
                    <img src="/aboutme.png" alt="Image" className="w-90 h-90 md:w-90 md:h-90 rounded-full shadow" />
                </motion.div>
            </div>
        </>
    );
};

export default AboutMeClient;
