import axios from "axios";

const GetFilmes = async (url: string) => {
  const response = await axios.get(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });

  return response.data.results;
};

const FindId = async (id: string) => {
  console.log("ID QUE VAI PARA API:", id);

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    },
  );

  return response.data;
};

export { GetFilmes, FindId };
