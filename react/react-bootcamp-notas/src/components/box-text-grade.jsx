import React from "react";
import "../styles/global.css";
const BoxTextGrade = ({ nota, id, onChangeNota }) => {

  const getText = (id) => {
    if (id === 1) {
      return "Módulo 01 - Fundamentos (0 - 100)";
    }
    if (id === 2) {
      return "Módulo 02 - Angular (0 - 100)";
    }
    if (id === 3) {
      return "Módulo 03 - React (0 - 100)";
    }
    if (id === 4) {
        return "Módulo 04 - Vue (0 - 100)";
    }
    if (id === 5) {
        return "Módulo 05 - Desafio Final (0 - 100)";
    }
  };

  return <div className="notas-individuais">
      <span>{getText(id)} </span>
      <input className={nota >= 60 ? 'pass' : 'failed'} min="0" max="100" type="number" value={nota} onChange={e => onChangeNota(id, e.target.value)}></input>
      </div>;
};

export default BoxTextGrade;
