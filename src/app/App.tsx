import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import AboutPageAsync from "@/pages/AboutPage/AboutPage.async";
import NavBar from "@/components/shared/NavBar/NavBar";
import LeftSidebar from "@/components/shared/LeftSidebar/LeftSIdebar";
import RightSideBar from "@/components/shared/RightSideBar/RightSideBar";

const App = () => {
    return (
        <main className="relative">
        <NavBar />
  
        <div className="flex justify-between">
          <LeftSidebar />
  
        {/* <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
            </div> */}

          <section className="flex min-h-screen flex-1 flex-colpx-6 pb-6 pt-28 xs:px-2 sm:px-10 md:px-6 md:pb-10">
            <div className="mx-autho w-full max-w-5xl">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<MainPageAsync />} />
                  <Route path="/about" element={<AboutPageAsync />} />
                </Routes>
              </Suspense>
            </div>
          </section>

          <RightSideBar />
        </div>
      </main>
    );
};

export default App;
