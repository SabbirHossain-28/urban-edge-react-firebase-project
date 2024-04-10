import { GrCheckboxSelected } from "react-icons/gr";

const Mission = () => {
  return (
    <div className="mb-12">
      <h2 className="mb-10 text-center text-3xl font-semibold ">Our mission is to redefine real estate for the customers</h2>
      <div className="flex gap-6">
        <div className="w-1/2  flex items-center text-justify">
        <p className="text-lg text-[#131313B3]">
          <span className="text-3xl text-[#BB915B] font-semibold">Estate Finder</span> is one of the world leading property agents. Our
          experience spans the globe. We have been advising on buying, selling
          and renting property for over 160 years, from country cottages to city
          centre offices, agricultural land to new-build developments.
          Cultivating a vision of innovation and integrity, Estate Finder is
          committed to revolutionizing the real estate landscape through
          cutting-edge technology and unparalleled customer service.
        </p>
        </div>
        <div className="w-1/2 text-[#131313B3] flex justify-center">
            <div>
            <p className="flex items-center gap-2 text-lg"><GrCheckboxSelected></GrCheckboxSelected>Only pay when you publish</p>
            <p className="flex items-center gap-2 text-lg"><GrCheckboxSelected></GrCheckboxSelected>Full featured event app</p>
            <p className="flex items-center gap-2 text-lg"><GrCheckboxSelected></GrCheckboxSelected>Requirement analysis</p>
            <p className="flex items-center gap-2 text-lg"><GrCheckboxSelected></GrCheckboxSelected>24/7 supports</p>
            <p className="flex items-center gap-2 text-lg"><GrCheckboxSelected></GrCheckboxSelected>Event analytics</p>
            <p className="flex items-center gap-2 text-lg"><GrCheckboxSelected></GrCheckboxSelected>Secure Payment Policy</p>
            <p className="flex items-center gap-2 text-lg"><GrCheckboxSelected></GrCheckboxSelected>Dedicated and innovative team</p>
            <p className="flex items-center gap-2 text-lg"><GrCheckboxSelected></GrCheckboxSelected>Aim to achieve customer satisfaction</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
