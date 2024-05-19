import { Route } from 'react-router-dom';
import { banner } from '@/assets';
import NavBar from '@/components/navBar';
import ProductCard from '@/components/productCard';
import { Button } from '@/components/ui/button';
import { useCartContext, useProductContext } from '@/contexts/ProductsContext';
import Product from './product';


export function Home() {
  const { products } = useProductContext();
  const { addToCart } = useCartContext();

  return (
    <div className="text-center">
      <NavBar />

      <div className="flex justify-center mx-auto max-w-[75%]">
        <img src={banner} className="rounded-3xl w-auto" alt="Banner"></img>
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
              <Route path='/product' element={<Product />}>
                <ProductCard
                  thumbnail={product.thumbnail}
                  title={product.title}
                  category={product.category}
                  stock={product.stock}
                  price={product.price}
                />
              </Route>
              <Button className="absolute bottom-4 right-4 text-lg bg-[#70ff67] text-gray-950 hover:text-[#70ff67]" onClick={() => addToCart(product)}>
                +
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}