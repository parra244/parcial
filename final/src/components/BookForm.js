import React, { useState } from 'react';
import bookService from '../services/bookService';

const BookForm = ({ onSave }) => {
  const [book, setBook] = useState({
    nombre: '',
    autor: '',
    fechaEscritura: '',
    numeroEdicion: '',
    precio: '',
    tipo: 'Entretenimiento',
    famaEscritor: 'Media'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bookService.createBook(book).then((response) => {
      onSave(response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input type="text" name="nombre" value={book.nombre} onChange={handleChange} required />
      </div>
      <div>
        <label>Autor</label>
        <input type="text" name="autor" value={book.autor} onChange={handleChange} required />
      </div>
      <div>
        <label>Fecha de Escritura</label>
        <input type="date" name="fechaEscritura" value={book.fechaEscritura} onChange={handleChange} required />
      </div>
      <div>
        <label>Número de Edición</label>
        <input type="number" name="numeroEdicion" value={book.numeroEdicion} onChange={handleChange} required />
      </div>
      <div>
        <label>Precio</label>
        <input type="number" name="precio" value={book.precio} onChange={handleChange} required />
      </div>
      <div>
        <label>Tipo</label>
        <select name="tipo" value={book.tipo} onChange={handleChange}>
          <option value="Entretenimiento">Entretenimiento</option>
          <option value="Pedagógico">Pedagógico</option>
        </select>
      </div>
      <div>
        <label>Fama Escritor</label>
        <select name="famaEscritor" value={book.famaEscritor} onChange={handleChange}>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default BookForm;
