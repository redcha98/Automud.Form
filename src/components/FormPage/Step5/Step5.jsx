import "./Step5.css";
import { useState } from "react";

const Step5 = ({ setStep }) => {
  const handleSubmit = (e) => {
    //Inserire qui la logica per usare l'API
    e.preventDefault();
    setStep(6);
  };
  const [selected, setSelected] = useState(null);

  return (
    <form
      className="step5"
      onSubmit={handleSubmit}
      action="POST"
      role="form"
      encType="multipart/form-data"
    >
      <header className="form-header">
        <h1>La tua auto si accende e si guida?</h1>
        <h2>Scegli l’opzione che descrive maggiormente la tua auto.</h2>
      </header>
      <div className="form-group">
        {[
          "Non si accende e non si guida",
          "Si accende ma non si guida",
          "Si accende e si guida",
        ].map((fieldName) => (
          <label key={fieldName} className="form-control">
            <input
              type="radio"
              name="stato-2"
              value={fieldName}
              required
              onChange={(e) => setSelected(e.target.value)}
            />
            {fieldName}
          </label>
        ))}
      </div>
      <div className="step-buttons">
        <button type="button" onClick={() => setStep(4)}>
          Torna indietro
        </button>
        <button type="submit" disabled={!selected}>
          Prossimo step
        </button>
      </div>
    </form>
  );
};

export default Step5;
