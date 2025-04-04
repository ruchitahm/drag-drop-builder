import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import ElementForm from './components/ElementForm';

const App = () => {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const handleDropElement = (item) => {
    const newElement = {
      id: Date.now(),
      type: item.type,
      properties: {
        text: item.type === 'text' ? 'Sample Text' : '',
        url: item.type === 'image' ? 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=1024x1024&w=is&k=20&c=d1zu5oXbrdTrk2AtTyUtvnWLF7ZeIbTgqSXabU4ABi4=' : '',
        label: item.type === 'button' ? 'Click Me' : '',
      },
    };
    setElements((prev) => [...prev, newElement]);
  };

  const handleSelectElement = (id) => {
    setSelectedId(id);
  };

  const handleUpdateElement = (id, newProps) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, properties: newProps } : el))
    );
  };

  const selectedElement = elements.find((el) => el.id === selectedId);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Toolbar />
        <Canvas
          elements={elements}
          onDropElement={handleDropElement}
          onSelectElement={handleSelectElement}
          selectedId={selectedId}
        />
        <ElementForm element={selectedElement} onUpdate={handleUpdateElement} />
      </div>
    </DndProvider>
  );
};

export default App;