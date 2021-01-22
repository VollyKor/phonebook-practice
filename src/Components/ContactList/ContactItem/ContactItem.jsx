import { useState, useContext } from 'react';
import Form from '../../Form/Form';
import Modal from '../../Modal/Modal';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import context from '../../../context/contactsCtx';
import s from './ContactItem.module.scss';
import { BsFillStarFill } from 'react-icons/bs';

export default function ContactItem({ contactObj }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAddInfo, setShowAddInfo] = useState(false);
  const { removeContact, changeContact } = useContext(context);

  const { firstName, lastName, phoneNumber, email, isChosen, id } = contactObj;
  return (
    <>
      <p className={s.item}>
        <span className={s.itemName}>{` ${firstName} ${lastName} `}</span>
        <span className={s.itemPhoneNumber}>{phoneNumber}</span>
      </p>

      <div className={`flex-box ${s.btnList}`}>
        <button
          type="button"
          className={s.btn}
          onClick={() => {
            setShowAddInfo(true);
          }}
        >
          More Info
        </button>

        <button
          type="button"
          className={s.btn}
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Change Contact
        </button>

        <button
          type="button"
          className={s.btn}
          onClick={() => {
            removeContact(id);
          }}
        >
          Delete Contact
        </button>
        <BsFillStarFill
          className={s.chosenIcon}
          color={isChosen === true ? 'gold' : 'transparent'}
        />
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
