import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/Reducer';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const store = createStore(rootReducer); // Create your Redux store

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo Application</h1>
        <AddTask />
        <TaskList />
        <h2>Completed Tasks</h2>
        <TaskList filter="done" />
        <h2>Remaining Tasks</h2>
        <TaskList filter="notDone" />
      </div>
    </Provider>
  );
};

export default App;