import { useLoaderData } from "react-router-dom";

export default function JobDetails() {
  const details = useLoaderData();

  return (
    <div>
      <h2>{details.title}</h2>
      <p>{details.description}</p>
    </div>
  );
}
