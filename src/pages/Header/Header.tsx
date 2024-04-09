import { User, SquarePlus, Moon, Search } from "lucide-react";

const Header = () => {
    const open = () => {};
    return (
        <div className="flex justify-between bg-gray-900 p-10">
            <div className="flex items-center gap-4 cursor-pointer">
                <img src="https://www.plusdev.net/_next/image?url=%2Fassets%2Fimages%2Fpulsdev.png&w=48&q=100"></img>
                <p className="text-2xl text-white font cursor-pointer">
                    PlusDev
                    <span className="text-red-600">.NET</span>
                </p>
            </div>
            <div className="relative h-fit">
                <Search className="absolute top-2.5 left-3 text-slate-400" />
                <input
                    type="text"
                    className="h-11 rounded-md px-11 bg-zinc-700 text-slate-400 outline-none"
                    name="search"
                    placeholder="Search globally"
                />
            </div>
            <div className="flex items-center justify-between gap-9 text-red-600 text-2xl">
                <button
                    type="button"
                    id="btn1"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    className="p-1 cursor-pointer"
                    onClick={() => open()}
                >
                    <SquarePlus />
                </button>

                <button>
                    <Moon />
                </button>
                <button>
                    <User />
                </button>
            </div>
        </div>
    );
};

export default Header;
