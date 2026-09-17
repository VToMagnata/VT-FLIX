import Card from "../Card";

import { Dispatch, SetStateAction } from "react";

import type { Film } from "../../types";

type Props = {
  films: Film[];
  setDetailsId: Dispatch<SetStateAction<string | null>>;
};

const Grid = ({ films, setDetailsId }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-10 p-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8 lg:grid-cols-5">
      {films.map((film) => (
        <Card film={film} key={film.id} setDetailsId={setDetailsId} />
      ))}
    </div>
  );
};

export default Grid;
