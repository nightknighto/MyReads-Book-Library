import Book from "./Book"

export default function SearchResults({ fetchedBooks }) {

    console.log(fetchedBooks)
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {
                    fetchedBooks.map( book => (
                        <li key={book.id}>
                            <Book book={book} />
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}