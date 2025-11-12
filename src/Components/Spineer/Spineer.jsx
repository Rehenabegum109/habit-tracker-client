import React from "react";
import { Oval } from "react-loader-spinner";




const Spinner = () => {
  return (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Spinner;
