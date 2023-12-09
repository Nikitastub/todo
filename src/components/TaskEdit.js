import {useStore} from 'effector-react'
import { $inputEditText, changeEditInput, saveEditInput, setEdit } from "../state_manager"

export const TaskEdit = ({id, text}) => {

    const inputEditText = useStore($inputEditText)

    const submitHandler = text => e => {
        e.preventDefault();
    }

    const saveEdition = (id, text) => {
        setEdit(id)
        saveEditInput({text: text, id: id})
    }
    
    const changeHandler = e => changeEditInput(e.currentTarget.value)

    return(
        <form action="" onSubmit={submitHandler(inputEditText)}>
            <input className="edit-form" value={inputEditText}  type="text" style={{border: "none", background: "transparent"}} autoFocus onChange={changeHandler}></input>
            <button type="submit" onClick={() => saveEdition(id, inputEditText)} style={{margin: "5px"}}>ok</button>
         </form>
    )
}
    