import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { LucideSearch, LucideCircleHelp, LucideUser, LucideTag } from "lucide-react";
import { Button } from "@/components/ui/button";

const GlobalSearch = () => {
  const btns = ['Post', 'Question', 'User', 'Tag'];

  const [menuData, setMenuData] = useState([
    {
      id: 0,
      type: 'post',
      imgUrl: 'https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60',
      text: 'Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices'
    },
    {
      id: 1,
      type: 'post',
      imgUrl: 'https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60',
      text: 'Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices'
    },
    {
      id: 2,
      type: 'question',
      icon: LucideCircleHelp,
      text: 'How get access the unmodified body of a Fastify request'
    },
    {
      id: 3,
      type: 'question',
      icon: LucideCircleHelp,
      text: 'How get access the unmodified body of a Fastify request'
    },
    {
      id: 4,
      type: 'tag',
      icon: LucideTag,
      text: 'Redis'
    },
    {
      id: 5,
      type: 'tag',
      icon: LucideTag,
      text: 'Redis'
    },
    {
      id: 6,
      type: 'user',
      icon: LucideUser,
      text: 'Diego Morgenstern'
    },
    {
      id: 7,
      type: 'user',
      icon: LucideUser,
      text: 'Diego Morgenstern'
    }
  ]);

  const [selectedTab, setSelectedTab]: any = useState(null);

  function onFilterData(tab: string) {
    if(selectedTab === tab) {
      setSelectedTab(null);
    } else {
      setSelectedTab(tab);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-1 relative w-full max-w-[600px] max-lg:ml-4 max-md:hidden">
        <div className="relative flex min-h-[46px] items-center gap-1 rounded-xl bg-slate-200 dark:bg-slate-800 px-4">
          <LucideSearch className="h-6 w-6 cursor-pointer text-slate-400" />
          <Input
            type="text"
            placeholder="Search Globally"
            className="paragraph-regular no-focus placeholder:text-gray-400 outline-none bg-slate-200 dark:bg-slate-800"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 mt-4 bg-zinc-50 dark:bg-slate-800 w-full max-w-[600px] rounded-xl bg-slate-200 py-5 dark:bg-slate-800">
        <DropdownMenuLabel className="flex items-center gap-4">
          <span className="body-medium text-zinc-900 dark:text-zinc-400">Type:</span>

          {
            btns.map((btn) => (
              <Button className="h-10 small-medium rounded-xl border bg-slate-300 px-5 py-2 capitalize text-zinc-500 hover:bg-indigo-400 hover:text-zinc-100 dark:bg-slate-800 dark:text-zinc-100 hover:dark:bg-indigo-400" key={btn}
              onClick={(btn) => onFilterData}>{btn}</Button>
            ))
          }

        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="font-semibold tet-base p-5 text-zinc-800 dark:text-zinc-300">Top Matches</DropdownMenuLabel>

        {
          menuData.map((item: any) => (
            <DropdownMenuItem className="flex items-center gap-2" key={item.id}>
              {
                item.imgUrl
                  ?
                  <img src={item.imgUrl} alt="post image" className="h-10 w-12 rounded-md object-cover" />
                  :
                  <item.icon width={24} height={24} className="mx-3" />
              }
              <div className="flex flex-col">
                <span className="body-medium line-clamp-1 text-zinc-800 dark:text-zinc-200">{ item.text }</span>
                <span className="small-medium mt-1 font-bold capitalize text-zinc-500 dark:text-zinc-400">{ item.type }</span>
              </div>
            </DropdownMenuItem>
          ))
        }

      </DropdownMenuContent>
    </DropdownMenu>

  );
};

export default GlobalSearch;