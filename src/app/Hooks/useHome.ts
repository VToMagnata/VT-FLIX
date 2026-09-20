"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { getFilmsByPage, getFilmById } from "../api/FilmRequest";

import type { Film } from "../types";

type Obj = {
  num: number;
  typ: string;
};

type Props = {
  initialFilms: Film[];
};

export const useHome = ({ initialFilms }: Props) => {
  const [drawerControl, setDrawerControl] = useState(false);
  const [films, setFilms] = useState<Film[]>(initialFilms);
  const [search, setSearch] = useState("");
  const [detailsId, setDetailsId] = useState<string | null>(null);
  const [film, setFilm] = useState<Film | null>(null);

  const [page, setPage] = useState<Obj>({
    num: 1,
    typ: "now_playing",
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    let cancelled = false;

    const getData = async () => {
      const data = await getFilmsByPage(page.typ, page.num);

      if (!cancelled) {
        setFilms(data);
      }
    };

    getData();

    return () => {
      cancelled = true;
    };
  }, [page]);

  const filteredFilms = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return films;
    }

    return films.filter((film) =>
      film.title.toLowerCase().includes(normalizedSearch),
    );
  }, [films, search]);

  useEffect(() => {
    if (!detailsId) {
      return;
    }

    let cancelled = false;

    const getFilm = async () => {
      const data = await getFilmById(detailsId);

      if (!cancelled) {
        setFilm(data);
      }
    };

    getFilm();

    return () => {
      cancelled = true;
    };
  }, [detailsId]);

  const handlePreviousPage = () => {
    setPage((prev) => ({
      ...prev,
      num: prev.num <= 1 ? 1 : prev.num - 1,
    }));
  };

  const handleNextPage = () => {
    setPage((prev) => ({
      ...prev,
      num: prev.num + 1,
    }));
  };

  return {
    drawerControl,
    setDrawerControl,

    films,
    filteredFilms,

    search,
    setSearch,

    detailsId,
    setDetailsId,

    film,

    page,
    setPage,

    handlePreviousPage,
    handleNextPage,
  };
};
