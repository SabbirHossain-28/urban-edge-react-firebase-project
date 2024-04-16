import { Helmet } from "react-helmet-async";
import ProfileCrad from "../../Components/ProfileCard/ProfileCard";

const Updateprofile = () => {
  return (
    <div>
      <Helmet>
        <title>User | Update-Profile</title>
      </Helmet>
      <ProfileCrad></ProfileCrad>
    </div>
  );
};

export default Updateprofile;
