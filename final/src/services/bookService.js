import axios from 'axios';

const API_URL = 'http://localhost:8080/api/books';

const getAllBooks = () => {
  return axios.get(API_URL);
};

const createBook = (book) => {
  return axios.post(API_URL, book);
};

export default {
  getAllBooks,
  createBook,
};
