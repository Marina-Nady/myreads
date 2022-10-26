
import {useState,useEffect} from 'react'
import {update} from '../BooksAPI'
function Book(props) {
    return ( 
        props.book.map((book)=>(
        <li key={book.id}>
            <div className="book">
            <div className="book-top">
            <div
                className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage: book.imageLinks.thumbnail ?
                    `url(${book.imageLinks.thumbnail})` :
                    `url(https://picsum.photos/id/237/200/300)`,
                }}
            ></div>
            <div className="book-shelf-changer">
                <select value={book.shelf} 
                        onChange={(e)=>{
                            let id = {id:book.id}
                            console.log(e.target.value)
                            update(id,e.target.value)
                            .then((res)=>{
                                window.location.href="/";
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
                        }}>
                    <option  disabled>
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
            <div className="book-title">{book.title}</div>
            {
                book.authors.map((author)=>(
                    <div className="book-authors">{author}</div>
                ))
            }
            </div>
        </li>
        ))
        
    );
    }

    export default Book