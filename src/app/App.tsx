import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import AboutPageAsync from "@/pages/AboutPage/AboutPage.async";
import NavBar from "@/components/shared/NavBar/NavBar";
import LeftSidebar from "@/components/shared/LeftSidebar/LeftSIdebar";

const App = () => {
    return (
        <div>
            <NavBar />
            <div className="flex flex-col h-screen">
                <nav>
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
                    </div>
                    <LeftSidebar />
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
