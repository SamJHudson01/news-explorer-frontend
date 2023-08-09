import React from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './ConfirmationModal.css'

const ConfirmationModal = ({ onClose, handleSubmit, onSigninClick }) => {
    return (
        <div className="confirmation-modal">
            <ModalWithForm
                name="register"
                title="Registration successfully completed!"
                onCloseModal={onClose}
                onSubmit={handleSubmit}
            >
                <button className="confirmation-modal__sign-up-link" onClick={onSigninClick}>Sign in</button>
            </ModalWithForm>
        </div>
    )
}
export default ConfirmationModal