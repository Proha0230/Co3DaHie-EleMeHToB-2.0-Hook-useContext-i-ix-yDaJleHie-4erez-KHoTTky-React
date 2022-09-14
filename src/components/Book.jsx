import React, {useContext} from "react";
import {CustomContext} from "../hooks/Context";

export function Book (props) {
    const {removeBook} = useContext(CustomContext)
    return <div>
        <h2>{props.title}<button style={{marginLeft:"1rem"}} onClick={ ()=> removeBook(props.id)}>Удалить</button></h2>
    </div>;
}