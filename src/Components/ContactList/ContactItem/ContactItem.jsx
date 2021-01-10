import { useState, useContext } from 'react';
import Form from '../../Form/Form';
import Modal from '../../Modal/Modal';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import { ContactCtx } from '../../../context/ContactsService';
// import InputMask from 'react-input-mask';

export default function ContactItem({ contactObj }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAddInfo, setShowAddInfo] = useState(false);
  const { removeContact, changeContact } = useContext(ContactCtx);

  const { firstName, lastName, phoneNumber, email, isChosen, id } = contactObj;
  return (
    <>
      <div style={{ position: 'relative' }}>
        <p>
          <span>{` ${firstName} ${lastName} `}</span>
          <span>{phoneNumber}</span>
        </p>

        <button
          onClick={() => {
            setShowAddInfo(true);
          }}
        >
          More Info
        </button>

        <button
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Change Contact
        </button>

        <button
          onClick={() => {
            removeContact(id);
          }}
        >
          Delete Contact
        </button>

        {showAddInfo && (
          <AdditionalInfo
            contactObj={contactObj}
            hide={() => {
              setShowAddInfo(false);
            }}
          />
        )}
      </div>

      {isModalVisible && (
        <Modal
          onClose={() => {
            setIsModalVisible(false);
          }}
        >
          <p>Форма для изменения</p>
          <Form contactObj={contactObj}></Form>
        </Modal>
      )}
    </>
  );
}
