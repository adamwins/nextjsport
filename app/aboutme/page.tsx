"use client";

import Link from "next/link";
import { Navigation } from "../components/nav";

export default function AboutMe() {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-white flex flex-col justify-center">
            <Navigation />
            <div className="container mx-auto px-4 py-10 flex justify-center items-center">
                <div className="bg-zinc-800/70 p-8 rounded-lg shadow-lg flex items-center space-x-8">
                    <div className="flex-1 text-center">
                        <p className="text-lg mb-4">
                            Hello! I'm Adam, a passionate developer with experience in full-stack development. I enjoy creating beautiful and functional websites and applications.
                        </p>
                        <p className="text-lg mb-4">
                            With a background in Computer Science, I have a keen eye for detail and a deep understanding of the latest web technologies. I love working on projects that challenge me and allow me to learn new skills.
                        </p>
                        <p className="text-lg">
                            When I'm not coding, you can find me reading, or at the gym. Feel free to <Link href="/contact" className="text-black-400 bold">reach out </Link>.
                        </p>
                    </div>
                    <img src="/aboutme.png" alt="Adam Winfield-Smith" className="rounded-full w-32 h-33 object-cover" />
                </div>
            </div>
        </div>
    );
}