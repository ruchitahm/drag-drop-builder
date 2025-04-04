# Drag-and-Drop Website Builder Prototype

## Working Prototype
- **Link**: https://67f042f19c7c32d82143e6d7--relaxed-gelato-eaefd8.netlify.app/

## Architecture Overview

This application follows a **component-based architecture** using **React** and **React DnD** for a seamless drag-and-drop experience.

### Core Components:
- **Toolbar**: Contains draggable elements like text, image, and button.
- **Canvas**: Drop zone to position and display elements.
- **ElementForm**: Dynamic form to update properties of the selected element.

### Data Flow:
> Drag Element → Drop on Canvas → Update `elements` State → Re-render

---

##  Tools & Technologies

| Tool/Library            | Purpose                                                                 |
|-------------------------|-------------------------------------------------------------------------|
| **React**               | Frontend framework for building the UI                                  |
| **React DnD**           | Drag-and-drop library for React using HTML5 backend                     |
| **JavaScript (ES6+)**   | Main scripting language                                                  |
| **CSS Flexbox**         | Responsive and flexible layout                                           |
| **HTML5 Backend**       | Enables native drag-and-drop functionality                              |

---

## Design Decisions

### 1. Component Modularity
- Promotes clean separation of concerns.
- Easily extendable for new features or element types.

### 2. React DnD
- Provides full control over drag-and-drop logic.
- Integrates well with React's declarative style.

### 3. Form-Based Customization
- Maintains the current UX for element editing via forms.
- Offers intuitive property configuration post-placement.

### 4. React State Hooks
- `useState` manages the list of elements and the currently selected one.
- Simple and scalable for future state management features (undo/redo, etc.).

### 5. Responsive Design
- Flexbox ensures the layout adapts to various screen sizes.
- Easily upgradable to use Tailwind or styled-components for production.

---

## Key Features:

- Drag elements (text, button, image) from the toolbar onto the canvas.
- Select any element and edit its properties using a form.
- Responsive layout working across screen sizes.

## Future Enhancements

- **Undo/Redo Functionality**
- **Support for More Elements** (forms, videos, carousels)
- **Predefined Templates** using JSON
- **Element Grouping & Resizing**
- **Persistent Storage** (LocalStorage or Backend API)
- **Export to HTML/CSS** for production-ready sites

---

## Summary

This prototype transforms the traditional form-based website builder into a modern, interactive, and flexible drag-and-drop system. It bridges intuitive UX with customizable controls, paving the way for a richer user-driven website creation experience.

---

**Made with using React & React DnD**


