import { logo } from "@/assets";
import { ShoppingCart } from "lucide-react";

export default function NavBar() {
    return (
        <div className="px-40 flex justify-between items-center p-6">
            <img className="w-40 cursor-pointer" src={logo}></img>

            <div className="flex gap-8">
            <a href="#" className="font-bold text-xl hover:text-[#70ff67] ease-in-out">Home</a>
            <a href="#" className="font-bold text-xl hover:text-[#70ff67] ease-in-out">Oferta</a>
            <a href="#" className="font-bold text-xl hover:text-[#70ff67] ease-in-out">Nossos produtos</a>
            <a href="#" className="font-bold text-xl hover:text-[#70ff67] ease-in-out">Sobre nós</a>
            <a href="#">
                <ShoppingCart />
            </a>
            </div>
        </div>
    )
}