import { logo } from "@/assets";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";
import "./navbar.css";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useCartContext } from "@/contexts/ProductsContext";

export default function NavBar() {
  const { cart, clearCart, removeFromCart } = useCartContext();

  const handleConfirm = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=+5589988161225&text=Ol%C3%A1%21+Vim+da+v%28shop%29+e+acabei+de+adquirir+${cart.length}+produtos+na+loja!`,
      "_blank"
    );
    clearCart();
  };

  return (
    <div className="px-40 flex justify-between items-center p-6">
      <img className="w-40 cursor-pointer" src={logo} alt="Logo"></img>

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

        <Sheet>
          <SheetTrigger asChild>
            <a href="#" className="flex items-center gap-2">
              <ShoppingCart stroke="#70ff67" />
              <p className="font-semibold text-xl transition relative no-underline hover:underline-after">
                Carrinho
              </p>
              <p className="text-[#70ff67] text-xs font-semibold">
                ({cart.length})
              </p>
            </a>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between h-full">
            <div>
              <SheetHeader>
                <SheetTitle>Seu carrinho de compras</SheetTitle>
                <SheetDescription>
                  Navegue pelos itens adicionados no seu carrinho de compras.
                </SheetDescription>
              </SheetHeader>
              <div className="max-h-[70vh] overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="flex justify-center items-center h-full text-gray-500">
                    <p>Seu carrinho está vazio.</p>
                  </div>
                ) : (
                  cart.map((product, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center my-4"
                    >
                      <div className="flex">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-16 h-16 rounded object-cover"
                        />

                        <div className="ml-4 max-w-28">
                          <p className="text-base font-bold">{product.title}</p>
                          <p className="text-sm text-gray-600">
                            {product.category}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-start w-20">
                        <p className="text-sm font-semibold">
                          R$ {product.price.toFixed(2)}
                        </p>
                        <Button
                          className="w-11 h-8"
                          onClick={() => removeFromCart(index)}
                          variant={"destructive"}
                        >
                          <TrashIcon className="w-6 h-6" stroke="#ffffff" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="w-full bg-[#70ff67] shadow-md text-gray-950 hover:text-[#70ff67]">
                    Confirmar Compra
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Você deseja confirmar sua compra?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Essa ação irá confirmar sua compra, separando os produtos
                      no nosso estoque e enviando para o seu endereço.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-[#70ff67] text-gray-950 hover:text-[#70ff67]"
                      onClick={handleConfirm}
                    >
                      Confirmar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
