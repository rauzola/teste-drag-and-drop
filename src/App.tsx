import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move
} from "react-grid-dnd";
import "./styles.css";

interface Item {
  id: number;
  name: string;
}

interface Items {
  [key: string]: Item[];
}

export function Teste() {
  const [items, setItems] = useState<Items>({
    left: []
  });

  useEffect(() => {
    const initialItems = localStorage.getItem("items");
    if (initialItems) {
      setItems(JSON.parse(initialItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
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
      return setItems({
        ...items,
        [sourceId]: result[0],
        [targetId]: result[1]
      });
    }

    const result = swap<Item>(items[sourceId], sourceIndex, targetIndex);
    return setItems({
      ...items,
      [sourceId]: result
    });
  }

  return (
    <GridContextProvider onChange={onChange}>
      <div className="container">
        <GridDropZone
          className="dropzone left"
          id="left"
          boxesPerRow={2}
          rowHeight={70}
        >
          {items.left.map(item => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">
                  {item.name[0].toUpperCase()}
                </div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </GridContextProvider>
  );
}
