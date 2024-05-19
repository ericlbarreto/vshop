import { Star } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ProductProps {
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  stock: number;
  description: string;
}

export default function ProductCard({
  title,
  price,
  thumbnail,
  category,
  stock,
  description
}: ProductProps) {
  return (
    <div
      className="flex flex-col items-start w-64 lg:w-72 2xl:w-[18vw] border-solid border-2
         border-gray-200 p-6 rounded-xl"
    >
      <img src={thumbnail} className="w-[100%] h-60 object-cover rounded-xl"></img>
      <HoverCard>
        <HoverCardTrigger asChild>
          <a className="font-bold mt-4 hover:underline cursor-pointer">{title}</a>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <img src={thumbnail} className="w-28 h-28 object-cover rounded-xl"></img>
            <div className="space-y-1 text-left">
              <h4 className="text-sm font-semibold">{title}</h4>
              <p className="text-sm">
                {description}
              </p>
              <div className="flex items-center pt-2">
                <Star className="mr-2 h-4 w-4 opacity-70"/>{" "}
                <span className="text-xs text-muted-foreground">
                  {stock} avaliações
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <p className="text-gray-400">{category}</p>
      <div className="flex gap-1">
        <Star fill="#F19E39" color="#F19E39" strokeWidth={1} />
        <Star fill="#F19E39" color="#F19E39" strokeWidth={1} />
        <Star fill="#F19E39" color="#F19E39" strokeWidth={1} />
        <Star fill="#F19E39" color="#F19E39" strokeWidth={1} />
        <Star fill="#F19E39" color="#F19E39" strokeWidth={1} />
        <p className="text-gray-400">({stock})</p>
      </div>

      <h2 className="font-bold text-2xl mt-2">R$ {price.toFixed(2)}</h2>
    </div>
  );
}
