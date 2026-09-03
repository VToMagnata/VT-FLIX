import Card from "../Card";
import { Dispatch, SetStateAction } from "react";

type Props = {
  films: {
    id: string;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: string;
  }[];

  setDetailsId: Dispatch<SetStateAction<string | null>>;
};

const Grid = ({ films, setDetailsId }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8 p-4">
      {films.map((film) => (
        <Card filme={film} key={film.id} setDetailsId={setDetailsId} />
      ))}
    </div>
  );
};

export default Grid;
