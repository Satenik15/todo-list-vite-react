import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const LeftSidebar = () => {
    return (
        <section className="w-[100px] text-black custom-scrollbar static left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r border-zinc-200 bg-zinc-50 p-6 pt-36 max-sm:hidden lg:w-[266px] dark:border-zinc-900">
            <div className="flex flex-1 flex-col gap-6">
                <Link
                    to="/"
                    className="flex base-bold items-center justify-start gap-4 rounded-lg text-zinc-200"
                />
                <Home className="h-5 w-5" />
                <span className="max-lg:hidden">Home</span>
            </div>
        </section>
    );
};

export default LeftSidebar;
