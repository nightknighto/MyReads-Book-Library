
export default function Book({ book }) {

    const { shelf, imageLinks, title, authors } = book

    return (
        <div className="book">
            <div className="book-top">
            <div
                className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage:
                    imageLinks.thumbnail,
                }}
            ></div>
            <div className="book-shelf-changer">
                <select>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading" selected={shelf == "currentlyReading" ? "true" : "false"}>
                    Currently Reading
                </option>
                <option value="wantToRead" selected={shelf == "wantToRead" ? "true" : "false"}>Want to Read</option>
                <option value="read" selected={shelf == "read" ? "true" : "false"}>Read</option>
                <option value="none" selected={shelf == "none" ? "true" : "false"}>None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors[0]}</div>
        </div>
    )
}