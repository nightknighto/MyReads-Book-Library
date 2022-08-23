import Book from "./Book"

export default function Shelf({ title, shelfValue, books }) {

    return (
        
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    books.filter( (book) => {
                        book.shelf == shelfValue
                    }).map( book => (
                        <li>
                            <Book book={book} key={book.id} />
                        </li>
                    ))
                }
            </ol>
            </div>
        </div>
    )
}