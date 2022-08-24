import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

export default function SearchBar({ fetchQueryBooks }) {
    const [text, setText] = useState('')

    function handleChange(e) {
        setText(e.target.value);
    }

    useEffect( () => {
        let mounted = true;

        const fetchResults = async () => {
            const data = await BooksAPI.search(text, 20)
            if(mounted) {
                if(Array.isArray(data)) {
                    fetchQueryBooks(data)
                } else {
                    fetchQueryBooks([])
                }
            }
        }
        fetchResults()

        return () => {
            mounted = false
        }
    }, [text])

    return (
        <div className="search-books-bar">
            <Link
            to="/"
            className="close-search"
            >
            Close
            </Link>
            <div className="search-books-input-wrapper">
            <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={text}
                onChange={handleChange}
            />
            </div>
        </div>
    )
}