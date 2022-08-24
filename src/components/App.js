import "../App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from '../BooksAPI'
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import { Routes, Route } from 'react-router-dom'

function App() {
  const [books, setBooks] = useState([])

  useEffect( () => {

    async function getBooks() {
      let data = await BooksAPI.getAll()
      setBooks(data);
    }
    getBooks()
  }, [])

  function changeBookShelf(book, shelf) {
    let newBooks = [...books]
    newBooks.find( search => search.id === book.id ).shelf = shelf
    setBooks(newBooks)
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/search"
          element={<SearchPage />}
        />
        <Route path="/" exact 
          element={<MainPage books={books} changeBookShelf={changeBookShelf} />}
        />
        <Route path="*"
          element={<h2>Not Found</h2>}
        />
      </Routes>
    </div>
  );
}

export default App;
