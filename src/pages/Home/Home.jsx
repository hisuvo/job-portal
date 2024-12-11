import Banner from "./Banner/Banner";
import HotJobs from "./HotJobs/HotJobs";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="my-8 md:my-16">
        <HotJobs />
      </div>
    </div>
  );
}
