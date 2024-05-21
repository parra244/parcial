import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div>
      <h3>{book.nombre}</h3>
      <p>Autor: {book.autor}</p>
      <p>Fecha de Escritura: {book.fechaEscritura}</p>
      <p>Número de Edición: {book.numeroEdicion}</p>
      <p>Precio: ${book.precio}</p>
      <p>Tipo: {book.tipo}</p>
      <p>Fama del Escritor: {book.famaEscritor}</p>
    </div>
  );
};

export default BookItem;
