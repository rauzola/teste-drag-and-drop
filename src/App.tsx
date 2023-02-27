import React, { useState } from "react";
import { DraggableCore, DraggableEvent } from "react-draggable";
import DraggableList from "react-draggable-lists";
import * as S from "./styles";

const arr = [
  {
    id: 1,
    operation: "SUM",
    type: "NUMBER",
    name: "Soma De Domicilio",
  },
  {
    id: 2,
    operation: "AVERAGE",
    type: "NUMBER",
    name: "Rendimento Mensal Médio",
  },
  {
    id: 3,
    operation: "Expression",
    type: "DERIVED",
    name: "Moradores/Domicilios",
  },
  {
    id: 4,
    operation: "COUNT",
    type: "NUMBER",
    name: "Total De Empresas",
  },
  {
    id: 5,
    operation: "MINIMUM",
    type: "NUMBER",
    name: "Mínimo Domicílio",
  },
  {
    id: 6,
    operation: "MAXIMUM",
    type: "NUMBER",
    name: "Máximo Domicílio",
  },
  {
    id: 7,
    operation: "SUM",
    type: "NUMBER",
    name: "Soma De Domicilio",
  },
  {
    id: 8,
    operation: "AVERAGE",
    type: "NUMBER",
    name: "Rendimento Mensal Médio",
  },
];

export function Teste() {
  const [index, setIndex] = useState<number>();

  console.log(index);

  const handleDrag = (e: DraggableEvent, ui: any) => {
    ui.node.style.transform = `scale(0.8)`;
  };

  const handleStop = (e: DraggableEvent, ui: any) => {
    ui.node.style.transform = "";
  };

  return (
    <>
      <div className="container">
        <div>
          <DraggableList width={220} height={150} rowSize={2}>
            {arr.map((item, index) => (
              <DraggableCore
                key={index}
                onDrag={handleDrag}
                onStop={handleStop}
              >
                <S.WrapperItem>
                  <S.WrapperTitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h2>
                        {item.type} {item.id}
                      </h2>
                      <p>{item.operation}</p>
                    </div>
                  </S.WrapperTitle>

                  <h3>{item.name}</h3>
                </S.WrapperItem>
              </DraggableCore>
            ))}
          </DraggableList>
        </div>
      </div>
    </>
  );
}
