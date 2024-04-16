import PropTypes from "prop-types";

const AgentCard = ({ data }) => {
  const { image, name, skills, working_experience, working_year, rating } =
    data;

  const getCheckedStars = () => {
    const roundedRating = Math.round(rating); 
    const checkedStars = Array(5).fill(false); 
    for (let i = 0; i < roundedRating; i++) {
      checkedStars[i] = true; 
    }
    return checkedStars;
  };

  return (
    <div className="bg-[#F3F3F3] p-2 rounded-lg shadow-lg">
      <div className="flex justify-center">
        <img className="rounded-full w-72 h-72" src={image} alt="Agent image" />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <h3 className="text-xl text-[#131313] font-semibold mb-3">{name}</h3>
        <p className="text-[#131313] text-lg font-semibold border-b-2 border-[#131313]">
          Skills
        </p>
        <ul className="mb-3">
          {skills.map((data, idx) => (
            <li
              key={idx}
              className=" text-[#131313CC] text-base font-normal text-center"
            >
              {data}
            </li>
          ))}
        </ul>
        <p className="text-[#131313] text-lg font-semibold mb-1">
          Working Experience:{" "}
          <span className="text-[#131313CC] text-base font-normal">
            {working_experience}
          </span>
        </p>
        <p className="text-[#131313] text-lg font-semibold mb-2">
          Started work since:{" "}
          <span className="text-[#131313CC] text-base font-normal">
            {working_year}
          </span>
        </p>
        <div className="text-center">
            <p className="text-[#131313] text-lg font-semibold">Rating: <span>{rating}</span></p>
          <div className="rating">
            {getCheckedStars().map((checked, idx) => (
              <input
                key={idx}
                type="radio"
                name={`rating-${name}`}
                className="mask mask-star-2 bg-[#BB915B]"
                checked={checked}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

AgentCard.propTypes = {
  data: PropTypes.object,
};
export default AgentCard;
