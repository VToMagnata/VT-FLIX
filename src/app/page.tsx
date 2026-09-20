import { GetFilmesServer } from "./api/GetFlimsServer";
import HomeClient from "./HomeClient";

export default async function Page() {
  const films = await GetFilmesServer("now_playing", 1);

  return <HomeClient initialFilms={films} />;
}
