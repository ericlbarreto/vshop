import NavBar from "./components/navBar";
import { banner } from "./assets";

export function App() {
  return (
    <div className="px-40">
      <NavBar />
      <div className="flex justify-center">
        <img src={banner} className="rounded-3xl"></img>
      </div>
    </div>
  );
}
