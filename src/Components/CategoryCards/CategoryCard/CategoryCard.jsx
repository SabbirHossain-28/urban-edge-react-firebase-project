import PropTypes from "prop-types"
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const CategoryCard = ({data}) => {
    const {id,image, price,status,estate_title,location}=data;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-2xl">
        <div className="p-4">
          <figure className="bg-slate-200 lg:p-8 rounded-lg">
            <img className="w-full h-60 rounded-lg" src={image} alt="book-image " />
          </figure>
          <div className="mt-6 flex gap-2 font-work font-medium justify-center">
            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#BB915B]">
              For {status}
            </button>
            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#BB915B]">
              {price}
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-5 flex flex-col items-center">
            <h2 className="card-title text-[#131313] font-playfair text-xl font-bold">
              {estate_title}
            </h2>
            <p className="text-[#131313CC] font-work font-medium flex items-center gap-2">
             <GrMapLocation className="text-lg text-[#BB915B]"></GrMapLocation><span className="text-lg">Location: {location}</span>
            </p>
          </div>
          <div className="flex justify-center border-t-2 border-dashed mb-5">
          <Link to={`/cardDetails/${id}`}><button className="text-xl mt-4 w-48 h-14 text-white bg-[#BB915B] overflow-hidden relative z-10 group hover:text-white duration-700 rounded-md">Property Details<span className="bg-[#c9a474] group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-[#ba986d] group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-[#b39166] group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-[#b98f5a] group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-[#BB915B] group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span></button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes={
    data:PropTypes.object,
}
export default CategoryCard;
