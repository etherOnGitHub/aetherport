export default function Bio() {
    return (
        <div className="mt-5 max-w-2xl p-6 rounded-2xl backdrop-blur-xl border items-center">
            <h1 className="text-3xl font-semibold mb-3">
                Hey, I’m <span className="">etherchild</span>
            </h1>

            <p className="text-lg leading-relaxed">
                A full stack developer with a thing for audio tech, cyber
                aesthetics, and building ridiculous tools that probably
                shouldn’t work but somehow do. Currently crafting{" "}
                <span className="font-medium">aetherwave</span> — my ecosystem
                of apps, synths, and interactive experiences powered by Django,
                React, C++, and a bit too much caffeine.
            </p>

            <p className="mt-4 leading-relaxed">
                I focus on efficient, clean systems: REST APIs, modern UI,
                scalable backends, and real-time audio experiments. If it looks
                like it came out of a sci-fi glitch demo? Even better.
            </p>
        </div>
    );
}
