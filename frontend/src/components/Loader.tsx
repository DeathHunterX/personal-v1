import { AiOutlineLoading } from "react-icons/ai";

const Loader = ({ textClassNames = "" }) => {
  return (
    <div className="flex-center flex-col gap-5">
      <div className="animate-spin ">
        <AiOutlineLoading size={30} />
      </div>
      <p className={textClassNames}>Loading...</p>
    </div>
  );
};

export default Loader;
