import React, { useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, onSigninClick, onRegisterClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [username, setUsername] = useState('');
    const [buttonFocus, setButtonFocus] = useState(false);

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const isFormValid = () => email !== '' && password !== '' && !error && username !== '';

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!emailRegex.test(e.target.value)) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleSubmit = (event) => {
        onRegisterClick();
    };

    return (
        <ModalWithForm
            name="register"
            title="Sign Up"
            onCloseModal={onClose}
            onSubmit={handleSubmit}
        >
            <p id="email-label" className="modal__input-label">Email</p>
            <input
                id="email"
                className="modal__input modal__email-input"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
                aria-labelledby="email-label"
            />
            {error ? <p className="register-modal__error">Invalid email address</p> : <p className="register-modal__no-error">  </p>}
            <p id="password-label" className="modal__input-label">Password</p>
            <input
                id="password"
                className="modal__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                aria-labelledby="password-label"
            />
            <p id="email-label" className="modal__input-label">Username</p>
            <input
                id="username"
                className="modal__input"
                type="text"
                placeholder="Enter desired username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <button className="modal__submit-button" type="submit" disabled={!isFormValid()}>
                Sign up
            </button>
            <div className="register-modal__sign-up-link-container">
                <p className="register-modal__sign-up-link-text">
                    or
                </p>
                <button
                    className={`register-modal__sign-up-link${buttonFocus ? ' register-modal__sign-up-link_focused' : ''}`}
                    onClick={onSigninClick}
                    onFocus={() => setButtonFocus(true)}
                    onBlur={() => setButtonFocus(false)}
                >
                    Sign in
                </button>

            </div>
        </ModalWithForm>
    );
};

export default RegisterModal;
