import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Press from "./Press";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Press />
    </div>
  );
};

export default Home;
