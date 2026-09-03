"use client";

import { useEffect, useState } from "react";

import Grid from "./components/Grid";
import { GetFilmes, FindId } from "./api/Axios";
import Header from "./components/Header";
import Drawer from "./components/Header/Drawer";
import { CircleArrowRight, CircleArrowLeft } from "lucide-react";
import DetailsFilm from "./components/DetailsFilm";

type Film = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
};

type Obj = {
  num: number;
  typ: string;
};

const Home = () => {
  const [drawerControl, setDrawerControl] = useState(false);
  const [films, setFilms] = useState<Film[]>([]);
  const [filteredFilms, setFilteredFilms] = useState<Film[]>([]);
  const [search, setSearch] = useState("");
  const [detaisId, setDetailsId] = useState<string | null>(null);
  const [film, setFilm] = useState<Film | null>(null);

  const [page, setPage] = useState<Obj>({
    num: 1,
    typ: "now_playing",
  });

  useEffect(() => {
    const getData = async () => {
      const data = await GetFilmes(
        `https://api.themoviedb.org/3/movie/${page.typ}?language=pt-BR&page=${page.num}`,
      );

      setFilms(data);
    };

    getData();
  }, [page]);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredFilms(films);
      return;
    }

    const results = films.filter((film) =>
      film.title.toLowerCase().includes(search.toLowerCase()),
    );

    setFilteredFilms(results);
  }, [search, films]);

  useEffect(() => {
    if (!detaisId) return;

    const getFilm = async () => {
      const data = await FindId(detaisId);

      console.log("FILME RECEBIDO:", data);

      setFilm(data);
    };

    getFilm();
  }, [detaisId]);

  return (
    <main className="flex flex-col">
      <Header
        setDrawerControl={setDrawerControl}
        setSearch={setSearch}
        setPage={setPage}
      />

      <Grid films={filteredFilms} setDetailsId={setDetailsId} />

      {drawerControl && (
        <Drawer setPage={setPage} setDrawerControl={setDrawerControl} />
      )}

      <span className="w-full flex justify-center items-center gap-8 my-8">
        <CircleArrowLeft
          size={35}
          className="cursor-pointer"
          onClick={() => {
            setPage((prev) => ({
              ...prev,
              num: prev.num <= 1 ? 1 : prev.num - 1,
            }));
          }}
        />

        <h2 className="text-3xl">{page.num}º</h2>

        <CircleArrowRight
          size={35}
          className="cursor-pointer"
          onClick={() => {
            setPage((prev) => ({
              ...prev,
              num: prev.num + 1,
            }));
          }}
        />
      </span>

      {detaisId && film && (
        <DetailsFilm filme={film} setDetailsId={setDetailsId} />
      )}
    </main>
  );
};

export default Home;
