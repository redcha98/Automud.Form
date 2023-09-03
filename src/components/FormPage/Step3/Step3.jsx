import "./Step3.css";
import { useState } from "react";
import ConfirmPopUp from "./ConfirmPopUp/ConfirmPopUp";
import { motion } from "framer-motion";

const Step3 = ({ setStep, setFormData, formData }) => {
  const [km, setKm] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Inserire qui la logica per usare l'API
    if (km < 5000 || km > 200000) {
      setShowPopUp(true);
    } else {
      setFormData({ ...formData, Km: km });
      setStep(4);
    }
  };
  return (
    <>
      {showPopUp && <div className="backdrop"></div>}
      <motion.form
        action="POST"
        role="form"
        encType="multipart/form-data"
        className="step3"
        onSubmit={handleSubmit}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
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
      </motion.form>
      {showPopUp && (
        <ConfirmPopUp
          setShowPopUp={setShowPopUp}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          km={km}
        />
      )}
    </>
  );
};

export default Step3;
