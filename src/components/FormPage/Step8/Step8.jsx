import "./Step8.css";
import uploadIcon from "../../../assets/images/UploadIcon.svg";
import { useState } from "react";
import Dropzone from "react-dropzone";
import imageCompression from "browser-image-compression";

const Step8 = ({ setStep, setFormData, formData }) => {
  const [foto, setFoto] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const arrayFotoCompresse = await Promise.all(
      foto.map(async (foto) => {
        const options = {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 1080,
          useWebWorker: true,
        };
        try {
          const compressedFile = await imageCompression(foto, options);
          return compressedFile;
        } catch (error) {
          console.error("Error compressing photo:", error);
          return null;
        }
      })
    );
    const tutteLeFotoCompresse = arrayFotoCompresse.every(
      (foto) => foto !== null
    );
    if (tutteLeFotoCompresse) {
      setFormData({ ...formData, Foto: arrayFotoCompresse });
      setStep(9);
    } else {
      alert(
        "Si è verificato un errore durante la compressione delle foto, riprova"
      );
    }
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
        <Dropzone onDrop={(acceptedFiles) => setFoto(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Foto della tua auto</p>
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
        <button type="submit" disabled={foto.length < 1}>
          Prossimo step
        </button>
      </div>
    </form>
  );
};

export default Step8;
