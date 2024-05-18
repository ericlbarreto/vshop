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

  const handleRemoveProduct = (index: number) => {
    setCart((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  const handleRemoveAllProducts = () => {
    setCart([]);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(console.error);
  }, []);

  return (
    <div className="text-center">
      <NavBar cart={cart} onRemoveProduct={handleRemoveProduct} onRemoveAllProducts={handleRemoveAllProducts}/>

      <div className="flex justify-center mx-auto max-w-[75%]">
        <img src={banner} className="rounded-3xl w-auto"></img>
      </div>

      <div className="flex flex-col items-start px-40 mt-16">
        <h2 className="text-5xl font-bold">
          Nossos produtos
        </h2>
        <span className="mt-2 bottom-0 left-0 block w-56 rounded-full h-1 bg-[#70ff67]"></span>
      </div>

      <div className="px-40 flex flex-col items-center">
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
