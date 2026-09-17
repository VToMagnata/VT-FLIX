import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import type { Film } from "../../types";

type Props = {
  film: Film;
  setDetailsId: Dispatch<SetStateAction<string | null>>;
};

const Card = ({ film, setDetailsId }: Props) => {
  const rating = Number(film.vote_average) / 2;

  const fullStars = Math.floor(rating);

  const hasHalfStar = rating % 1 >= 0.5;

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <main
      className="w-full h-auto flex flex-col justify-between transition-transform duration-200 hover:scale-105 cursor-pointer bg-[#1B1B1B] rounded-xl"
      onClick={() => {
        console.log("CLICOU:", film.id);
        setDetailsId(film.id);
      }}
    >
      <figure className="w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title}
          className="w-full h-[10em] sm:h-[20em] sm:pb-4 rounded-t-xl"
        />
      </figure>

      <h1 className="pb-2 pl-2">{film.title}</h1>

      <p className="text-[#f5f5f590] pl-2 text-sm sm:text-[1rem]">
        {film.overview.slice(0, 100) + "..."}
      </p>

      <div className="w-fit flex items-end gap-1 mt-2 text-yellow-400 bg-[#1B1B1B] rounded-xl p-2 pl-2">
        {Array.from({ length: fullStars }).map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}

        {hasHalfStar && <FaStarHalfAlt />}

        {Array.from({ length: emptyStars }).map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}

        <span className="text-xs text-white/70 ml-1">
          ({Number(film.vote_average).toFixed(1)})
        </span>
      </div>
    </main>
  );
};

export default Card;
