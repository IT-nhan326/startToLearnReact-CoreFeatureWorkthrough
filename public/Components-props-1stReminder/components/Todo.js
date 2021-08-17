import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
const Todo = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const deleteHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalOpen && (
        <Modal
          onModalClose={closeModalHandler}
          onModalConfirm={closeModalHandler}
        />
      )}
      {modalOpen && <Backdrop onModalClose={closeModalHandler} />}
    </div>
  );
};

export default Todo;
