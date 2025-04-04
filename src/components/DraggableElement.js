// src/components/DraggableElement.js
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableElement = ({ type, children }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ELEMENT',
        item: { type },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                padding: '10px',
                border: '1px solid #ccc',
                marginBottom: '10px',
                backgroundColor: '#f9f9f9',
                cursor: 'move',
            }}
        >
            {children}
        </div>
    );
};

export default DraggableElement;