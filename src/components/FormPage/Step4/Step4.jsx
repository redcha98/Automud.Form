import "./Step4.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Step4 = ({ setStep, setFormData, formData }) => {
  const handleSubmit = (e) => {
    //Inserire qui la logica per usare l'API
    e.preventDefault();
    setFormData({ ...formData, Stato: selected });
    setStep(5);
  };
  const [selected, setSelected] = useState(null);

  return (
    <motion.form
      className="step4"
      onSubmit={handleSubmit}
      action="POST"
      role="form"
      encType="multipart/form-data"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="form-header">
        <h1>La tua auto é...</h1>
        <h2>Scegli l’opzione che descrive maggiormente la tua auto.</h2>
      </header>
      <div className="form-group">
        {[
          { value: 10, label: "Incidentata" },
          { value: 20, label: "Guasta" },
          { value: 30, label: "Usata" },
        ].map((field) => (
          <label key={field.value} className="form-control">
            <input
              type="radio"
              name="stato"
              value={field.value}
              required
              onChange={(e) => setSelected(e.target.value)}
            />
            {field.label}
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
    </motion.form>
  );
};

export default Step4;
