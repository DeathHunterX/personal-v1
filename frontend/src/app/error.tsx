"use client";

const Error = ({ error, reset }: any) => {
  return (
    <div className="flex-center size-full flex-col gap-5">
      <p className="text-3xl text-red-500">Something went wrong! </p>
      <p className="text-red-500">{error.toString()}</p>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};

export default Error;
