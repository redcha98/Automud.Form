import "./Step4.css";
import { useState } from "react";

const Step4 = ({ setStep, setFormData, formData }) => {
  const handleSubmit = (e) => {
    //Inserire qui la logica per usare l'API
    e.preventDefault();
    setFormData({ ...formData, Stato: selected });
    setStep(5);
  };
  const [selected, setSelected] = useState(null);

  return (
    <form
      className="step4"
      onSubmit={handleSubmit}
      action="POST"
      role="form"
      encType="multipart/form-data"
    >
      <header className="form-header">
        <h1>La tua auto é...</h1>
        <h2>Scegli l’opzione che descrive maggiormente la tua auto.</h2>
      </header>
      <div className="form-group">
        {["Incidentata", "Guasta", "Usata"].map((fieldName) => (
          <label key={fieldName} className="form-control">
            <input
              type="radio"
              name="stato"
              value={fieldName}
              required
              onChange={(e) => setSelected(e.target.value)}
            />
            {fieldName}
          </label>
        ))}
      </div>
      <div className="step-buttons">
        <button type="button" onClick={() => setStep(3)}>
          Torna indietro
        </button>
        <button type="submit" disabled={!selected}>
          Prossimo step
        </button>
      </div>
    </form>
  );
};

export default Step4;
