import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function SearchPage() {
    const [fetchedBooks, setFetchedBooks] = useState([])

    function fetchQueryBooks(books) {
        setFetchedBooks(books);
    }

    console.log(fetchedBooks)
    return (
        <div className="search-books">
            <SearchBar fetchQueryBooks={fetchQueryBooks} />
            <SearchResults fetchedBooks={fetchedBooks} />
        </div>
    )
}