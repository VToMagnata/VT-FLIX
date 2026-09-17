import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "./page";

jest.mock("./api/Axios", () => ({
  GetFilmes: jest.fn().mockResolvedValue([
    {
      id: "1",
      title: "Batman",
      overview: "Um herói de Gotham",
      poster_path: "/batman.jpg",
      vote_average: "8",
    },
    {
      id: "2",
      title: "Superman",
      overview: "Um herói de Krypton",
      poster_path: "/superman.jpg",
      vote_average: "7",
    },
    {
      id: "3",
      title: "Homem-Aranha",
      overview: "Um herói com poderes de aranha",
      poster_path: "/spiderman.jpg",
      vote_average: "9",
    },
  ]),
  FindId: jest.fn(),
}));

//------------------------------------------------------------------------------------------------------\\

test("Verifica a renderização correta dos filmes", async () => {
  render(<Home />);

  expect(await screen.findByText("Batman")).toBeInTheDocument();
});

//------------------------------------------------------------------------------------------------------\\

test("Deve filtrar os filmes pelo título", async () => {
  render(<Home />);

  expect(await screen.findByText("Batman")).toBeInTheDocument();

  expect(screen.getByText("Superman")).toBeInTheDocument();

  const searchButton = screen.getByRole("button", {
    name: "Abrir busca",
  });

  fireEvent.click(searchButton);

  const input = screen.getByRole("textbox");

  fireEvent.change(input, {
    target: { value: "Batman" },
  });

  expect(screen.getByText("Batman")).toBeInTheDocument();

  expect(screen.queryByText("Superman")).not.toBeInTheDocument();
});
