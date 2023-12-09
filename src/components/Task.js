import { deleteNote, markComplited, markHigh, setEdit } from "../state_manager"
import {lightningState} from '../data'
import { TaskEdit } from "./TaskEdit"

export const Task = ({text, id, completed, high, edition}) => 
        <div className={high ? lightningState.on.bg : lightningState.off.bg}>
            <div className="todo__item-main">
                <img 
                    src={high ? lightningState.on.color : lightningState.off.color} 
                    alt=""
                    className={high ? lightningState.on.lightningClass : lightningState.off.lightningClass} 
                    onClick={() => markHigh(id)}>
                </img>
                {!edition ? <a 
                href="*" 
                className={completed ? "todo__item-title crossed" : "todo__item-title"} 
                onClick={(e) => {
                    e.preventDefault()
                    markComplited(id)
                    }}>
                {text}
                </a> : <TaskEdit id={id} text={text}/>}
            </div>
            <div className="todo__item-tools">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/2830/2830022.png" 
                    alt=""
                    className="todo__item-tool hidden" 
                    onClick={() => setEdit(id)}>
                </img>
                <img 
                    src="https://cdn-icons-png.flaticon.com/128/3395/3395538.png" 
                    alt=""
                    className="todo__item-tool hidden" 
                    onClick={() => deleteNote(id)}>
                </img>
            </div>
        </div>




