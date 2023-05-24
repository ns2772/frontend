import React from 'react';

const BookList = ({ books }) => {

  return (
    <table border={2}>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>ISBN</th>
        <th>PublicationYear</th>
      </tr>
      {books.map((book, index) => (
        <tr>
          <th>{book.title}</th>
          <th>{book.author}</th>
          <th>{book.isbn}</th>
          <th>{book.publicationYear}</th>
        </tr>
      ))}
    </table>
  );
};

export default BookList;
