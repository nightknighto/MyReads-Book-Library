import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function SearchPage() {

    return (
        <div className="search-books">
            <SearchBar />
            <SearchResults />
        </div>
    )
}