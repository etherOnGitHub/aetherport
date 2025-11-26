import Bio from "./components/content/Bio";
import Splash from "./components/ui/Splash";

export default function Home() {
    return (
        <>
            <Splash />
            <main className="flex min-h-screen w-full flex-col [992px]:items-center py-32 px-16 bg-bg items-start">
                <Bio />
            </main>
        </>
    );
}
