import {useState} from 'react'
import './Modal.css'

const Modal = (props) => {
    return(
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={props.onModalClose}>Cancel</button>
            <button className='btn'onClick={props.onModalConfirm}>Confirm</button>
        </div>
    )
}

export default Modal