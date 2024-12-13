import { Link, useLoaderData, useParams } from "react-router-dom";

export default function JobDetails() {
  const details = useLoaderData();

  return (
    <div className="border-2 m-4 rounded-lg border-blue-100 p-4">
      <h2 className="text-2xl font-semibold font-mono">{details.title}</h2>
      <p>{details.description}</p>
      <Link to={`/application-form/${details._id}`}>
        <button className="btn btn-primary">Apply</button>
      </Link>
    </div>
  );
}
