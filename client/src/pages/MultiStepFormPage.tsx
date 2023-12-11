/* eslint-disable @typescript-eslint/no-explicit-any */
// MultiStepFormPage.tsx
import React, { useState } from "react";
import Step2 from "../components/Form/Steps/Step2";
import Step3 from "../components/Form/Steps/Step3";
import Step1 from "../components/Form/Steps/Step1";

import FormProgress from "../components/Form/FormProgress/FormProgress";

const MultiStepFormPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleFormSubmit = () => {
    console.log("submitted");
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      <div>
        <FormProgress totalSteps={3} currentStep={currentStep} />
      </div>
      <div>
        {currentStep === 1 && <Step1 onNext={handleNext} />}
        {currentStep === 2 && (
          <Step2 onNext={handleNext} onPrevious={previousStep} />
        )}
        {currentStep === 3 && (
          <Step3 onPrevious={previousStep} onSubmit={handleFormSubmit} />
        )}
      </div>
    </div>
  );
};

export default MultiStepFormPage;
