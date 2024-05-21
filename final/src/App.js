import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Lista de Libros</Link>
            </li>
            <li>
              <Link to="/crear">Crear Libro</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/crear" element={<BookForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
