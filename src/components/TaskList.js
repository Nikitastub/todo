import { $todos, $isOnlyHigh } from "../state_manager"
import {useStore, useList} from 'effector-react'
import { Task } from "./Task"

export const TaskList = () => {
    const todos = useStore($todos)
    const isOnlyHigh = useStore($isOnlyHigh)
    const listHigh = useList($todos, (item) => item.high &&  <Task text={item.text} id={item.id} completed={item.completed} high={item.high} edition={item.edition} />)
    const listAll = useList($todos, (item) => <Task text={item.text} id={item.id} completed={item.completed} high={item.high} edition={item.edition} />)
    
    return(
            <ul className="task__list">
                {todos.length 
                ? (isOnlyHigh ? listHigh : listAll)
                : <span className="no-plans">No plans for today ...</span>}
            </ul>
        )
    } 
