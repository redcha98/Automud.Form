import "./Step8.css";
import uploadIcon from "../../../assets/images/UploadIcon.svg";
import { useState } from "react";
import Dropzone from "react-dropzone";

const Step8 = ({ setStep }) => {

  const [foto, setFoto] = useState([]);
  const handleSubmit = (e) => {
    //Inserire qui la logica per usare l'API
    e.preventDefault();
    setStep(9);
  };

  return (
    <form
      className="step8"
      onSubmit={handleSubmit}
      action="POST"
      role="form"
      encType="multipart/form-data"
    >
      <header className="form-header">
        <h1>Mostraci la tua auto con qualche foto...</h1>
        <h2>
          Allega alcune foto dell’auto in modo da poter ricevere una valutazione
          accurata.
        </h2>
      </header>
      <div className="form-group">
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Foto auto</p>
                <img src={uploadIcon} alt="upload icon" />
              </div>
            </section>
          )}
        </Dropzone>
      </div>
      <div className="step-buttons">
        <button type="button" onClick={() => setStep(7)}>
          Torna indietro
        </button>
        <button type="submit" 
        // disabled={foto.length === 0}
        >
          Prossimo step
        </button>
      </div>
    </form>
  );
};

export default Step8;
