import React, { useState } from "react";
import BoxTextGrade from "./box-text-grade";

import "../styles/global.css";

const NotasAtuais = () => {
  const [grades, setGrades] = useState([
    {
      id: 1,
      nota: 60,
    },
    {
      id: 2,
      nota: 61,
    },
    {
      id: 3,
      nota: 59,
    },
    {
      id: 4,
      nota: 62,
    },
    {
      id: 5,
      nota: 60,
    },
  ]);

  const calculateTotal = () => {
    const total = grades.reduce((total, grade) => total + grade.nota, 0);

    return total;
  };

  const calculeMediaApproved = () => {
    const hasUnder60 = grades.filter((grade) => grade.nota < 60);
    if (hasUnder60.length > 0) {
      return " Não";
    } else {
      return " Sim";
    }
  };

  const handerChangeNota = (id, nota) => {
      setGrades(
        grades.map((grade) =>
          grade.id === id ? { ...grade, nota: parseInt(nota) } : grade
        )
      );
  };
  const renderCompilationGrades = () => {
    return (
      <div className="calculos">
        <span>Cálculos</span>
        <div className="card-compilation">
          <span>Nota total: {calculateTotal()}</span>
          <span>Percentual total: {calculateTotal() / 5}</span>
          <span>
            Aprovação pela média (60%)?
            <span
              className={calculeMediaApproved() === " Sim" ? "pass" : "failed"}
            >
              {calculeMediaApproved()}
            </span>
          </span>
          <span>Aprovação pelo percentual total (70%)?
          <span
              className={calculateTotal() / 5 >= 70 ? "pass" : "failed"}
            >
              {calculateTotal() / 5 >= 70 ? " Sim" : " Não"}
            </span>
          </span>
        </div>
      </div>
    );
  };

  const renderAllboxes = () => {
    return (
      <>
        <div className="estilo-pagina">
          <div className="notas-por-modulo">
            <span>Notas atuais</span>
            {grades.map((grade) => (
              <BoxTextGrade
                key={grade.id}
                nota={grade.nota}
                id={grade.id}
                onChangeNota={(id, nota) => handerChangeNota(id, nota)}
              />
            ))}
          </div>
          <div className="aprovacao">{renderCompilationGrades()}</div>
        </div>
      </>
    );
  };

  return <div>{renderAllboxes()}</div>;
};

export default NotasAtuais;
