import React, { FC } from 'react'
import ReactDOM from 'react-dom';

type modalProps = { 
    children: React.ReactNode 
}

export const Modal:FC<modalProps> = ({ children }) => {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')!
    )
}
