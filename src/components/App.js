import "../App.css";
import React, { useEffect, useState } from "react";
import * as BooksAPI from '../BooksAPI'
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import { Routes, Route } from 'react-router-dom'

export const ChangeBookShelfContext = React.createContext({})

function App() {
  const [books, setBooks] = useState([])

  useEffect( () => {

    async function getBooks() {
      let data = await BooksAPI.getAll()
      setBooks(data);
    }

    // if there is stored data, use instead
    let storedBooks = sessionStorage.getItem('books')
    if(storedBooks) {
      try{
        setBooks(JSON.parse(storedBooks))
      } catch {
        getBooks()
      }
    } else {
      getBooks()
    }
  }, [])

  // store the data in session storage
  // so that it persists through page refreshes
  useEffect( () => {
    sessionStorage.setItem('books', JSON.stringify(books))
  }, [books])

  function changeBookShelf(book, shelf) {
    let newBooks = [...books]
    let foundBook = newBooks.find( search => search.id === book.id )
    if (foundBook) {
      foundBook.shelf = shelf
      if(shelf === 'none') {
        newBooks.splice(newBooks.indexOf(foundBook), 1)
      }
    } else {
      book.shelf = shelf
      newBooks.push(book);
    }
    setBooks(newBooks)
  }

  return (
    <ChangeBookShelfContext.Provider value={changeBookShelf}>
      <div className="app">
        <Routes>
          <Route path="/search"
            element={<SearchPage books={books} />}
          />
          <Route path="/" exact 
            element={<MainPage books={books} />}
          />
          <Route path="*"
            element={<h2>Not Found</h2>}
          />
        </Routes>
      </div>
    </ChangeBookShelfContext.Provider>
  );
}

export default App;
