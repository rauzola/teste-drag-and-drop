import Draggable, { DraggableCore } from "react-draggable";
import DraggableList from "react-draggable-lists";
import react, { useState } from "react";
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
  const [index, setIndex] = useState();

  console.log(index);

  return (
    <>
      <div className="container">
        <div >
          <DraggableList
            width={220}
            height={150}
            rowSize={2}
          >
            {arr.map((item, index) => (
           
                <S.WrapperItem key={index}>
                  <S.WrapperTitle>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h2>
                        {item.type} {item.id}
                      </h2>
                      <p>{item.operation}</p>
                    </div>
                  </S.WrapperTitle>

                  <h3>{item.name}</h3>
                </S.WrapperItem>
              
            ))}
          </DraggableList>
        </div>
      </div>
    </>
  );
}
