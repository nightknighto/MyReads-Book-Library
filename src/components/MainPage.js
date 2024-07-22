import OpenSearch from "./OpenSearch"
import Shelf from "./Shelf"

const shelves = [
    {title: "Currently Reading", shelfValue: "currentlyReading"},
    {title: "Want to Read", shelfValue: "wantToRead"},
    {title: "Read", shelfValue: "read"},
]

export default function MainPage({ books }) {

    return (
        
        <div className="list-books">
            <div className="list-books-title">
                <h1>Ahmed Atwa Site</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        shelves.map( ({title, shelfValue}) => (
                            <Shelf title={title} shelfValue={shelfValue} books={books} key={shelfValue} />
                        ))
                    }
                </div>
            </div>
            <OpenSearch />

            <center>
                <form name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>Name <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Email <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </center>

        </div>
    )
}
