import Button from "../atoms/Button";
import withWrapper from "../HOC/withWrapper";
import designerSVG from "../../assets/designer.svg";
import { primaryButton, secondaryButton } from "../../constants/index.js";

import "./styles/hero.css";

function Hero() {
  return (
    <div className="h-screen flex items-center">
      <div className="w-6/12">
        <div className="w-10/12 mx-auto">
          <div className="roboto-medium text-5xl">
            <h1>Introduce Your Product Quickly & Effectively</h1>
          </div>
          <div className="flex flex-col gap-5 mt-6 text-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              debitis, nesciunt aliquam sequi dolor dicta a vero, minima optio
              iure odit accusamus veritatis repellat quas incidunt. Aperiam
              dicta aliquid nostrum minima provident harum. Nostrum suscipit
              tempora pariatur, voluptatibus, earum, ipsam eos consequuntur
              eaque atque saepe at accusantium ab! Ab, minus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos
              alias neque omnis suscipit ea veritatis!
            </p>
          </div>
          <div className="flex my-16 p-0 m-0">
            <Button label="Purchase UI Kit" styles={{...primaryButton, "margin-right": "30px"}}/>
            <Button label="Learn More" styles={{ ...secondaryButton }} />
          </div>
        </div>
      </div>

      <div className="w-6/12">
        <img src={designerSVG} alt="designer image" />
      </div>
    </div>
  );
}

const WrappedHero = withWrapper(Hero);
export default WrappedHero;
