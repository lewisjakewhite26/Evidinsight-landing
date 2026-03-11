import Link from "next/link";
import { Button } from "./button";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-[#0B1120]/80 backdrop-blur-md">
            <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-white tracking-tight">
                        Evid<span className="text-purple-500">Insight</span>
                    </span>
                </Link>

                <nav className="hidden md:flex gap-8">
                    <Link href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#roi" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        ROI Calculator
                    </Link>
                </nav>

                <div className="flex items-center">
                    <Button className="bg-purple-700 hover:bg-purple-600 text-white shadow-[0_0_15px_rgba(76,29,149,0.4)] border border-purple-500/50 rounded-full px-6 transition-all hover:shadow-[0_0_25px_rgba(76,29,149,0.6)]">
                        Get in touch
                    </Button>
                </div>
            </div>
        </header>
    );
}
