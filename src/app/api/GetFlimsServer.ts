type Film = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
};

type TMDBResponse = {
  results: Film[];
};

export async function GetFilmesServer(
  type: string,
  page: number,
): Promise<Film[]> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?language=pt-BR&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
      next: {
        revalidate: 300,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar filmes");
  }

  const data: TMDBResponse = await response.json();

  return data.results;
}
