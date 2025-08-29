import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <h1 className="text-green-400">Welcome to the world of GTA and GSAP </h1>
    </main>
  );
};

export default App;
