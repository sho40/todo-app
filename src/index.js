import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/main'
import * as serviceWorker from './serviceWorker';

var tasksList = ["task 1", "task 2", " task 3"];

ReactDOM.render(<Todo tasks={tasksList} />, document.getElementById('todo'));
serviceWorker.unregister();
