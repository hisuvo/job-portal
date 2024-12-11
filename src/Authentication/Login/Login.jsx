import Lottie from "lottie-react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import logInAnimationData from "../../assets/login.json";

export default function Login() {
  const { user, signIn } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const userData = { email, password };
    console.log(userData);

    // Lign In
    signIn(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-xl md:text-[2vw] font-bold">
              {user ? `Wellcome ${user.displayName || "user"}` : "Sing In Now!"}
            </h1>

            {/* emeil */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>

        {/* lottie animation */}
        <div className="text-center lg:text-left">
          <Lottie
            className="max-w-[350px] mx-auto"
            animationData={logInAnimationData}
          />
        </div>
      </div>
    </div>
  );
}
