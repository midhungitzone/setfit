import Image from "next/image";

export default function Datafields() {
  return (
<div className="datafields-container">
  <div className="datafields-dropdown">
    <input type="text" placeholder="chest" className="datafields-dropdown-input" />
    <span className="datafields-dropdown-arrow">▼</span>
  </div>
  <button className="datafields-add-session-btn">
    add workout session
    <span className="datafields-plus-icon">+</span>
  </button>
  <div className="datafields-dropdown">
    <input type="text" placeholder="chest" className="datafields-dropdown-input" />
    <span className="datafields-dropdown-arrow">▲</span>
    <div className="datafields-dropdown-content">
      <div className="datafields-dropdown-item">muscle group 1</div>
      <div className="datafields-dropdown-item">muscle group 1</div>
      <div className="datafields-dropdown-item">muscle group 1</div>
      <div className="datafields-dropdown-item">muscle group 1</div>
    </div>
  </div>
</div>

  );
}
