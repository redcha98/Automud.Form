import "./Step2.css";
import { useState } from "react";

const Step2 = ({ setStep }) => {
  const [formData, setFormData] = useState({
    Anno: "",
    Marca: "",
    Modello: "",
    Cilindrata: "",
    Alimentazione: "",
    Cambio: "",
  });

  const handleSubmit = (e) => {
    //Inserire qui la logica per usare l'API
    e.preventDefault();
    console.log(formData);
    setStep(3);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="step2"
      onSubmit={handleSubmit}
      action="POST"
      role="form"
      encType="multipart/form-data"
    >
      <header className="form-header">
        <h1>Iniziamo con la valutazione</h1>
        <h2>Compila i dati della tua auto</h2>
      </header>
      <div className="form-group">
        {[
          "Anno",
          "Marca",
          "Modello",
          "Cilindrata",
          "Alimentazione",
          "Cambio",
        ].map((fieldName) => (
          <select
            key={fieldName}
            className="form-control"
            name={fieldName}
            required
            onChange={handleChange}
          >
            <option value="" disabled selected>
              {fieldName}
            </option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        ))}
      </div>

      <button
        type="submit"
        disabled={Object.values(formData).some((value) => value === "")}
      >
        Prossimo step
      </button>
    </form>
  );
};

export default Step2;
