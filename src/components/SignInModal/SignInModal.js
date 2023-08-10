import React, { useState } from "react";
import "./SignInModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignInModal = ({ isOpen, onClose, onSignUpClick, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [buttonFocus, setButtonFocus] = useState(false);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const isFormValid = () => email !== '' && password !== '' && !error;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      onLogin();
      onClose();
    }
  };

  return (
    <ModalWithForm
      name="signin"
      title="Sign in"
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
        placeholder="Enter email"
        required
        aria-labelledby="email-label"
      />
      {error ? <p className="signin-modal__error">Invalid email address</p> : <p className="signin-modal__no-error"></p>}
      <p id="password-label" className="modal__input-label">Password</p>
      <input
        id="password"
        className="modal__input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        required
        aria-labelledby="password-label"
      />
      <button className="modal__submit-button" type="submit" disabled={!isFormValid()}>
        Sign in
      </button>
      <div className="signin-modal__sign-up-link-container">
        <p className="signin-modal__sign-up-link-text">
          or 
        </p>
        <button className={`signin-modal__sign-up-link ${buttonFocus ? "signin-modal__sign-up-link_focused" : ''}`} onClick={onSignUpClick}
        onFocus={() => setButtonFocus(true)}
        onBlur={() => setButtonFocus(false)}
        >Sign up</button>
      </div>
    </ModalWithForm>
  );
};

export default SignInModal;
