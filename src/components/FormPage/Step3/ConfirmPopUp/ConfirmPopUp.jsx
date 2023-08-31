import PopUpImage from "../../../../assets/images/PopUp.svg";
import "./ConfirmPopUp.css";

const ConfirmPopUp = ({ setShowPopUp, setStep }) => {
  return (
    <div className="confirm-popup">
      <img src={PopUpImage} alt="PopUpImage" />
      <h1>Per essere sicuri...</h1>
      <p>
        Controlla il kilometraggio inserito prima di andare avanti, incide molto
        sul valore dell'auto
      </p>
      <div className="confirm-buttons">
        <button
          onClick={() => {
            setShowPopUp(false);
            setStep(4);
          }}
        >
          Sono sicuro!
        </button>
        <button
          onClick={() => {
            setShowPopUp(false);
          }}
        >
          Reimposta kilometri
        </button>
      </div>
    </div>
  );
};

export default ConfirmPopUp;
