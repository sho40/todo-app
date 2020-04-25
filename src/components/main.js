import React from 'react';
import {AddNewTask} from './addtask';
import {ToDoAppList} from './applist'

export class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateList(text) {
        var updatedTasks = this.state.tasks;
        updatedTasks.push(text);
        this.setState({tasks: updatedTasks});
    }

    removeTask(text) {
        var updatedTasks = this.state.tasks;
        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({tasks: updatedTasks});
    }

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <AddNewTask updateList={this.updateList} />
                <ToDoAppList tasks={this.state.tasks} remove={this.removeTask} />
            </div>
            );
    }
}