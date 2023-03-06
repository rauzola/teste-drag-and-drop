import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";
import "./styles.css";
import * as S from "./styles";

interface Item {
  id: string;
  operation: string;
  content?: string;
  type: string;
  name: string;
  order: number;
}

interface Items {
  [key: string]: Item[];
}

export function Teste() {
  const [items, setItems] = useState<Items>({
    left: [
      {
        id: "task-1",
        operation: "SUM",
        content: "asjdaoijdoiasjd",
        type: "NUMBER",
        name: "1Soma De Domicilio",
        order: 0, // Adicione a propriedade order e inicialize com o índice do item
      },
      {
        id: "task-2",
        operation: "AVERAGE",
        type: "NUMBER",
        name: "2Rendimento Mensal MÃ©dio",
        order: 1,
      },
      {
        id: "task-3",
        operation: "Expression",
        type: "DERIVED",
        name: "3Moradores/Domicilios",
        order: 2,
      },
      {
        id: "task-4",
        operation: "COUNT",
        type: "NUMBER",
        name: "4Total De Empresas",
        order: 3,
      },
    ],
  });

  useEffect(() => {
    console.log(
      "Ordem dos itens:",
      items.left.map((item) => item.id)
    );
  }, [items]);
  
  function onChange(
    sourceId: string | number,
    sourceIndex: number,
    targetIndex: number,
    targetId: string | number
  ) {
    if (targetId) {
      const result = move<Item>(
        items[sourceId],
        items[targetId],
        sourceIndex,
        targetIndex
      );

      // Atualize a ordem dos itens na lista de origem e destino
      const updatedSource = result[0].map((item, index) => ({
        ...item,
        order: index,
      }));
      const updatedTarget = result[1].map((item, index) => ({
        ...item,
        order: index,
      }));
 
      return setItems({
        ...items,
        [sourceId]: updatedSource,
        [targetId]: updatedTarget,
      });
      
    }
    const result = swap<Item>(items[sourceId], sourceIndex, targetIndex);
    return setItems({
      ...items,
      [sourceId]: result,
    });
  }

  return (
    <GridContextProvider onChange={onChange}>
      <div className="container">
        <GridDropZone
          className="dropzone left"
          id="left"
          boxesPerRow={2}
          rowHeight={150}
        >
          {items.left.map((item, index) => (
            <GridItem key={`${item.id}-${item.order}`}>
              {/* Adicione a propriedade order ao key */}
              <S.WrapperItem>
                <S.WrapperTitle>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h2>{item?.type}</h2>
                    <p>
                      {item?.operation === "NONE"
                        ? "Expression"
                        : item?.operation}
                    </p>
                  </div>
                </S.WrapperTitle>
                <h3 title={item?.name}>{item?.name}</h3>
              </S.WrapperItem>
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </GridContextProvider>
  );
}
