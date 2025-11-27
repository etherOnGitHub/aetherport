import Image from "next/image";

export default function Bio() {
    return (
        <div className="mt-3 p-2 md:p-5 rounded-2xl backdrop-blur-x justify-items-center items-center flex gap-8 max-w-5xl">
            <div className="flex-row lg:columns-2 border border-[--fg]/30 p-4 rounded-2xl">
                <div className="flex-col">
                    <h1 className="text-3xl font-semibold mb-3">
                        Hey, I’m <span className="">etherchild</span>
                    </h1>

                    <p className="text-lg leading-relaxed">
                        A full stack developer with a thing for audio tech,
                        cyber aesthetics, and building cool tools with the power
                        of AI at my side. Currently crafting{" "}
                        <span className="font-medium">aetherwave</span> — my
                        ecosystem of apps, synths, and interactive experiences
                        powered by Django, React and C++.
                    </p>
                    <p className="text-lg leading-relaxed">
                        I am also a music producer and sound engineer
                        specializing in electronic music and sound design. I
                        love messing with audio FFT data to mould aetheric
                        soundscapes and glitchy textures.
                    </p>
                    <p className="mt-4 leading-relaxed">
                        I focus on efficient, clean systems: REST APIs, modern
                        UI, scalable backends, and real-time audio experiments.
                        If it looks like it came out of a sci-fi glitch demo?
                        Even better.
                    </p>
                </div>
                <div className="flex-col overflow justify-items-center items-center self-center mt-6 lg:mt-0">
                    <Image
                        src="/images/etherchild/pixel_sort.webp"
                        alt="etherchild pixel sort profile image"
                        width={300}
                        height={600}
                        className=""
                        loading="lazy"
                    ></Image>
                </div>
            </div>
        </div>
    );
}
