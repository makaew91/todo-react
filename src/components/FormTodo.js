import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";

function FormTodo(props) {

    const [todo, setTodo] = useState('')

    const todoHandler = () => {
        props.emit(todo)
        setTodo('')
    }

    return (
        <div className="m-5 d-flex">
            <Form.Control type="text" value={todo} onChange={event => setTodo(event.target.value)} placeholder="Enter..." />
            <Button variant="primary" onClick={todoHandler} type="submit" className="float-right mx-2">
                add
            </Button>
        </div>
    );
}

export default FormTodo;