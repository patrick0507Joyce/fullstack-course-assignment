import React from 'react'
import './Notification.css'

const Notification = ({ successMessage, errorMessage }) => {
    console.log({ successMessage, errorMessage });
    return (
        <div>
            {
                successMessage 
            ? 
            <h3 className="success">{successMessage}</h3>
            :
                null
            }
            {
                errorMessage 
            ? 
            <h3 className="error">{errorMessage}</h3>
            :
                null
            }
        </div>
    )
}

export default Notification
