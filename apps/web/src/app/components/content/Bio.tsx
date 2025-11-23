export default function Bio() {
    return (
        <div
            className="
        max-w-2xl p-6 rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10 items-center
      "
        >
            <h1 className="text-3xl font-semibold mb-3">
                Hey, I’m <span className="text-blue-300">etherchild</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed">
                A full stack developer with a thing for audio tech, cyber
                aesthetics, and building ridiculous tools that probably
                shouldn’t work but somehow do. Currently crafting{" "}
                <span className="text-orange-300 font-medium">Aetherwave</span>{" "}
                — my ecosystem of apps, synths, and interactive experiences
                powered by Django, React, C++, and a bit too much caffeine.
            </p>

            <p className="text-white/70 mt-4 leading-relaxed">
                I focus on efficient, clean systems: REST APIs, modern UI,
                scalable backends, and real-time audio experiments. If it looks
                like it came out of a sci-fi glitch demo? Even better.
            </p>
        </div>
    );
}
