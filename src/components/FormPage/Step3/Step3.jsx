import "./Step3.css";
import { useState } from "react";

const Step3 = ({ setStep }) => {
  const [km, setKm] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Inserire qui la logica per usare l'API
    setStep(4);
  };
  return (
    <form
      action="POST"
      role="form"
      encType="multipart/form-data"
      className="step3"
      onSubmit={handleSubmit}
    >
      <header className="form-header">
        <h1>Quanti kilometri ha la tua auto?</h1>
        <h2>Inserisci il numero di kilometri che la tua auto ha percorso.</h2>
      </header>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          id="km"
          placeholder="Kilometri"
          name="km"
          required
          value={km}
          onInput={(e) => {
            setKm(e.target.value);
          }}
        />
      </div>
      <div className="step-buttons">
        <button type="button" onClick={() => setStep(2)}>
          Torna indietro
        </button>
        <button type="submit" disabled={km.length < 1}>
          Prossimo step
        </button>
      </div>
    </form>
  );
};

export default Step3;
