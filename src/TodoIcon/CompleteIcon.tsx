import React from "react"
import { TodoIcon } from "."

function CompleteIcon({ completed, onComplete }: {completed: boolean, onComplete: () => void}) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon }