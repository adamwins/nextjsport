"use client"

import React from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { motion } from "framer-motion";

const AboutMe = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, ...(isMobile ? {} : { transition: { duration: 1 } }) }
    };
    
    const slideInLeft = {
        hidden: { x: isMobile ? 0 : -100, opacity: 0 },
        visible: { x: 0, opacity: 1, ...(isMobile ? {} : { transition: { duration: 1 } }) }
    };

    return (
        <motion.div
            className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-white flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <div className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles className="absolute inset-0 -z-10" quantity={100} />
            <Navigation />
            <div className="pt-20 md:pt-40 container mx-4 md:mx-10 flex flex-col md:flex-row justify-center items-start">
                <motion.div
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-10"
                    variants={slideInLeft}
                >
                    <h1 className="text-xl md:text-2xl font-bold mb-4">About Me</h1>
                    <p className="text-sm md:text-base">
                        Hi, I'm Adam Winfield-Smith, a student studying computer science at the University of Hawaii at Manoa. After discovering coding in high school, I fell in love with the ability to create anything you can imagine through programming. Throughout my time at the University of Hawaii at Manoa, I have honed my problem-solving skills, communication skills, and the ability to work with others. I am excited at the prospect of using the technologies I have learned to contribute to meaningful projects.
                    </p>
                    
                    <h1 className="text-xl md:text-2xl font-bold mb-4 pt-6 md:pt-10">Skills:</h1>
                    <div className="w-full flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 p-0 m-0">
                        <motion.img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={{ scale: 1.1 }}
                        />
                        <motion.img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={{ scale: 1.1 }}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={{ scale: 1.1 }}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={{ scale: 1.1 }}
                        />
                        <motion.img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={{ scale: 1.1 }}
                        />
                        <motion.img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={{ scale: 1.1 }}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={{ scale: 1.1 }}
                        />
                        <motion.img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={{ scale: 1.1 }}
                        />
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold mb-4 pt-6 md:pt-10">Currently Learning:</h1>
                    <div className="w-full flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 p-0 m-0">
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={{ scale: 1.1 }}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={{ scale: 1.1 }}
                        />
                        <motion.img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                            className="h-16 md:h-20 w-16 md:w-20"
                            whileHover={{ scale: 1.1 }}
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="w-full md:w-1/2 flex justify-center p-4 md:p-10"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1, transition: { duration: isMobile ? 0.8 : 1.5 } }}
                >
                    <img src="/aboutme.png" alt="Image" className="w-90 h-90 md:w-90 md:h-90 rounded-full shadow" />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default AboutMe;


