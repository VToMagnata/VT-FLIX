"use client";

import { TextAlignJustify, Search } from "lucide-react";
import { Roboto } from "next/font/google";
import { Dispatch, SetStateAction, useRef, useState } from "react";

type Props = {
  setDrawerControl: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<Obj>>;
};

export type Obj = {
  num: number;
  typ: string;
};

const roboto = Roboto({
  subsets: ["latin"],
});

const Header = ({ setDrawerControl, setSearch, setPage }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = () => {
    setSearchOpen(true);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return (
    <header className="w-full h-16 flex items-center justify-center px-4 sm:mb-4.5 bg-[#1B1B1B] relative">
      {!searchOpen ? (
        <>
          <TextAlignJustify
            onClick={() => setDrawerControl((prev) => !prev)}
            className="absolute left-4 text-white cursor-pointer"
          />

          <h1
            className={`${roboto.className} text-red-800 font-bold text-3xl sm:text-4xl cursor-pointer`}
            onClick={() =>
              setPage((int) => ({
                ...int,
                typ: "now_playing",
              }))
            }
          >
            VTFLIX
          </h1>

          <Search
            onClick={openSearch}
            className="absolute right-4 text-white cursor-pointer"
          />
        </>
      ) : (
        <input
          ref={inputRef}
          type="text"
          placeholder="Pesquisar filme..."
          onBlur={closeSearch}
          className="w-[80%] h-10 px-4 rounded-md outline-none"
          onChange={(event) => setSearch(event.target.value)}
        />
      )}
    </header>
  );
};

export default Header;
