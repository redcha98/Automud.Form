import "./Step1.css";
import { useState } from "react";
import axios from "axios";

const Step1 = ({ setStep }) => {
  const [cap, setCap] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Inserire qui la logica per usare l'API
    // const res = await axios.get(
    //   `https://automud-api-cap.azurewebsites.net/api/cap/${cap}`
    // );

    // console.log(res);
    setStep(2);
  };

  return (
    <form
      action="POST"
      role="form"
      encType="multipart/form-data"
      className="step1"
      onSubmit={handleSubmit}
    >
      <header className="form-header">
        <h1>Dove Ritireremo la tua auto?</h1>
        <h2>Inserisci il CAP della città dove si trova la tua auto</h2>
      </header>
      <div className="form-group">
        <input
          type="number"
          className={error ? "form-control error" : "form-control"}
          id="CAP"
          placeholder="CAP"
          name="CAP"
          required
          value={cap}
          onInput={(e) => {
            if (e.target.value.length > 5) {
              e.target.value = e.target.value.slice(0, 5);
            }
            setCap(e.target.value);
          }}
        />
      </div>
      {error && <span className="form-error">Inserisci un CAP valido</span>}
      <button disabled={cap.length < 5}>Prossimo step</button>
    </form>
  );
};

export default Step1;
