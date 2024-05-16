import { logo } from "@/assets";
import { ShoppingCart } from "lucide-react";

export default function NavBar() {
    return (
        <div className="px-40 flex justify-between items-center p-6">
            <img className="w-40 cursor-pointer" src={logo}></img>

            <div className="flex gap-8">
            <a href="#" className="font-bold text-lg">Home</a>
            <a href="#" className="font-bold text-lg">Oferta</a>
            <a href="#" className="font-bold text-lg">Nossos produtos</a>
            <a href="#" className="font-bold text-lg">Sobre nós</a>
            <a href="#">
                <ShoppingCart />
            </a>
            </div>
        </div>
    )
}