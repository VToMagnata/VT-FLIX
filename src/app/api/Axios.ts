import axios from "axios";

const GetFilmes = async (url: string) => {
  const response = await axios.get(
    `/api/filmes?url=${encodeURIComponent(url)}`,
  );

  return response.data.results;
};

const FindId = async (url: string) => {
  const response = await axios.get(
    `/api/filmes?url=${encodeURIComponent(url)}`,
  );

  return response.data;
};

export { GetFilmes, FindId };
