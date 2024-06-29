"use client";

import { Navigation } from "../components/nav";
import Particles from "../components/particles";

export default function AboutMe() {
    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-white flex flex-col items-center">
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
            />
            <Navigation />
            <div className="pt-40 container pl-20 ml-10 flex justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-10">
                    <h1 className="text-2xl font-bold mb-4">About Me</h1>
                    <p>
                        After discovering coding in high school, I fell in love with the ability to create anything you can imagine through programming. Throughout my time at the University of Hawaii at Manoa, I have been able to hone my problem-solving skills, communication skills, and the ability to work with others. I am excited at the thought of being able to use the technologies I have learned to contribute to meaningful projects.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-center p-5">
                    <img src="/aboutme.png" alt="Image" className="w-50 h-50 rounded-full shadow" />
                </div>
            </div>
        </div>
    );
}