import React, { useState } from 'react';

export function Teste() {
  const [itemPositions, setItemPositions] = useState([]);

  const [items, setItems] = useState([
    {
      id: 1,
      nome: 'Item 1',
      tipo: 'tipo 1',
      descricao: 'Descrição do item 1',
    },
    {
      id: 2,
      nome: 'Item 2',
      tipo: 'tipo 2',
      descricao: 'Descrição do item 2',
    },
    {
      id: 3,
      nome: 'Item 3',
      tipo: 'tipo 3',
      descricao: 'Descrição do item 3',
    },
    {
      id: 4,
      nome: 'Item 4',
      tipo: 'tipo 4',
      descricao: 'Descrição do item 4',
    },
    {
      id: 5,
      nome: 'Item 5',
      tipo: 'tipo 5',
      descricao: 'Descrição do item 5',
    },
    {
      id: 6,
      nome: 'Item 6',
      tipo: 'tipo 6',
      descricao: 'Descrição do item 6',
    },
    {
      id: 7,
      nome: 'Item 7',
      tipo: 'tipo 7',
      descricao: 'Descrição do item 7',
    },
    {
      id: 8,
      nome: 'Item 8',
      tipo: 'tipo 8',
      descricao: 'Descrição do item 8',
    },
  ]);


  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index, coluna) => {
    const itemId = e.dataTransfer.getData("text");
    const itemIndex = items.findIndex((item) => item.id === Number(itemId));
    const newItems = [...items];
    const [item] = newItems.splice(itemIndex, 1);
    
    // Atualiza a posição do item
    item.posicao = coluna;
  
    newItems.splice(index, 0, item);
    setItems(newItems);
  };
  
  const updateItemPosition = (itemId, newPosition) => {
    setItemPositions(prevPositions => {
      const itemPosition = prevPositions.find(pos => pos.id === itemId);
      if (itemPosition) {
        itemPosition.position = newPosition;
        return [...prevPositions];
      } else {
        return [...prevPositions, {id: itemId, position: newPosition}];
      }
    });
  }
  
  
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
          <h3>{item.nome}</h3>
          <p>Tipo: {item.tipo}</p>
          <p>Descrição: {item.descricao}</p>
        </li>
      ))}
    </ul>
  </div>
  <div className="col-2"
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
          <h3>{item.nome}</h3>
          <p>Tipo: {item.tipo}</p>
          <p>Descrição: {item.descricao}</p>
        </li>
      ))}
    </ul>
  </div>
</div>

  </>
  
  );
}