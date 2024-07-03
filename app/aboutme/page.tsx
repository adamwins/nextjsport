"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/nav';
import Particles from '../components/particles';

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }
};

const AboutMe: React.FC = () => {
    const useClient = (): boolean => {
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
            const checkIfMobile = () => {
                setIsMobile(window.matchMedia('(max-width: 768px)').matches);
            };

            checkIfMobile();

            const resizeListener = () => {
                checkIfMobile();
            };

            window.addEventListener('resize', resizeListener);

            return () => {
                window.removeEventListener('resize', resizeListener);
            };
        }, []);

        return isMobile;
    };

    const isMobile = useClient();
    const [hasMounted, setHasMounted] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        preloadImages();
    }, []);

    const images: string[] = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
    ];

    const preloadImages = () => {
        let loadedImagesCount = 0;

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImagesCount++;
                if (loadedImagesCount === images.length) {
                    setImagesLoaded(true);
                }
            };
            img.onerror = () => {
                loadedImagesCount++;
                if (loadedImagesCount === images.length) {
                    setImagesLoaded(true);
                }
            };
        });
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-white flex flex-col items-center">
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles className="absolute inset-0 -z-10" quantity={100} />
            <Navigation />
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
                        {images.slice(0, 8).map((src, index) => (
                            <motion.div
                                key={index}
                                className="h-16 md:h-20 w-16 md:w-20 flex items-center justify-center"
                                style={{
                                    backgroundColor: imagesLoaded ? "transparent" : "#f0f0f0",
                                    borderRadius: "8px"
                                }}
                            >
                                <motion.img
                                    src={src}
                                    className="h-16 md:h-20 w-16 md:w-20"
                                    loading="lazy"
                                    whileHover={!isMobile ? { scale: 1.1 } : {}}
                                    style={{ display: imagesLoaded ? "block" : "none" }}
                                />
                            </motion.div>
                        ))}
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold mb-4 pt-6 md:pt-10">Currently Learning:</h1>
                    <div className="w-full flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 p-0 m-0">
                        {images.slice(8, 11).map((src, index) => (
                            <motion.div
                                key={index + 8}
                                className="h-16 md:h-20 w-16 md:w-20 flex items-center justify-center"
                                style={{
                                    backgroundColor: imagesLoaded ? "transparent" : "#f0f0f0",
                                    borderRadius: "8px"
                                }}
                            >
                                <motion.img
                                    src={src}
                                    className="h-16 md:h-20 w-16 md:w-20"
                                    loading="lazy"
                                    whileHover={!isMobile ? { scale: 1.1 } : {}}
                                    style={{ display: imagesLoaded ? "block" : "none" }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    className="w-full md:w-1/2 flex justify-center md:justify-center p-4 md:p-10"
                    initial={!isMobile ? { scale: 0.8 } : {}}
                    animate={!isMobile ? { scale: 1, transition: { duration: 1.5, delay: 0.5 } } : {}}
                >
                    <div
                        className="w-90 h-90 md:w-90 md:h-90 rounded-full shadow"
                        style={{
                            backgroundColor: imagesLoaded ? "transparent" : "#f0f0f0",
                            display: imagesLoaded ? "block" : "none"
                        }}
                    >
                        <img
                            src="/aboutme.png"
                            alt="About Me"
                            className="w-90 h-90 md:w-90 md:h-90 rounded-full shadow"
                            loading="lazy"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;
