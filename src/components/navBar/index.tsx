import { logo } from "@/assets";
import { ShoppingCart } from "lucide-react";

export default function NavBar() {
  return (
    <div className="px-40 flex justify-between items-center p-6">
      <img className="w-40 cursor-pointer" src={logo}></img>

      <div className="flex gap-8">
        <a
          href="#"
          className="font-bold text-xl transition relative no-underline hover:underline-after"
        >
          Home
        </a>
        <a
          href="#"
          className="font-bold text-xl transition relative no-underline hover:underline-after"
        >
          Oferta
        </a>
        <a
          href="#"
          className="font-bold text-xl transition relative no-underline hover:underline-after"
        >
          Nossos produtos
        </a>
        <a
          href="#"
          className="font-bold text-xl transition relative no-underline hover:underline-after"
        >
          Sobre nós
        </a>
        <a href="#">
          <ShoppingCart />
        </a>
      </div>
    </div>
  );
}
