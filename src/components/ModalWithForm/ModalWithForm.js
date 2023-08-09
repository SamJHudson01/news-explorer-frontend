import React from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  name,
  title,
  onCloseModal,
  onSubmit,
  children
}) => {
 

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onCloseModal}>
        <div className="modal__container" onClick={(e) => e.stopPropagation()}>
          <button
            className="modal__close-button"
            type="button"
            onClick={onCloseModal}
          ></button>
          <form name={name} className="modal__form" onSubmit={onSubmit}>
            <h2 className="modal__form-title">{title}</h2>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalWithForm;
