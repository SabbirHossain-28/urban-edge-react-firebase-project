import { useEffect, useState } from "react";
import AgentCard from "./AgentCard/AgentCard";

const TopAgents = () => {
  const [agent, setAgent] = useState([]);

  useEffect(() => {
    fetch(
      "https://sabbirhossain-28.github.io/agent-api-data-hosting/agentData.json"
    )
      .then((res) => res.json())
      .then((data) => setAgent(data));
  }, []);
  return (
    <div className="bg-slate-200 p-8 mb-24 rounded-md">
      <div className="text-center mb-12">
        <h2 data-aos="zoom-out" data-aos-duration="1000" className="text-[#131313] text-3xl font-semibold mb-4">
          Explore Our Experienced Real Estate Agents
        </h2>
        <p data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" className="text-[#131313CC]">
          Discover the perfect match for your real estate needs from our team of
          seasoned professionals. Each agent brings a unique blend of expertise,
          skill, and dedication to ensure your property journey is smooth and
          successful. Browse through their profiles below to find the ideal
          partner for your real estate endeavors.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {agent.map((data, idx) => (
          <AgentCard key={idx} data={data}></AgentCard>
        ))}
      </div>
    </div>
  );
};

export default TopAgents;
