import { Star } from "lucide-react";

interface ProductProps {
    title: string;
    price: number;
    thumbnail: string;
    category: string;
    stock: number;
}

export default function ProductCard({ title, price, thumbnail, category, stock }: ProductProps) {
    return(
        <div className="flex flex-col items-start w-96 border-solid border-2
         border-gray-200 p-6 rounded-xl">
            <img src={thumbnail} className="h-60 object-cover rounded-xl"></img>

            <h2 className="font-bold mt-4">{title}</h2>
            <p className="text-gray-400">{category}</p>
            <div className="flex gap-1">
                <Star fill="#F19E39" color="#F19E39" strokeWidth={1}/>
                <Star fill="#F19E39" color="#F19E39" strokeWidth={1}/>
                <Star fill="#F19E39" color="#F19E39" strokeWidth={1}/>
                <Star fill="#F19E39" color="#F19E39" strokeWidth={1}/>
                <Star fill="#F19E39" color="#F19E39" strokeWidth={1}/>
                <p className="text-gray-400">({stock})</p>
            </div>
            
            <h2 className="font-bold text-2xl mt-2">R$ {price.toFixed(2)}</h2>
        </div>
    )
}