import Bio from "./components/content/Bio";
import Splash from "./components/ui/Splash";

export default function Home() {
    return (
        <>
            <Splash />
            <main className="flex min-h-screen flex-col [992px]:justify-items-center py-32 px-16 bg-bg items-start">
                <Bio />
            </main>
        </>
    );
}
