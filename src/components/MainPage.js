import OpenSearch from "./OpenSearch"
import Shelf from "./Shelf"

const shelves = [
    {title: "Currently Reading", shelfValue: "currentlyReading"},
    {title: "Want to Read", shelfValue: "wantToRead"},
    {title: "Read", shelfValue: "read"},
]

export default function MainPage({ books, changeBookShelf }) {

    return (
        
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        shelves.map( ({title, shelfValue}) => (
                            <Shelf title={title} shelfValue={shelfValue} books={books} key={shelfValue} changeBookShelf={changeBookShelf} />
                        ))
                    }
                </div>
            </div>
            <OpenSearch />
        </div>
    )
}