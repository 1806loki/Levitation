/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { setStep3Data } from "../../../redux/reducers/formReducer";

interface Step3Props {
  onPrevious: () => void;
  onSubmit: () => void;
}

export interface Step3Data {
  value: string;
  label: string;
}

const Step3: React.FC<Step3Props> = ({ onPrevious, onSubmit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Step3Data[]>([]);
  const options: Step3Data[] = [
    { value: "option1", label: "option1" },
    { value: "option2", label: "option2" },
    { value: "option3", label: "option3" },
    { value: "option4", label: "option4" },
    { value: "option5", label: "option5" },
    { value: "option6", label: "option6" },
    { value: "option7", label: "option7" },
  ];

  const handleSelectChange = (selected: any) => {
    if (selected) {
      setFormData(selected);
    }
    console.log(formData);
  };

  const handleOnSubmit = () => {
    dispatch(setStep3Data(formData));
    onSubmit();
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <div className="mb-4 flex flex-col h-96 justify-between">
        <div className="mb-4">
          <label htmlFor="Select">Select an option</label>
          <Select
            name="Select"
            options={options}
            value={formData}
            onChange={handleSelectChange}
            isMulti
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onPrevious}
          >
            Previous
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleOnSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
