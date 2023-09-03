import "./Step7.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Step7 = ({ setStep, setFormData, formData }) => {
  const [esterni, setEsterni] = useState("");
  const handleSubmit = (e) => {
    //Inserire qui la logica per usare l'API
    e.preventDefault();
    setFormData({ ...formData, Esterni: esterni });
    setStep(8);
  };

  return (
    <motion.form
      className="step7"
      onSubmit={handleSubmit}
      action="POST"
      role="form"
      encType="multipart/form-data"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
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
    </motion.form>
  );
};

export default Step7;
