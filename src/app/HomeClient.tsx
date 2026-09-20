"use client";

import dynamic from "next/dynamic";

import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

import Grid from "./components/Grid";
import Header from "./components/Header";
import Drawer from "./components/Header/Drawer";

import { useHome } from "./Hooks/useHome";

import type { Film } from "./types";

const DetailsFilm = dynamic(() => import("./components/DetailsFilm"), {
  loading: () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <p className="text-white">Carregando detalhes...</p>
    </div>
  ),
});

type Props = {
  initialFilms: Film[];
};

const HomeClient = ({ initialFilms }: Props) => {
  const {
    drawerControl,
    setDrawerControl,

    filteredFilms,

    setSearch,

    detailsId,
    setDetailsId,

    film,

    page,
    setPage,

    handlePreviousPage,
    handleNextPage,
  } = useHome({ initialFilms });

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header
        setDrawerControl={setDrawerControl}
        setSearch={setSearch}
        setPage={setPage}
      />

      <Grid films={filteredFilms} setDetailsId={setDetailsId} />

      {drawerControl && (
        <Drawer setPage={setPage} setDrawerControl={setDrawerControl} />
      )}

      <div className="my-8 flex w-full items-center justify-center gap-8">
        <button
          type="button"
          aria-label="Página anterior"
          disabled={page.num <= 1}
          onClick={handlePreviousPage}
          className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
        >
          <CircleArrowLeft size={35} />
        </button>

        <h2 className="text-3xl text-white">{page.num}º</h2>

        <button
          type="button"
          aria-label="Próxima página"
          onClick={handleNextPage}
          className="cursor-pointer"
        >
          <CircleArrowRight size={35} />
        </button>
      </div>

      {detailsId && film && (
        <DetailsFilm film={film} setDetailsId={setDetailsId} />
      )}
    </main>
  );
};

export default HomeClient;
