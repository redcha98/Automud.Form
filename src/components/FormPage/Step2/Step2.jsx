import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Step2 = ({ setStep, formData, setFormData }) => {
  const [targa, setTarga] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fare qui chiamata POST all'API
    if (!/^[a-zA-Z]{2}[0-9]{3}[a-zA-Z]{2}$/.test(targa)) {
      setError(true);
      document.getElementById("targa").classList.add("error");
      return;
    }

    setFormData({ ...formData, Targa: targa });
    setStep(3);
  };
  return (
    <motion.form
      action="POST"
      role="form"
      encType="multipart/form-data"
      className="step2"
      onSubmit={handleSubmit}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="form-header">
        <h1>Iniziamo con la valutazione</h1>
        <h2>Inserisci la targa della tua auto.</h2>
      </header>
      <div className="form-group">
        <input
          type="text"
          className={error ? "form-control error" : "form-control"}
          id="targa"
          placeholder="Targa"
          name="targa"
          required
          value={targa}
          onInput={(e) => {
            if (e.target.value.length > 7) {
              e.target.value = e.target.value.slice(0, 7);
            }
            setTarga(e.target.value);
          }}
        />
      </div>
      {error && <span className="form-error">Inserisci una targa valida</span>}
      <button disabled={targa.length < 7}>Prossimo step</button>
    </motion.form>
  );
};

export default Step2;
