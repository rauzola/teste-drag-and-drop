import React, { useState } from "react";

import * as Styled from "./styles";

interface Item {
  id: number;
  operation: string;
  type: string;
  name: string;
  posicao?: string;
}

interface ItemPosition {
  id: number;
  position: string;
}

export function Teste() {
  const [itemPositions, setItemPositions] = useState<ItemPosition[]>([]);

  const [items, setItems] = useState<Item[]>([
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
    
  ]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData("text/plain", id.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
    coluna: string
  ) => {
    const itemId = e.dataTransfer.getData("text");
    const itemIndex = items.findIndex((item) => item.id === Number(itemId));
    const newItems = [...items];
    const [item] = newItems.splice(itemIndex, 1);
  
    // Atualiza a posição do item
    item.posicao = coluna;
  
    newItems.splice(index + (4 - newItems.length), 0, item);
    setItems(newItems);
  
    // Atualiza a posição do item no estado itemPositions
    updateItemPosition(Number(itemId), coluna);
  };
  

  const updateItemPosition = (itemId: number, newPosition: string) => {
    setItemPositions((prevPositions) => {
      const itemPosition = prevPositions.find((pos) => pos.id === itemId);
      if (itemPosition) {
        itemPosition.position = newPosition;
        return [...prevPositions];
      } else {
        return [...prevPositions, { id: itemId, position: newPosition }];
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="col-1">
          <h2>Coluna 1</h2>
          <ul>
            {items.slice(0, 4).map((item, index) => (
              <li
                key={item.id}
                draggable={true}
                onDragStart={(e) => handleDragStart(e, item.id)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
              >
                <Styled.WrapperItem>
                  <Styled.WrapperTitle>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h2>{item.type} {item.id}</h2>
                      <p>{item.operation}</p>
                      
                    </div>
                  </Styled.WrapperTitle>

                  <h3>{item.name}</h3>
                </Styled.WrapperItem>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="col-2"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, 4)}
        >
          <h2>Coluna 2</h2>
          <ul>
            {items.slice(4, 8).map((item, index) => (
              <li
                key={item.id}
                draggable={true}
                onDragStart={(e) => handleDragStart(e, item.id)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index + 4)}
              >
                <Styled.WrapperItem>
                  <Styled.WrapperTitle>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                    <h2>{item.type} {item.id}</h2>
                      <p>{item.operation}</p>
                    </div>
                    
                  </Styled.WrapperTitle>
                  <h3>{item.name}</h3>
                </Styled.WrapperItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
