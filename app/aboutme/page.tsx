import React from 'react';
import { Navigation } from '../components/nav';
import AboutMeClient from '../components/clientcomponent';

const AboutMe = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-white flex flex-col items-center">
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Navigation />
            <AboutMeClient />
        </div>
    );
};

export default AboutMe;