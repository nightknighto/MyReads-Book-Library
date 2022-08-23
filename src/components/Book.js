import { useRef } from "react"

export default function Book({ book, changeBookShelf }) {

    const { shelf, imageLinks, title, authors } = book
    const selectRef = useRef(null)

    function handleShelfChange() {
        const shelfValue = selectRef.current.value
        changeBookShelf(book, shelfValue)
    }

    return (
        <div className="book">
            <div className="book-top">
            <div
                className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage:
                    `url('${imageLinks.thumbnail}')`
                }}
            ></div>
            <div className="book-shelf-changer">
                <select ref={selectRef} defaultValue={shelf} onChange={handleShelfChange}>
                    <option value="none" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">
                        Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors[0]}</div>
        </div>
    )
}