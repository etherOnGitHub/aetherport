import Bio from "./components/content/Bio";

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen w-full flex-col [992px]:items-center py-32 px-16 bg-bg items-start">
                <Bio />
            </main>
        </>
    );
}
