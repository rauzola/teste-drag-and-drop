import React, { useState } from 'react';

export function Teste() {
  const [items, setItems] = useState([
    {
      id: '1',
      nome: 'Item 1',
      tipo: 'Tipo 1',
      descricao: 'Descrição do item 1'
    },
    {
      id: '2',
      nome: 'Item 2',
      tipo: 'Tipo 2',
      descricao: 'Descrição do item 2'
    },
    {
      id: '3',
      nome: 'Item 3',
      tipo: 'Tipo 1',
      descricao: 'Descrição do item 3'
    },
    {
      id: '4',
      nome: 'Item 4',
      tipo: 'Tipo 2',
      descricao: 'Descrição do item 4'
    },
   
  ]);

  const handleDrop = (e) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('item_id');
  
    // Encontrar o item arrastado na lista original
    const item = items.find((item) => item.nome === itemId);
  
    // Clonar a lista original
    const newItems = [...items];
  
    // Encontrar o índice do item arrastado na lista clonada
    const index = newItems.findIndex((item) => item.nome === itemId);
  
    // Remover o item arrastado da lista clonada
    newItems.splice(index, 1);
  
    // Encontrar o índice do item solto na lista clonada
    const dropIndex = Number(e.target.dataset.index);
  
    // Inserir o item arrastado na posição do item solto na lista clonada
    newItems.splice(dropIndex, 0, item);
  
    // Atualizar o estado da lista de itens e re-renderizar o componente
    setItems(newItems, null);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="columns-container">
        <div className="column">
          <h2>Coluna 1</h2>
          <ul className="item-list" onDrop={handleDrop} onDragOver={handleDragOver}>
            {items.slice(0, 2).map((item, index) => (
              <li
                key={item.id}
                className="item"
                draggable="true"
                onDragStart={(e) => e.dataTransfer.setData('item_id', item.nome)}
                data-index={index}
              >
                <h3>{item.nome}</h3>
                <p>
                  <strong>Tipo:</strong> {item.tipo}
                </p>
                <p>
                  <strong>Descrição:</strong> {item.descricao}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2>Coluna 2</h2>
          <ul className="item-list" onDrop={handleDrop} onDragOver={handleDragOver}>
            {items.slice(2, 4).map((item, index) => (
              <li
                key={item.id}
                className="item"
                draggable="true"
                onDragStart={(e) => e.dataTransfer.setData('item_id', item.nome)}
                data-index={index}
              >
                <h3>{item.nome}</h3>
                <p>
                  <strong>Tipo:</strong> {item.tipo}
                </p>
                <p>
                  <strong>Descrição:</strong> {item.descricao}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}