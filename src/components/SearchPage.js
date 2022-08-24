import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function SearchPage({ books }) {
    const [fetchedBooks, setFetchedBooks] = useState([])

    function fetchQueryBooks(queriedBooks) {
        queriedBooks.forEach( book => {
            let found = books.find( search => search.id === book.id)
            if(found) {
                book.shelf = found.shelf
            }
        })
        setFetchedBooks(queriedBooks);
    }

    return (
        <div className="search-books">
            <SearchBar fetchQueryBooks={fetchQueryBooks} />
            <SearchResults fetchedBooks={fetchedBooks} />
        </div>
    )
}