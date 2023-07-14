import React from 'react'
import ReactDOM from 'react-dom';

function Modal({ children }: { children: React.ReactNode }) {
    return ReactDOM.createPortal(
        <div className='Modal'>
            {children}
        </div>,
        document.getElementById('modal')!
    )
}

export { Modal }