import React from "react";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

const FormProgress: React.FC<FormProgressProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progress = ((currentStep - 1) / totalSteps) * 100;

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative pt-1 w-4/5   ">
        <div className="flex mb-2 items-center justify-between">
          <div className="w-1/3 text-center">
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full border-2 ${
                currentStep > 1 ? "text-teal-600 bg-teal-200" : "none"
              }`}
            >
              Step 1
            </span>
          </div>
          <div className="w-1/3 text-center">
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full border-2 ${
                currentStep > 2 ? "text-teal-600 bg-teal-200" : "none"
              }`}
            >
              {" "}
              Step 2
            </span>
          </div>
          <div className="w-1/3 text-center">
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full border-2 ${
                currentStep > 3 ? "text-teal-600 bg-teal-200" : "none"
              }`}
            >
              {" "}
              Step 3
            </span>
          </div>
          <div className="text-right"></div>
        </div>
        <div className="flex h-2 mb-4 overflow-hidden">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500  "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FormProgress;
