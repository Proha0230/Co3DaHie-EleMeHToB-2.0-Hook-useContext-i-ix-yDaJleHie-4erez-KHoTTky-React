import React, {useState,createContext} from "react";

export const CustomContext = createContext();

export const BookContext = (props) => {
    const [books, setBooks] = useState ([
        {id:1, title: "JS"},
        {id:2, title: "React"},
        {id:3, title: "Vue.js"},
    ]);


    // функция добавления вперед всего списка книг, с подрузгой всех остальных книг в массиве
    const addBook = (book) => {
        setBooks ([book, ...books])
    }

    // функция удаления книги 
    const removeBook = (id) => {
        setBooks(books.filter (book => book.id !==id))
    }

    // в объект value мы передаем те компоненты, которые через CustomContext
    // можем вытащить из него - и использовать
    const value ={
        books,
        addBook,
        removeBook,
    }


    // .Provider дает доступ к тем компонентам что будут в него переданы. 
    // можно передать их как обьект внешний ( как в нашем случае),
    // так и внутри value {{с двойными ковычками}}
    return <CustomContext.Provider value = {value} >
        {props.children}
    </CustomContext.Provider>

}

