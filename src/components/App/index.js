import React, { Component } from 'react';

import ToDo from '../ToDo';

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

    _saveTasks(state) {
        localStorage.setItem('toDos', JSON.stringify(state));
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
        this._saveTasks(state);
    }

    // Download & Render Tasks
    _fetchTasks() {
        let saved = JSON.parse(localStorage.getItem('toDos'));

        console.log(saved);

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

        this.forceUpdate();
    }

    render() {

        return (
            <main>
                <h1>To Do App</h1>
                <ul>
                    {this.state.toDos.map((toDo, index) => {
                    return <ToDo
                                key={index}
                                value={toDo}
                                onClick={() => this._toggleTask(toDo, index) }
                            />
                    })}
                </ul>
                <form onSubmit={this._handleSubmit}>
                    <h3>Create new task</h3>
                    <input 
                        value={this.state.newTask}
                        placeholder={'What is your task?'} onChange={this._handleChange} />
                    <button type={'submit'}>Create</button>
                </form>
                <div>
                    <h2>Extra Features</h2>
                    <button onClick={() => {this._clear()}}>Switch to defaults</button>
                </div>
            </main>
         );
    }
}

export default App;