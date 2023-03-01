import { TodoTypes } from "../types/types";
import { useState } from "react";
import { Modal } from "./Modal/Modal";

export const TodoItem: React.FC<TodoTypes> = ({
  id,
  titleValue,
  descriptionValue,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checked, setChecked] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function statusDone(event: any) {
    setChecked(!checked)    
  }

  return (
    <>
      <tr onClick={openModal}>
        <td className="todoItem__row">{id}</td>
        <td className="todoItem__row">{titleValue}</td>
        <td className="todoItem__row">{descriptionValue}</td>
        <td className="todoItem__row">
          <input type="checkbox"  onChange={statusDone} />
        </td>
      </tr>

      <Modal isModalOpen={isModalOpen}>
        <>
        <div className="modal-body">
          <h1>Title: {titleValue}</h1>
          <h2>Description:{descriptionValue}</h2>
          <p>Decr text</p>
          <div className="modal__status">
            <span>Status: {checked? "On": "Off"}</span>
          </div>
          <button onClick={closeModal}>Close Modal</button>
          </div>
        </>
      </Modal>
    </>
  );
};
