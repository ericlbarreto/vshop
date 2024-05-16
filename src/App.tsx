import NavBar from "./components/navBar";
import { banner } from "./assets";

export function App() {
  return (
    <div className="text-center">
      <NavBar />

      <div className="flex justify-center mx-auto max-w-[1400px]">
        <img src={banner} className="rounded-3xl w-auto"></img>
      </div>

      <div className="px-40 flex flex-col items-start mt-10">
        <h2 className="text-3xl font-bold">Nossos produtos</h2>
      </div>
    </div>
  );
}
