// Step2.tsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setStep2Data } from "../../../redux/reducers/formReducer";
import { RootState } from "../../../redux/store";

interface Step2Props {
  onNext: () => void;
  onPrevious: () => void;
}

export interface Step2Data {
  selectedFiles: File[];
  userLocation: string | null;
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const step2Data = useSelector((state: RootState) => state.form.step2Data);
  const [formData, setFormData] = useState<Step2Data>({
    selectedFiles: step2Data.selectedFiles || [],
    userLocation: step2Data.userLocation || null,
  });
  const { selectedFiles, userLocation } = formData;

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const files = event.target.files;
    if (files) {
      const fileList = Array.from(files);

      if (formData.selectedFiles.length + fileList.length <= 3) {
        setFormData((prevData) => ({
          ...prevData,
          selectedFiles: [...prevData.selectedFiles, ...fileList],
        }));
      } else {
        toast.error("You can only upload up to 3 files");
        event.target.value = "";
      }
    }
  };

  useEffect(() => {
    const fetchLocation = async (): Promise<void> => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }
        );

        const { latitude, longitude } = position.coords;
        setFormData((prevData) => ({
          ...prevData,
          userLocation: `Latitude: ${latitude}, Longitude: ${longitude}`,
        }));
        console.log(formData.selectedFiles, formData.userLocation);
      } catch (error) {
        console.error("Error getting geolocation:", error);
        setFormData((prevData) => ({
          ...prevData,
          userLocation: "Unable to retrieve location",
        }));
        toast.error("Error collecting geolocation");
      }
    };

    if (step2Data.selectedFiles && step2Data.selectedFiles.length > 0) {
      setFormData({
        selectedFiles: step2Data.selectedFiles,
        userLocation: step2Data.userLocation,
      });
    } else {
      if (navigator.geolocation) {
        fetchLocation();
        toast.success("Geolocation collected successfully!");
      } else {
        setFormData((prevData) => ({
          ...prevData,
          userLocation: "Geolocation is not supported by your browser",
        }));
        toast.error("Geolocation is not supported by your browser");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step2Data.selectedFiles]);

  const handleSubmit = () => {
    dispatch(setStep2Data(formData));
    onNext();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 h-96 bg-white shadow-md rounded-md flex flex-col justify-evenly">
      <div className="mb-4">
        <label
          htmlFor="file"
          className="block text-sm font-medium text-gray-700"
        >
          Choose files to upload
        </label>
        <input
          name="file"
          type="file"
          onChange={handleFileChange}
          multiple
          accept=".png, .pdf"
          className="mt-1 p-2 border rounded-md"
        />
        {selectedFiles.length > 3 && (
          <p className="text-red-500">You can only upload up to 3 files</p>
        )}
        <ul>
          {selectedFiles.map((selectedFile) => (
            <li key={selectedFile.lastModified}>{selectedFile.name}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-medium">Geo-Location</h4>
        <span>{userLocation}</span>
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
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
