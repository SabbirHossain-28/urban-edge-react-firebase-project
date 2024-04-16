import { useRef } from "react";
import CategoryCards from "../../Components/CategoryCards/CategoryCards";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import Menubar from "../../Components/Menubar/Menubar";
import Mission from "../../Components/Mission/Mission";
import TopAgents from "../../Components/TopAgents/TopAgents";

const Home = () => {
  const scrollToCategoryCards = () => {
    if (cardsContainerRef.current) {
      window.scrollTo({
        top: cardsContainerRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const cardsContainerRef = useRef(null);
  return (
    <div>
      <HomeBanner scrollToCategoryCards={scrollToCategoryCards}></HomeBanner>
      <Menubar></Menubar>
      <Mission></Mission>
      <CategoryCards cardsContainerRef={cardsContainerRef}></CategoryCards>
      <TopAgents></TopAgents>
    </div>
  );
};

export default Home;
