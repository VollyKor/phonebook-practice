import { useState, useContext } from 'react';
import Form from '../../Form/Form';
import Modal from '../../Modal/Modal';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import context from '../../../context/contactsCtx';

export default function ContactItem({ contactObj }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAddInfo, setShowAddInfo] = useState(false);
  const { removeContact, changeContact } = useContext(context);

  const { firstName, lastName, phoneNumber, email, isChosen, id } = contactObj;
  return (
    <>
      <p className="text-center">
        <span className="card-title">{` ${firstName} ${lastName} `}</span>
        <span className="card-subtitle text-muted">{phoneNumber}</span>
      </p>

      <div className="d-flex">
        <button
          type="button"
          className="btn btn-sm btn-secondary mx-auto"
          onClick={() => {
            setShowAddInfo(true);
          }}
        >
          More Info
        </button>

        <button
          type="button"
          className="btn btn-sm btn-secondary mx-auto"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Change Contact
        </button>

        <button
          type="button"
          className="btn btn-sm btn-secondary mx-auto"
          onClick={() => {
            removeContact(id);
          }}
        >
          Delete Contact
        </button>
      </div>

      {showAddInfo && (
        <AdditionalInfo
          contactObj={contactObj}
          hide={() => {
            setShowAddInfo(false);
          }}
        />
      )}

      {isModalVisible && (
        <Modal
          onClose={() => {
            setIsModalVisible(false);
          }}
        >
          <Form contactObj={contactObj}></Form>
        </Modal>
      )}
    </>
  );
}
