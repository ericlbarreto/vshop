import { logo } from "@/assets";
import { ShoppingCart } from "lucide-react";

export default function NavBar() {
    return (
        <div className="flex justify-between items-center p-6">
            <img className="w-40 cursor-pointer" src={logo}></img>

            <div className="flex gap-8">
            <a href="#" className="font-bold ">Home</a>
            <a href="#" className="font-bold ">Oferta</a>
            <a href="#" className="font-bold ">Nossos produtos</a>
            <a href="#" className="font-bold ">Sobre nós</a>
            <a href="#">
                <ShoppingCart />
            </a>
            </div>
        </div>
    )
}