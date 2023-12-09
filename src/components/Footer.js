import { clearAll, setOnlyHigh, $isOnlyHigh, $todos } from "../state_manager"
import {lightningState} from '../data'
import {useStore} from 'effector-react'

export const Footer = () => {

    const isOnlyHigh = useStore($isOnlyHigh)
    const todos = useStore($todos)

    return(
        <div className={todos.length === 0 ? 'hidden' : 'footer'} >
            <a href="*">
                <img 
                    src={lightningState.on.color} 
                    alt=""
                    className={isOnlyHigh ? "footer__high-btn bg-grey" : "footer__high-btn"}
                    onClick={(e) => {
                        e.preventDefault()
                        setOnlyHigh(!isOnlyHigh)
                    }}>
                </img>
            </a>
            <button type="submit" className="footer__reset-btn button" onClick={clearAll}><span>Reset</span></button>
        </div>
    )
}
