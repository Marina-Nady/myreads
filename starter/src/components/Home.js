import { useEffect, useState } from "react";
import { getAll } from "../BooksAPI"
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";


function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getAll()
      .then((res) => {
        setBooks(res)
      })
      .catch((err) => {
        console.log(err)
      })

  }, []);
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title="Currently Reading"
              books={books.filter(book => book.shelf === "currentlyReading")} />
            <BookShelf title="Want to Read"
              books={books.filter(book => book.shelf === "wantToRead")} />
            <BookShelf title="Read"
              books={books.filter(book => book.shelf === "read")} />
          </div>
        </div>
        <Link to="/search">
          <div className="open-search">
            <a >Add a book</a>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home