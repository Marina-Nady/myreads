import { useEffect,useState  } from "react";
import {getAll} from "../BooksAPI"
import BookShelf from "./BookShelf";

function Home() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getAll()
        .then((res)=>{
            console.log(res)
            setBooks(res)
        })
        .catch((err)=>{
          console.log(err)
        })
    
      },[]);
    return ( 
        <div>
            <BookShelf title="Currently Reading" 
                        book={books.filter( book => book.shelf === "currentlyReading")}/>
            <BookShelf title="Want to Read"
                        book={books.filter( book => book.shelf === "wantToRead")}/>
            <BookShelf title="Read"
                        book={books.filter( book => book.shelf === "read")}/>
        </div>
    );
    }

    export default Home