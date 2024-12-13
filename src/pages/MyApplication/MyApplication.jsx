import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import ApplicationTable from "../ApplicationTable/ApplicationTable";

export default function MyApplication() {
  const { user, loading } = UseAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs-application?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, [user?.email]);

  console.log(jobs);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <ApplicationTable key={job._id} job={job} />
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
}
