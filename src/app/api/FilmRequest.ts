import { GetFilmes, FindId } from "./Axios";

import type { Film } from "../types";

export const getFilmsByPage = async (
  typ: string,
  num: number,
): Promise<Film[]> => {
  const url = `https://api.themoviedb.org/3/movie/${typ}?language=pt-BR&page=${num}`;

  return await GetFilmes(url);
};

export const getFilmById = async (id: string): Promise<Film> => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`;

  return await FindId(url);
};
