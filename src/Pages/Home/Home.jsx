import CategoryCards from "../../Components/CategoryCards/CategoryCards";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import Menubar from "../../Components/Menubar/Menubar";
import Mission from "../../Components/Mission/Mission";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Menubar></Menubar>
            <Mission></Mission>
            <CategoryCards></CategoryCards>
        </div>
    );
};

export default Home;