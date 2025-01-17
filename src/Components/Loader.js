import React from "react";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center mt-5  items-center">
      <Circles
        height="80"
        width="80"
        color="pink"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
