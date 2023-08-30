import "./FormPage.css";
import Header from "../../components/Header/Header";
import Step1 from "../../components/FormPage/Step1/Step1";
import Step2 from "../../components/FormPage/Step2/Step2";
import Step3 from "../../components/FormPage/Step3/Step3";
import Step4 from "../../components/FormPage/Step4/Step4";
import Step5 from "../../components/FormPage/Step5/Step5";
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
        {step === 3 && <Step3 setStep={setStep} />}
        {step === 4 && <Step4 setStep={setStep} />}
        {step === 5 && <Step5 setStep={setStep} />}
        <ProgressBar step={step} setStep={setStep} />
      </main>
    </div>
  );
}

export default FormPage;
