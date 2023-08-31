import "./Step7.css";
import { useState } from "react";

const Step7 = ({ setStep }) => {
  const [esterni, setEsterni] = useState("");
  const handleSubmit = (e) => {
    //Inserire qui la logica per usare l'API
    e.preventDefault();
    setStep(8);
  };

  return (
    <form
      className="step7"
      onSubmit={handleSubmit}
      action="POST"
      role="form"
      encType="multipart/form-data"
    >
      <header className="form-header">
        <h1>Come sono gli esterni dell’auto?</h1>
        <h2>Descrivi in poche parole le condizioni degli esterni.</h2>
      </header>
      <div className="form-group">
        <textarea
          name="esterni"
          required
          onChange={(e) => setEsterni(e.target.value)}
          className="form-control"
          placeholder="Non ha graffi, ha una botta..."
        ></textarea>
      </div>
      <div className="step-buttons">
        <button type="button" onClick={() => setStep(6)}>
          Torna indietro
        </button>
        <button type="submit" disabled={esterni.length < 5}>
          Prossimo step
        </button>
      </div>
    </form>
  );
};

export default Step7;
