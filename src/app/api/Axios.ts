import axios from "axios";

const GetFilmes = async (url: string) => {
  const response = await axios.get(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
  });

  return response.data.results;
};

const FindId = async (id: string) => {
  console.log("ID:", id);
  console.log("TOKEN EXISTE?", !!process.env.NEXT_PUBLIC_TMDB_TOKEN);

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
      },
    },
  );

  return response.data;
};

export { GetFilmes, FindId };
