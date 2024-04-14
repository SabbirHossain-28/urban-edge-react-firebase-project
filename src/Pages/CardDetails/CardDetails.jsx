import { useParams } from "react-router-dom";

const CardDetails = () => {
    const {id}=useParams()
    return (
        <div>
            <h2>hello {id}</h2>
        </div>
    );
};

export default CardDetails;