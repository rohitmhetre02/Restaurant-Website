import Hero from "./Hero";
import Menu from "./Menu";
import Store from "./Store";
import Tour from "./Tour";
import Reviews from "../Reviews";
import Map from "../Map";
import Special from "./Sepical";


function HomePage() {
    return (
      <div>
        <Hero/>
        <Store/>
        <Menu/>
        <Special/>
        <Tour/>
        <Reviews/>
        <Map/>
        </div>
      );
}

export default HomePage;