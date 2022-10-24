import Book from "./Book";

function BookShelf(props) {

    return ( 
        <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
                <Book book={props.books}/>
          </ol>
        </div>
      </div>
    );
    }

    export default BookShelf