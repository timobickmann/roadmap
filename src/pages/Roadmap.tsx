import RoadmapSvg from "../components/RoadmapSvg";

function Roadmap() {
  return (
    <>
      <div className="flex flex-col items-center lg:mr-40">
        <h1 className="text-9xl">WIP</h1>

        <RoadmapSvg />
      </div>
      {/* <div className="fixed w-1/3 h-screen z-50 top-0 right-0 bg-base-200 flex justify-center items-center">
        <p className="w-10">WIP popup to show resources when clicking on a roadmap box</p></div> */}
    </>
  );
}

export default Roadmap;
