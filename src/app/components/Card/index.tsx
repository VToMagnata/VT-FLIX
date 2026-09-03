import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";

type Props = {
  filme: {
    id: string;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number | string;
  };

  setDetailsId: Dispatch<SetStateAction<string | null>>;
};

const Card = ({ filme, setDetailsId }: Props) => {
  const rating = Number(filme.vote_average) / 2;

  const fullStars = Math.floor(rating);

  const hasHalfStar = rating % 1 >= 0.5;

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <main
      className="w-full h-auto flex flex-col justify-between transition-transform duration-200 hover:scale-105 cursor-pointer bg-[#1B1B1B] rounded-xl"
      onClick={() => {
        console.log("CLICOU:", filme.id);
        setDetailsId(filme.id);
      }}
    >
      <figure className="w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
          className="w-full h-[10em] sm:h-[20em] sm:pb-4 rounded-t-xl"
        />
      </figure>

      <h1 className="pb-2 pl-2">{filme.title}</h1>

      <p className="text-[#f5f5f590] pl-2 text-sm sm:text-[1rem]">
        {filme.overview.slice(0, 100) + "..."}
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
          ({Number(filme.vote_average).toFixed(1)})
        </span>
      </div>
    </main>
  );
};

export default Card;
