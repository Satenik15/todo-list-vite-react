import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const MainPage = () => {
    return (
      <>
      <div className="mt-4 flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-zinc-900 dark:text-zinc-100 ">
          <span className="md:h1-bold sm:h2-bold xs:h2-bold">
             Welcome to<span className="text-red-500"> PLusdev</span>
          <span className="text-zinc-600">.NET</span></span>
         <span className="flex font-space-grotesk-normal text-base font-normal 
         uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          THE BEST PLACE LEARN AND SHARE
         </span>
        </h1>

        <div className="flex gap-4">
          <Link to="/create-post" className="flex justify-end" >
            <Button className="btn-secondary min-h-[46px] px-4 py-3 text-zinc-50 max-sm:min-w-[150px]">
              Create a Post
              </Button>
          </Link>

          <Link to="/posts" className="flex justify-end gap-3 text-sm font-bold uppercase text-red-500 hover:text-red-400" >
            <Button className="btn-tertiary min-h-[46px] px-4 py-3 text-zinc-50 max-sm:min-w-[150px]">
              Ask a Question
              </Button>
          </Link>
        </div>
      </div>

      <div className="col-span-2 mt-12">
      <Link to="/posts" className="flex justify-end gap-3 text-sm font-bold uppercase text-red-500 hover:text-red-400">
        View all posts <LucideArrowRight className="w-5 h-5" />
      </Link>
      </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div>card 2</div>
          <div>card 3</div>
          <div>card 5</div>
          <div>card 5</div>
          <div>card 5</div>
          <div>card 5</div>
        </div>
      </>
    );
  };
  
  export default MainPage;