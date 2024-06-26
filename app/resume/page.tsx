import { Navigation } from "../components/nav";

export default function Resume() {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-white flex flex-col justify-center">
            <Navigation />
            <div className="container mx-auto px-4 py-10 justify-center">
                <div className="bg-zinc-800/70 p-8 rounded-lg shadow-lg space-x-8">
                    <div className="text-center">
                        <iframe
                            src="/resume.pdf"  
                            title="Resume"
                            style={{ width: "100%", height: "700px" }} 
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}