import { Link } from "react-router-dom";
import { LucideMenu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import logo from "@/assets/logo.webp";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

const LeftMenu = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <LucideMenu className="h-6 w-6 text-red-500 cursor-pointer hover:text-red-500 dark:text-zinc-100 dark:hover:text-red-500 sm:hidden" />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>
                        <Link to="/" className="flex items-center gap-1">
                            <img src={logo} alt="PlusDev.NET" className="w-9" />

                            <h3 className="h3-bold ml-1 font-space-grotesk-bold text-slate-900 dark:text-slate-100">
                                PlusDev<span className="text-red-500">.NET</span>
                            </h3>
                        </Link>
                    </SheetTitle>
                    <SheetDescription>
                        <LeftSidebar isMobile={true} />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default LeftMenu;