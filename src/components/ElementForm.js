import React from 'react';

const ElementForm = ({ element, onUpdate }) => {
  if (!element) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate(element.id, { ...element.properties, [name]: value });
  };

  return (
    <div style={{ padding: '10px', border: '2px solid #ccc' }}>
      <h4>Edit Element</h4>
      {element.type === 'text' && (
        <input
          type="text"
          name="text"
          value={element.properties.text}
          onChange={handleChange}
          placeholder="Enter text"
        />
      )}
      {element.type === 'image' && (
        <input
          type="text"
          name="url"
          value={element.properties.url}
          onChange={handleChange}
          placeholder="Enter image URL"
        />
      )}
      {element.type === 'button' && (
        <input
          type="text"
          name="label"
          value={element.properties.label}
          onChange={handleChange}
          placeholder="Enter button label"
        />
      )}
    </div>
  );
};

export default ElementForm;