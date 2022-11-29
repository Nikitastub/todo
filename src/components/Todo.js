import { $isDarkMode, setDarkMode} from "../state_manager"
import {useStore} from 'effector-react'

export const Todo = ({children}) => {

    const isDarkMode = useStore($isDarkMode)

    return (
        <>
            <button className="theme" onClick={() => setDarkMode(!isDarkMode)}>Dark mode <span>{isDarkMode ? 'on 🌙' : 'off ☀️'}</span></button>
            <div className="todo">
                {children}
            </div>
        </>
    )
}
    
