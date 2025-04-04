// src/components/Canvas.js
import React from 'react';
import { useDrop } from 'react-dnd';

const Canvas = ({ elements, onDropElement, onSelectElement, selectedId }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ELEMENT',
    drop: (item) => onDropElement(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        padding: '10px',
        border: '2px dashed #ccc',
        minHeight: '500px',
        background: isOver ? '#f0f0f0' : '#fff',
        position: 'relative',
      }}
    >
         <p>Drop elements here</p>
      {elements.map((el) => (
        <div
          key={el.id}
          style={{
            border: el.id === selectedId ? '2px solid blue' : '1px solid #aaa',
            padding: '8px',
            marginBottom: '10px',
            cursor: 'pointer',
          }}
          onClick={() => onSelectElement(el.id)}
        >
          {el.type === 'text' && <p>{el.properties.text}</p>}
          {el.type === 'image' && (
            <img src={el.properties.url} alt="" width={150} />
          )}
          {el.type === 'button' && (
            <button>{el.properties.label}</button>
          )}
        </div>
      ))}

           
        </div>
    );
};

export default Canvas;