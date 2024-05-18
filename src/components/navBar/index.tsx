import { logo } from "@/assets";
import { ShoppingCart } from "lucide-react";

interface NavBar {
  cartLength: number;
}

export default function NavBar({ cartLength }: NavBar) {
  return (
    <div className="px-40 flex justify-between items-center p-6">
      <img className="w-40 cursor-pointer" src={logo}></img>

      <div className="flex gap-8">
        <a
          href="#"
          className="font-semibold text-xl transition relative no-underline hover:underline-after"
        >
          Home
        </a>
        <a
          href="#"
          className="font-semibold text-xl transition relative no-underline hover:underline-after"
        >
          Oferta
        </a>
        <a
          href="#"
          className="font-semibold text-xl transition relative no-underline hover:underline-after"
        >
          Nossos produtos
        </a>
        <a
          href="#"
          className="font-semibold text-xl transition relative no-underline hover:underline-after"
        >
          Sobre nós
        </a>
        <a
          href="#"
          className="flex items-center gap-2"
        >
          <ShoppingCart stroke="#70ff67"/>
          <p className="font-semibold text-xl transition relative no-underline hover:underline-after">

          Carrinho
          </p>
          <p className="text-[#70ff67] text-xs font-semibold">
            ({cartLength})
          </p>
        </a>
      </div>
    </div>
  );
}
