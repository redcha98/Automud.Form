import "./ProgressBar.css";
import WhatsappIcon from "../../assets/images/WhatsappIcon.svg";

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-bar_container">
      <span>{step > 1 ? "Ben fatto.." : "Iniziamo"}</span>
      <div className="progress-bar">
        <div
          className="progress-bar_fill"
          style={{ width: `${((step - 1) / 9) * 100}%` }}
        ></div>
      </div>
      <button>
        <img src={WhatsappIcon} alt="Whatsapp Icon" />
        <span>Valuta con Whatsapp</span>
      </button>
    </div>
  );
};

export default ProgressBar;
