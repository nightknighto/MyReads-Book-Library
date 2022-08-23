import "../App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from '../BooksAPI'
import MainPage from "./MainPage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
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
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <MainPage books={books} changeBookShelf={changeBookShelf} />
      )}
    </div>
  );
}

export default App;
