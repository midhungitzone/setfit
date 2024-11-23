import Image from "next/image";

export default function Datemodal() {
  return (
<div className="modal-overlay" id="modalOverlay">
  <div className="modal">
    <button className="close-modal">
      ✕
    </button>
    <input type="date" className="date-selector" id="dateInput" />
    <button className="add-session">
      Add Date
    </button>
  </div>
</div>


  );
}


