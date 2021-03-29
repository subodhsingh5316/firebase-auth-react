import React, { useState } from 'react';
import firebase from '../firebase';
import { useHistory } from "react-router-dom"

import { Form, Button, Card } from "react-bootstrap"

export default function Form1() {
  const [title, setTitle] = useState('');

  const history = useHistory()
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
    history.push('/todolist')
    
  };
  return (
    <div>
        <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Add New Todo</h2>
         
          <Form onSubmit={createTodo}>
            <Form.Group id="message">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" onChange={handleOnChange} value={title}  required />
            </Form.Group>
            
            <Button className="w-100" type="submit">
             Add-Todo
            </Button>
          </Form>
         
        </Card.Body>
      </Card>
       

    </div>
  );
}
