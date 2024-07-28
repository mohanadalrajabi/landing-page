import * as CONSTANTS from "../constants/index";
// import { Router } from "react-router-dom";
import WrappedNavigation from "../components/organism/Navigation";
import WrappedHero from "../components/organism/Hero";

const AppRouter = () => {
  console.log("AppRouter  ")
  return (
    <>
      <WrappedNavigation links={CONSTANTS.links} />
      <WrappedHero />
    </>
  );
};

export default AppRouter;
