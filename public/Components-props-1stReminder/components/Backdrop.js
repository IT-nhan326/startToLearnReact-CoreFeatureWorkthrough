import React from 'react'

const Backdrop = props => {
    return(
        <div className='backdrop' onClick={props.onModalClose}></div>
    )
}

export default Backdrop