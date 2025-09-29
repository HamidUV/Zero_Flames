import IndiaMapSVG from "../assets/india.svg?react";

const IndiaMap: React.FC = () => (
  <div className="flex flex-col items-center">
    <div className="w-full max-w-xl">
      <IndiaMapSVG className="w-full h-auto" />
    </div>
    {/* <p className="mt-4 text-gray-700 font-light">
      Services available all over India
    </p> */}
  </div>
);

export default IndiaMap;
