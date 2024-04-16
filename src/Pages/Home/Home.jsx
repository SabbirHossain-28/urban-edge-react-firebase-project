import { useRef } from "react";
import CategoryCards from "../../Components/CategoryCards/CategoryCards";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import Menubar from "../../Components/Menubar/Menubar";
import Mission from "../../Components/Mission/Mission";
import TopAgents from "../../Components/TopAgents/TopAgents";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>UrbanEdge | Home</title>
      </Helmet>
      <HomeBanner scrollToCategoryCards={scrollToCategoryCards}></HomeBanner>
      <Menubar></Menubar>
      <Mission></Mission>
      <CategoryCards cardsContainerRef={cardsContainerRef}></CategoryCards>
      <TopAgents></TopAgents>
    </div>
  );
};

export default Home;
