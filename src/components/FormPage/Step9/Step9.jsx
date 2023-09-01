import "./Step9.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step9 = ({ setStep, formData, setFormData }) => {
  const navigate = useNavigate();
  const [stepData, setStepData] = useState({
    Nome: "",
    Cognome: "",
    Telefono: "",
    Email: "",
  });

  const handleSubmit = (e) => {
    // Fare qui chiamata POST all'API
    e.preventDefault();
    setFormData({ ...formData, ...stepData });
    console.log({ ...formData, ...stepData });
    navigate("/success");
  };

  const handleChange = (e) => {
    setStepData({ ...stepData, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="step9"
      onSubmit={handleSubmit}
      action="POST"
      role="form"
      encType="multipart/form-data"
    >
      <header className="form-header">
        <h1>Con chi abbiamo il piacere di parlare?</h1>
        <h2>
          Solo alcune informazioni su di te, prima di ricevere la tua
          valutazione.
        </h2>
      </header>
      <div className="form-group">
        {[
          { label: "Nome", type: "text" },
          { label: "Cognome", type: "text" },
          { label: "Telefono", type: "tel" },
          { label: "Email", type: "email" },
        ].map((input) => (
          <input
            key={input.label}
            type={input.type}
            name={input.label}
            placeholder={input.label}
            className="form-control"
            value={stepData[input.label]}
            pattern={input.type === "tel" ? "^3[0-9]{9}$" : null}
            onChange={handleChange}
          />
        ))}
      </div>

      <div className="step-buttons">
        <button type="button" onClick={() => setStep(8)}>
          Torna indietro
        </button>
        <button
          type="submit"
          disabled={Object.values(stepData).some((value) => value === "")}
        >
          Richiedi valutazione
        </button>
      </div>
    </form>
  );
};

export default Step9;
