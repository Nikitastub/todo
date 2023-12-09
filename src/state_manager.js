import {createStore, createEvent, restore, sample} from 'effector'
const addNote = createEvent()
const deleteNote = createEvent()
const clearAll = createEvent()
const markComplited = createEvent()
const markHigh = createEvent()
const setOnlyHigh = createEvent()
const setDarkMode = createEvent()
const setEdit = createEvent()
const changeInput = createEvent()
const changeEditInput = createEvent()
const saveEditInput = createEvent()

const $inputText = restore(changeInput, '').reset([addNote, clearAll])
const $inputEditText = restore(changeEditInput, '').reset(saveEditInput)
const $isOnlyHigh = restore(setOnlyHigh, false)
const $isDarkMode = restore(setDarkMode, false)
const $todos = createStore([])
    .on(addNote, (state, payload) => [...state, {id: state.length, text: payload, completed: false, high: false, edition: false} ])
    .on(markComplited, (state, payload) => state.map(item => item.id === payload ? {...item, completed: !item.completed} : item))
    .on(setEdit, (state, payload) => state.map(item => item.id === payload ? {...item, edition: !item.edition} : item))
    .on(saveEditInput, (state, payload) => state.map(item => item.id === payload.id ? {...item, text: payload.text} : item))
    .on(markHigh, (state, payload) => state.map(item => item.id === payload ? {...item, high: !item.high} : item))
    .on(deleteNote, (state, payload) => state.filter(item => item.id !== payload))
    .reset(clearAll)



sample({
    clock: setEdit,
    source: $todos,
    fn: (todos, id) => todos.filter(todo => todo.id === id)[0].text,
    target: $inputEditText,
})
   

export {
    $todos,
    $inputText,
    $inputEditText,
    $isOnlyHigh,
    $isDarkMode,
    addNote,
    deleteNote,
    markComplited,
    markHigh,
    clearAll,
    changeInput,
    changeEditInput,
    setOnlyHigh,
    setDarkMode,
    setEdit,
    saveEditInput,
}