import { Roboto } from "next/font/google";
import { TextAlignJustify } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { ArrowRight } from "lucide-react";

export type Obj = {
  num: number;
  typ: string;
};

type Props = {
  setDrawerControl: Dispatch<SetStateAction<boolean>>;
  setPage: Dispatch<SetStateAction<Obj>>;
};

const roboto = Roboto({
  subsets: ["latin"],
});

const Drawer = ({ setDrawerControl, setPage }: Props) => {
  const tradeValue = (value: string) => {
    setPage((int) => ({
      ...int,
      typ: value,
      num: 1, // Dica: reseta a página para 1 ao mudar de categoria
    }));
  };

  return (
    <div className="absolute top-0 left-0 flex flex-col gap-6 justify-start items-start p-2 w-[12em] h-full bg-[#1B1B1B]">
      <span className="pl-2">
        <TextAlignJustify
          className="cursor-pointer"
          onClick={() => setDrawerControl((prev) => !prev)}
        />
      </span>

      <h2
        className={`${roboto.className} cursor-pointer flex flex-row-reverse justify-center items-cnter gap-2 hover:text-red-800`}
        onClick={() => {
          setDrawerControl((prev) => !prev);
          tradeValue("popular");
        }}
      >
        Populares
        <ArrowRight size={20} color="grey" />
      </h2>

      <h2
        className={`${roboto.className} cursor-pointer flex flex-row-reverse justify-center items-cnter gap-2 hover:text-red-800`}
        onClick={() => {
          setDrawerControl((prev) => !prev);
          tradeValue("top_rated");
        }}
      >
        Melhor avaliados
        <ArrowRight size={20} color="grey" />
      </h2>

      <h2
        className={`${roboto.className} cursor-pointer flex flex-row-reverse justify-center items-cnter gap-2 hover:text-red-800`}
        onClick={() => {
          setDrawerControl((prev) => !prev);
          tradeValue("upcoming");
        }}
      >
        Lançamentos
        <ArrowRight size={20} color="grey" />
      </h2>
    </div>
  );
};

export default Drawer;
