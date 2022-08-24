import "../App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from '../BooksAPI'
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(true);
  const [books, setBooks] = useState([])

  useEffect( () => {

    async function getBooks() {
      let data = await BooksAPI.getAll()
      console.log(data)
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
      {showSearchPage ? (
        <SearchPage />
      ) : (
        <MainPage books={books} changeBookShelf={changeBookShelf} />
      )}
    </div>
  );
}

export default App;
