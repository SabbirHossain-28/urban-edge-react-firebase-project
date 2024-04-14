import { useParams,useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const loadAllData=useLoaderData();
  const selectedCategoryData=loadAllData.find(signleData=>signleData.id===id);
  const {image,estate_title,description,segment_name,status}=selectedCategoryData;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-gray-200 p-4 rounded-md gap-4">
        <div>
            <h2>{estate_title}</h2>
            <p>Category:{segment_name}</p>
        </div>
        <div className="relative">
            <img src={image} alt="" />
            <p className="absolute top-0 left-0 bg-green-400 px-6 py-1 rounded-br-lg capitalize">{status}</p>
        </div>
        <div className="col-span-2">
            <p><span className="text-lg font-semibold">Description:</span>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
