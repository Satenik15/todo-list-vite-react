import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import AboutPageAsync from "@/pages/AboutPage/AboutPage.async";
import { Button } from "@/components/ui/button";
import Header from "@/pages/Header/Header";
import useTheme from "@/hooks/useTheme";

const App = () => {
    const { mode, setMode } = useTheme();

    return (
        <div>
            <Header />
            <div className="flex flex-col h-screen">
                <nav className="bg-slate-200">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="flex text-sm py-4 ">
                            <Link
                                to={"/"}
                                className="text-zinc-600 px-3 py rounded-md font-semibold hover:underline"
                            >
                                Main
                            </Link>
                            <Link
                                to={"/about"}
                                className="text-zinc-600 px-3 py rounded-md font-semibold hover:underline"
                            >
                                About
                            </Link>
                        </div>
                        <Button
                            onClick={() =>
                                setMode(mode === "dark" ? "light" : "dark")
                            }
                        >
                            {" "}
                            Change Theme Mode ({mode.toUpperCase()})
                        </Button>
                    </div>
                </nav>

                <div className="flex-grow py-5">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<MainPageAsync />}></Route>
                            <Route
                                path="/about"
                                element={<AboutPageAsync />}
                            ></Route>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default App;
