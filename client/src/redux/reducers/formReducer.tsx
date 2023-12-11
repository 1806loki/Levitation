import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Step1Data } from "../../components/Form/Steps/Step1";
import { Step2Data } from "../../components/Form/Steps/Step2";
import { Step3Data } from "../../components/Form/Steps/Step3";

interface FormState {
  step1Data: Step1Data;
  step2Data: Step2Data;
  step3Data: Step3Data[];
}

const initialState: FormState = {
  step1Data: {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  },
  step2Data: { selectedFiles: [], userLocation: "" },
  step3Data: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStep1Data: (state, action: PayloadAction<Step1Data>) => {
      state.step1Data = action.payload;
      console.log("Reducer", action.payload);
    },
    setStep2Data: (state, action: PayloadAction<Step2Data>) => {
      const serializableStep2Data: Step2Data = {
        ...action.payload,
        selectedFiles: action.payload.selectedFiles.map(
          (file) => new File([file], file.name)
        ),
      };
      state.step2Data = serializableStep2Data;
      console.log("Reducer2", serializableStep2Data);
    },

    setStep3Data: (state, action: PayloadAction<Step3Data[]>) => {
      state.step3Data = action.payload;
      console.log("Reducer3", action.payload);
    },
  },
});

export const { setStep1Data, setStep2Data, setStep3Data } = formSlice.actions;
export default formSlice.reducer;



