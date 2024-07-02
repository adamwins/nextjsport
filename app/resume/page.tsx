import { Navigation } from "../components/nav";

export default function Resume() {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-white flex flex-col justify-center">
            <Navigation />
            <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-8 md:py-10">
                <div className="bg-zinc-800/70 p-8 rounded-lg shadow-lg space-y-4 sm:space-x-4 md:space-x-8">
                    <div className="text-center">
                        <iframe
                            src="/resume.pdf"
                            title="Resume"
                            className="w-full"
                            style={{ height: "70vh" }} 
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
