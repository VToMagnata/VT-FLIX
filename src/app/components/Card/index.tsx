import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

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
      className="flex h-auto w-full cursor-pointer flex-col justify-between rounded-xl bg-[#1B1B1B] transition-transform duration-200 hover:scale-105"
      onClick={() => {
        setDetailsId(film.id);
      }}
    >
      <figure className="w-full">
        <Image
          src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}
          alt={film.title}
          width={200}
          height={300}
          className="h-[10em] w-full rounded-t-xl object-cover sm:h-[20em] sm:pb-4"
        />
      </figure>

      <h1 className="pb-2 pl-2">{film.title}</h1>

      <p className="pl-2 text-sm text-[#f5f5f590] sm:text-[1rem]">
        {film.overview.slice(0, 100) + "..."}
      </p>

      <div className="mt-2 flex w-fit items-end gap-1 rounded-xl bg-[#1B1B1B] p-2 pl-2 text-yellow-400">
        {Array.from({ length: fullStars }).map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}

        {hasHalfStar && <FaStarHalfAlt />}

        {Array.from({ length: emptyStars }).map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}

        <span className="ml-1 text-xs text-white/70">
          ({Number(film.vote_average).toFixed(1)})
        </span>
      </div>
    </main>
  );
};

export default Card;
