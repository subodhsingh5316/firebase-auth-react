import React from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import firebase from '../firebase';

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  return (
    <div className='m-4'>
      <Card>
        <Card.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><h1 className={todo.complete ? 'complete' : ''}>{todo.title}</h1></td>
                <td>
                  <Button className='m-1' onClick={deleteTodo}>Delete</Button >
                  <Button className='m-1' onClick={completeTodo}>Complete</Button>
                </td>
              </tr>
            </tbody>
          </Table>

        </Card.Body>
      </Card>
    </div>
  );
}