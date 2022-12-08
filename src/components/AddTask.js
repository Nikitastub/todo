import {useStore} from 'effector-react'
import { $inputText, changeInput, addNote } from "../state_manager"

export const AddTask = () => {

    const inputText = useStore($inputText)

    const submitHandler = text => e => {
        e.preventDefault();
        if (text.length) addNote(text)
    }

    const changeHandler = e => changeInput(e.currentTarget.value)

    return(
        <div className="add-task">
                <form action="" className="todo__form" onSubmit={submitHandler(inputText)}>
                    <input type="text" value={inputText} placeholder="What would you like to plan?" autoFocus className="todo__input" onChange={changeHandler} />
                    <button type="submit" className="todo__submit button"><span>Plan it!</span></button>
                </form>
            </div>
        )
    }
    