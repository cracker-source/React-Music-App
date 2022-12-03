import React, { Fragment } from 'react'

import { createPortal } from 'react-dom';


interface BackdropProps {
    onClick: () => void
}

const Backdrop = ({ onClick }: BackdropProps) => {
    return <div className='fixed overflow-hidden flex items-center justify-center opacity-80 inset-0 width-full h-screen bg-black z-30'
        onClick={onClick}
    />;
};


interface ModalOverlayProps {
    children: React.ReactNode
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
    return (
        <div className='fixed w-[75%] h-[60%] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] rounded-lg shadow-lg z-30'>
            <div className='h-max overflow-auto py-4'>
                {children}
            </div>
        </div>
    );
};


const portalElement = document.getElementById('overlays') as HTMLDivElement;

interface ModalProps {
    onBackdropClose: () => void,
    children: JSX.Element
}

const Modal = ({ onBackdropClose, children }: ModalProps) => {
    return (
        <Fragment>
            {createPortal(<Backdrop onClick={onBackdropClose} />, portalElement)}
            {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal