import NavBar from "./components/navBar";
import { banner } from "./assets";
import { useState, useEffect } from "react";
import ProductCard from "./components/productCard";
import { Button } from "./components/ui/button";

interface ProductProps {
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  stock: number;
}

export function App() {
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [products, setProducts] = useState<ProductProps[]>([]);

  const handleAddProduct = (index: number) => {
    const newProduct = products[index];
    setCart((prevProducts) => [...prevProducts, newProduct]);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(console.error);
  }, []);
  console.log(cart.length);
  return (
    <div className="text-center">
      <NavBar />

      <div className="flex justify-center mx-auto max-w-[75%]">
        <img src={banner} className="rounded-3xl w-auto"></img>
      </div>

      <div className="px-40 flex flex-col items-center mt-10">
        <h2 className="text-5xl font-bold">Nossos produtos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product, index) => (
            <div key={index} className="relative">
              <ProductCard
                thumbnail={product.thumbnail}
                title={product.title}
                category={product.category}
                stock={product.stock}
                price={product.price}
              />
              <Button className="absolute bottom-4 right-4 text-lg bg-[#70ff67] text-gray-950 hover:text-[#70ff67]" onClick={() => handleAddProduct(index)}>
                +
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
