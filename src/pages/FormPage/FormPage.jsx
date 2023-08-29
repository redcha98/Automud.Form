import "./FormPage.css";
import Header from "../../components/Header/Header";
import Step1 from "../../components/FormPage/Step1/Step1";
import Step2 from "../../components/FormPage/Step2/Step2";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useState } from "react";

function FormPage() {
  const [step, setStep] = useState(1);
  return (
    <div className="form-page">
      <Header />
      <main className="form-container">
        {step === 1 && <Step1 setStep={setStep} />}
        {step === 2 && <Step2 setStep={setStep} />}
        <ProgressBar step={step} />
      </main>
    </div>
  );
}

export default FormPage;
