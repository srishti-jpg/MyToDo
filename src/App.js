import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, ListGroup } from 'react-bootstrap';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]); // Task list
  const [task, setTask] = useState('');  // Input field value

  // Add Task
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask(''); // Clear input field
    }
  };

  // Delete Task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">To-Do App</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Enter a task" 
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={addTask}>Add Task</Button>
          </Form>
          <ListGroup className="mt-4">
            {tasks.map((t, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                {t}
                <Button variant="danger" size="sm" onClick={() => deleteTask(index)}>Delete</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
