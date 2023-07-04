import React, { useRef } from 'react'

const UseRefDemo = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const selectInput = () => {
        const inputElement = inputRef.current
        if(inputElement) {
            inputElement.select()
        }
    }
    return <>
        <input ref={inputRef} defaultValue={'hello word'} />
        <button onClick={selectInput}>选中input</button>
    </>
}

export default UseRefDemo