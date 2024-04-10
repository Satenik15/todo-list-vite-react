import useTheme from "@/hooks/useTheme";
import {
    User,
    SquarePlus,
    Moon,
    Search,
    Sun,
    Cpu,
    Newspaper,
    ShieldQuestion,
    LogIn,
    UserRoundPlus,
} from "lucide-react";
import logo from "@/assets/logo.webp";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
    const { mode, setMode } = useTheme();

    return (
        <div className="flex justify-between bg-gray-900 py-5 px-10">
            <div className="flex items-center gap-4 cursor-pointer">
                <img src={logo} alt="PlusDev.NET" />
                <p className="text-2xl text-white font cursor-pointer">
                    PlusDev
                    <span className="text-red-600">.NET</span>
                </p>
            </div>
            <div className="relative h-fit w-1/2">
                <Search className="absolute top-2.5 left-3 text-slate-400" />
                <input
                    type="text"
                    className="h-11 w-full rounded-md px-11 bg-zinc-700 text-slate-400 outline-none"
                    name="search"
                    placeholder="Search globally"
                />
            </div>
            <div className="flex items-center justify-between gap-9 text-red-600 text-2xl">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <SquarePlus />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <button className="flex items-center gap-2 py-2 px-4">
                                <Newspaper />
                                <span>Create a Post</span>
                            </button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button className="flex items-center gap-2 py-2 px-4">
                                <ShieldQuestion />
                                <span>Ask a Question</span>
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        {mode === "dark" ? <Sun /> : <Moon />}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <button
                                className="flex items-center gap-2 py-2 px-4"
                                onClick={() => setMode("light")}
                            >
                                <Sun />
                                <span>Light</span>
                            </button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button
                                className="flex items-center gap-2 py-2 px-4"
                                onClick={() => setMode("dark")}
                            >
                                <Moon />
                                <span>Dark</span>
                            </button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button
                                className="flex items-center gap-2 py-2 px-4"
                                onClick={() => setMode("system")}
                            >
                                <Cpu />
                                <span>System</span>
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <User />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <button className="flex items-center gap-2 py-2 px-4">
                                <LogIn />
                                <span>Log In</span>
                            </button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button className="flex items-center gap-2 py-2 px-4">
                                <UserRoundPlus />
                                <span>Sign Up</span>
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default NavBar;
