import React, { useState, useEffect } from 'react'
import BookList from '../components/BookList';
import CreateBookForm from '../components/CreateBookForm';
import UserProfile from '../components/UserProfile';
import { BookService } from '../services/BookService';

const Home = () => {
  const handleAddBook = (newBook) => {
    setBookData(oldBooks => [...oldBooks, newBook]);
  };
  const { GetBooks } = BookService();
  const [isLoading, setIsLoading] = useState(true);
  const [bookData, setBookData] = useState([]);
  // const [error, setError] = useState("")
  useEffect(() => {
    const asyncLoadBooks = async () => { 
      var result = await GetBooks();
      if(result !== undefined && result !== null){
          setBookData(result);
          setTimeout(function () {
              setIsLoading(false);
          }, 1000);
      }
     };
     asyncLoadBooks();
  }, []);

  if (isLoading) {
    return (
        "Loading Data ..."
    )
  } else {
    return (
      <div>
        <h1>Library Web App</h1>
        <UserProfile />
        <h2>Books</h2>
        <CreateBookForm onAddBook={handleAddBook} />
        <BookList books={bookData} />
      </div>
    );
  }
}

export default Home;
