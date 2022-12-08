import React from 'react';
import { $isDarkMode } from "./state_manager"
import {useStore} from 'effector-react'
import { Todo } from './components/Todo';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';

function App() {
  
  const isDarkMode = useStore($isDarkMode)

  return (
    <div className={isDarkMode ? "bg dark-bg" : "bg"}>
      <Todo>
        <AddTask/>
        <TaskList/>
        <Footer/>
      </Todo>
    </div> 
  );
}

export default App;
