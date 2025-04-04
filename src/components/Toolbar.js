// src/components/Toolbar.js
import React from 'react';
import DraggableElement from './DraggableElement';

const Toolbar = () => {
    return (
        <div style={{ width: '200px', padding: '10px', border: '2px solid #ccc' }}>
            <h3>Drag Elements</h3>
            <DraggableElement type="text">Text</DraggableElement>
            <DraggableElement type="button">Button</DraggableElement>
            <DraggableElement type="image">Image</DraggableElement>
        </div>
    );
};

export default Toolbar;