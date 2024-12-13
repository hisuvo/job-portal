import Lottie from "lottie-react";
import application from "../../assets/application.json";
import { Link, useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import Swal from "sweetalert2";

export default function ApplicationForm() {
  const { id } = useParams();
  const { user } = UseAuth();
  const navigate = useNavigate();

  const submitApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const github = form.github.value;
    const linkdin = form.linkdin.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      application_email: user.email,
      github,
      linkdin,
      resume,
    };

    // console.log(jobApplication);
    fetch("http://localhost:5000/jobs-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("Post Successfull");
        }
        navigate("/my-application");
      });
  };
  return (
    <div className="flex justify-center items-center my-6 md:my-10">
      <div className="card bg-base-100 w-full max-w-[750px] mx-auto shrink-0 border-2 border-blue-100">
        <div className="flex justify-between items-center">
          <form onSubmit={submitApplication} className="card-body">
            <h1 className="text-xl md:text-[2vw] font-bold">Apply Now</h1>

            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkdIn</span>
              </label>
              <input
                type="url"
                name="linkdin"
                placeholder="Linkdin url"
                className="input input-bordered"
                required
              />
            </div>

            {/* photo */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Github</span>
              </label>
              <input
                type="url"
                name="github"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>

            {/* Resume */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume</span>
              </label>
              <input
                type="url"
                name="resume"
                placeholder="Resume url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              {/* <Link to={'/my-application'}>
              </Link> */}
              <button className="btn btn-primary">Submite</button>
            </div>
          </form>
          <div>
            <Lottie
              className="max-w-[350px] hidden md:block mx-auto"
              animationData={application}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
