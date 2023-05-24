import React, { useState } from 'react';
// import axios from 'axios';
import { BookService } from '../services/BookService';

const CreateBookForm = ({ onAddBook }) => {
  const { CreateBook } = BookService();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publicationYear, setPublicationYear] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let book = {title:title,author:author,isbn:isbn,publicationYear:publicationYear}
      const response = await CreateBook(book);
      debugger;
      const newBook = response.data;
      debugger;
      onAddBook(newBook);
      setTitle('');
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
       <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
       <input
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
       <input
        type="text"
        placeholder="Publication Year"
        value={publicationYear}
        onChange={(e) => setPublicationYear(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default CreateBookForm;
