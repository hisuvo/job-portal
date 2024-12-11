import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

export default function HotJobs() {
  const [hotJobs, setHotJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setHotJobs(data);
      });
  }, []);

  return (
    <div className="px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hotJobs.slice(0, 8).map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}
