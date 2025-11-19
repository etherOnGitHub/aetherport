"use client";
export default function Bars() {
    return (
        <div className="relative flex h-0 overflow-visible w-full top-0 left-0">
            <div className="absolute h-2 w-full bg-(--bar-red) barIndexRed top-0 overflow-visible"></div>
            <div className="absolute h-2 w-full bg-(--bar-purple) barIndexPurple top-2 overflow-visible"></div>
            <div className="absolute h-2 w-full bg-(--bar-teal) barIndexTeal top-4 overflow-visible"></div>
            <div className="absolute h-2 w-full bg-(--bar-amber) barIndexAmber top-6 overflow-visible"></div>
            <div className="absolute h-8 w-full bg-(--bg) z-50 rotatedNavBar -top-7"></div>
            <div className="absolute h-4 w-full bg-(--bar-red) translate-1 rotatedNavBar barIndexRed overflow-visible top-0"></div>
            <div className="absolute h-4 w-full bg-(--bar-purple) translate-2 rotatedNavBar barIndexPurple overflow-visible top-1"></div>
            <div className="absolute h-4 w-full bg-(--bar-teal) translate-3 rotatedNavBar barIndexTeal overflow-visible top-2"></div>
            <div className="absolute h-4 w-full bg-(--bar-amber) translate-4 rotatedNavBar barIndexAmber overflow-visible top-3 "></div>
        </div>
    );
}
