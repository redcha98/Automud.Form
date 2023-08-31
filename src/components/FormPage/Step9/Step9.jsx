import "./Step9.css";
import { useState } from "react";

const Step9 = ({ setStep }) => {
  const [formData, setFormData] = useState({
    Nome: "",
    Cognome: "",
    Telefono: "",
    Email: "",
  });

  const handleSubmit = (e) => {
    //Inserire qui la logica per usare l'API
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            pattern={input.type === "tel" ? "[0-9]{10}" : undefined}
            className="form-control"
            value={formData[input.label]}
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
          disabled={Object.values(formData).some((value) => value === "")}
        >
          Richiedi valutazione
        </button>
      </div>
    </form>
  );
};

export default Step9;
