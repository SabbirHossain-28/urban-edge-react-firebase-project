import { useParams, useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const loadAllData = useLoaderData();
  const selectedCategoryData = loadAllData.find(
    (signleData) => signleData.id === id
  );
  const {
    image,
    estate_title,
    description,
    segment_name,
    status,
    price,
    area,
    location,
    facilities,
    other_information,
  } = selectedCategoryData;
  return (
    <div className="mt-12 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-slate-200 p-6 rounded-md gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-3">{estate_title}</h2>
          <p className="font-semibold">
            Category:<span className="font-normal">{segment_name}</span>
          </p>
          <p className="font-semibold mb-2">
            Location: <span className="font-normal">{location}</span>
          </p>
          <p className="font-semibold mb-2">
            Facilities:
            {facilities.map((data, idx) => (
              <li className="font-normal" key={idx}>
                {data}
              </li>
            ))}
          </p>
          {Object.entries(other_information).map(([key, value]) => (
            <p className="capitalize font-semibold" key={key}>
              {key}: <span className="font-normal">{value}</span>
            </p>
          ))}
          <p className="text-lg font-semibold mt-2">
            Price: <span>{price}</span>
          </p>
        </div>
        <div className="relative">
          <img
            className="rounded-lg w-full h-72"
            src={image}
            alt="property-image"
          />
          <p className="absolute top-0 left-0 bg-[#BB915B] px-6 py-1 rounded-br-lg rounded-tl-lg capitalize text-white font-medium">
            For {status}
          </p>
          <p className="absolute top-0 right-0 bg-[#BB915B] px-6 py-1 rounded-bl-lg rounded-tr-lg text-white font-medium">
            Area:{area}
          </p>
        </div>
        <div className="lg:col-span-2 md:col-span-2">
          <p className="text-justify">
            <span className="text-lg font-semibold">Description:</span>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
