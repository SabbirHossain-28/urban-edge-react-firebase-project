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
    <div className="bg-[#F3F3F3] p-2 rounded-lg shadow-lg lg:flex items-center justify-center gap-6">
      <div className="flex justify-center">
        <img className="rounded-full w-64 h-64" src={image} alt="Agent image" />
      </div>
      <div className="mt-4 text-center lg:text-left">
        <h3 className="text-xl text-[#131313] font-semibold mb-3">{name}</h3>
        <p className="text-[#131313] text-lg font-semibold  border-[#131313]">
          Skills
        </p>
        <ul className="mb-3">
          {skills.map((data, idx) => (
            <li key={idx} className=" text-[#131313CC] text-base font-normal ">
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
        <div className="">
          <p className="text-[#131313] text-lg font-semibold">
            Rating: <span>{rating}</span>
          </p>
          <div className="rating">
            {getCheckedStars().map((checked, idx) => (
              <input
                key={idx}
                type="radio"
                name={`rating-${name}`}
                className="mask mask-star-2 bg-[#BB915B]"
                defaultChecked={checked}
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
