import "./Step2.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Step2Data } from "./Step2Data";

const Step2 = ({ setStep, formData, setFormData }) => {
  const [stepData, setStepData] = useState({
    Anno: "",
    Marca: "",
    Modello: "",
    Cilindrata: "",
    Alimentazione: "",
    Cambio: "",
  });

  const [marche, setMarche] = useState([]);
  const [modelli, setModelli] = useState([]);

  useEffect(() => {
    const getMarche = async () => {
      const res = await axios.get(
        "https://automud-api-vehicle.azurewebsites.net/api/make"
      );
      setMarche(res.data);
    };
    getMarche();
  }, []);

  useEffect(() => {
    const getModelli = async () => {
      if (stepData.Marca === "") return;
      const marca = marche.find((marca) => marca.Name === stepData.Marca);
      const res = await axios.get(
        `https://automud-api-vehicle.azurewebsites.net/api/make/${marca.Id}/model`
      );
      setModelli(res.data);
    };
    getModelli();
  }, [stepData.Marca]);

  const handleSubmit = (e) => {
    //Inserire qui la logica per usare l'API
    e.preventDefault();
    setFormData({ ...formData, ...stepData });
    setStep(3);
  };

  const handleChange = (e) => {
    setStepData({ ...stepData, [e.target.name]: e.target.value });
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
        {Step2Data.map((data, index) => {
          return (
            <select
              key={index}
              className="form-control"
              id={data.name}
              name={data.name}
              required
              onChange={handleChange}
            >
              <option value="" disabled selected>
                {data.name}
              </option>
              {data.name === "Marca" &&
                marche.map((marca) => {
                  return (
                    <option key={marca.Id} value={marca.Name}>
                      {marca.Name}
                    </option>
                  );
                })}
              {data.name === "Modello" &&
                modelli.map((modello) => {
                  return (
                    <option key={modello.Id} value={modello.Name}>
                      {modello.Name}
                    </option>
                  );
                })}
              {data.options.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </select>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={Object.values(stepData).some((value) => value === "")}
      >
        Prossimo step
      </button>
    </form>
  );
};

export default Step2;
