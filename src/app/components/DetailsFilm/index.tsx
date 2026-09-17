import { Dispatch, SetStateAction } from "react";

import type { Film } from "../../types";

type Props = {
  film: Film;
  setDetailsId: Dispatch<SetStateAction<string | null>>;
};

const DetailsFilm = ({ film, setDetailsId }: Props) => {
  return (
    <div className="fixed inset-0 z-50 w-full h-full flex justify-center items-center bg-black/80">
      <div className="bg-[#1B1B1B] p-8 rounded-xl flex items-center sm:items-start  flex-col sm:flex-row gap-5 text-white w-[80%] sm:w-[60%] h-[80%] sm:h-[auto] overflow-x-auto relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          className="w-[12em] h-[12em] sm:w-[20em] sm:h-[20em]"
          alt={film.title}
        />

        <div>
          <h1 className="text-3xl">{film.title}</h1>

          <p className="mt-4 text-sm sm:text-[1rem]">{film.overview}</p>
        </div>

        <div
          className="absolute top-0 right-2 sm:text-4xl text-3xl font-bol cursor-pointer"
          onClick={() => setDetailsId(null)}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default DetailsFilm;
