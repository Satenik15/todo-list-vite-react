// import {input} from "@/components/ui/input";
import { LucideSearch } from "lucide-react";

const GlobalSearch = () => {
    return (
        <div className="relative w-full max-w-[600px] max-lg:ml-4 max-md:hidden">
            <div className="relative flex min-h-[46px] items-center gap-1 rounded-xl bg-slate-200 dark:bg-slate-800">
                <LucideSearch className="h-6 w-6 cursor-pointer text-sla-400" />
                <input
                    type="text"
                    placeholder="Search Globally"
                    className="paragraf-regular no-focus placeholder:text-gray-400 outline-none bg-slate-200 dark:bg-slate-800"
                />
            </div>
        </div>
    );
};

export default GlobalSearch;
