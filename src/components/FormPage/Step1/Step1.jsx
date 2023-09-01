import "./Step1.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";

const Step1 = ({ setStep, formData, setFormData }) => {
  const navigate = useNavigate();
  const [cap, setCap] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://automud-api-cap.azurewebsites.net/api/cap/${cap}`)
      .then((res) => {
        setLoading(true);
        if (res.data.IsReachable) {
          setFormData({ ...formData, CAP: cap });
          setStep(2);
          setLoading(false);
        } else {
          navigate("/unreachable");
        }
      })
      .catch((err) => {
        setError(true);
      });
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
        <h1>Dove ritireremo la tua auto?</h1>
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
      {loading && <Loader />}
      {error && <span className="form-error">Inserisci un CAP valido</span>}
      <button disabled={cap.length < 5}>Prossimo step</button>
    </form>
  );
};

export default Step1;
