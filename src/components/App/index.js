import React, { Component } from 'react';
import { Container, Form, ListGroup, InputGroup, Button } from 'react-bootstrap';

import ToDo from '../ToDo';
import Features from '../Features';
import Extra from '../Extra';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: this.props.value,
            newTask: '',
        };

        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    componentDidUpdate() {
        localStorage.setItem('toDos', JSON.stringify(this.state.toDos));
    }

    _toggleTask(task, index) {
        // Create a copy of the data
        let state = [...this.state.toDos];
        let taskTemp = {...state[index]};

        // Change data
        taskTemp.state = !task.state;

        // Put it back
        state[index] = taskTemp;

        // Replace data
        this.setState({toDos: state});

        // Rerender
        this.forceUpdate();
    }

    // Download & Render Tasks
    _fetchTasks() {
        let saved = JSON.parse(localStorage.getItem('toDos'));

        if (saved != null) {
            this.setState({toDos: saved});
        } else {
            this.setState({toDos: []});
        }
        this.forceUpdate();
    }

    // Clear or tasks
    _clear() {
        localStorage.removeItem('toDos');
        this._fetchTasks();
    }

    // Create Task Methods
    _handleChange(e) {
        let task = e.target.value;
        this.setState({newTask: task});
    }

    _handleSubmit(e) {
        e.preventDefault();
        
        // Make a copy
        let state = [...this.state.toDos];

        // Mutate
        state.push(
            {
                task: this.state.newTask,
                state: false
            },
        )
        
        // Update date
        this.setState({toDos: state});
        this.setState({newTask: ''})
        this.forceUpdate();
    }

    render() {

        return (
            <Container>
                <h1 className='text-center mb-3'>To Do List</h1>
                <ListGroup as='ul'>
                    {this.state.toDos.map((toDo, index) => {
                    return <ToDo
                                key={index}
                                value={toDo}
                                onClick={() => this._toggleTask(toDo, index) }
                            />
                    })}
                </ListGroup>
                <Form className="mt-5" onSubmit={this._handleSubmit}>
                    <h3 className="mb-3">Create new task</h3>
                    <InputGroup controlId="newTask">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Task:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text" 
                            value={this.state.newTask}
                            placeholder={'What is your task?'} 
                            onChange={this._handleChange} />
                            <InputGroup.Append>
                                <Button variant="primary" type={'submit'}>Create</Button>
                            </InputGroup.Append>
                    </InputGroup>
                </Form>
                <Extra onClick={() => this._clear()}></Extra>
                <Features></Features>
            </Container>
         );
    }
}

export default App;