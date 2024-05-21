import React, { useEffect, useState } from 'react';
import bookService from '../services/bookService';
import BookItem from './BookItem';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getAllBooks().then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Lista de Libros</h2>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
