import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../redux/actions/action';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      <span>{task.description}</span>
    </div>
  );
};

export default Task;