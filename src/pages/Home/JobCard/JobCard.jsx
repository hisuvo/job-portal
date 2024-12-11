import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    company_logo,
  } = job;

  return (
    <>
      <div className="card card-compact bg-base-100  border-2 border-blue-100">
        <div className="flex gap-2 m-2">
          <figure>
            <img className="w-[52px]" src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h2 className="text-lg font-semibold">{company}</h2>
            <p className="font-mono flex gap-1 items-center">
              <FaLocationPin /> {location}
            </p>
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((key, index) => (
              <p
                className="btn btn-xs bg-blue-50 text-xs font-mono font-semibold text-center"
                key={index}
              >
                {key}
              </p>
            ))}
          </div>
          <div className="card-actions items-center justify-between">
            <h3 className="font-semibold ">
              $<span>{salaryRange.min}</span> - $<span>{salaryRange.max}</span>{" "}
              <span>dbt</span>
            </h3>
            <Link to={`/jobs/${_id}`} className="btn btn-md btn-primary">
              Read Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const x = {
  _id: "6759c3de3783767a22333ed7",
  title: "Finance Manager",
  location: "Gulshan, Dhaka",
  jobType: "Part-Time",
  category: "Finance",
  applicationDeadline: "2024-12-20",
  salaryRange: {
    min: 50000,
    max: 70000,
    currency: "bdt",
  },
  description:
    "We are hiring a Finance Manager to oversee financial operations, budgeting, and reporting.",
  company: "Local Inch Ltd",
  requirements: ["QuickBooks", "SAP", "Excel", "SQL"],
  responsibilities: [
    "Manage budgets",
    "Prepare financial reports",
    "Ensure regulatory compliance",
  ],
  status: "active",
  hr_email: "finance.hr@securefinance.com",
  hr_name: "Md. Alamgir",
  company_logo: "https://i.ibb.co/T1XRmbX/linkedin.png",
};
