import { useState } from 'react';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
export default function ContactItem({ contactObj }) {
  const [showAddInfo, setShowAddInfo] = useState(false);
  const { firstName, lastName, phoneNumber, email, isChosen } = contactObj;
  return (
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
      <button>Change Contact</button>
      <button>Delete Contact</button>
      {showAddInfo && (
        <AdditionalInfo
          contactObj={contactObj}
          hide={() => {
            setShowAddInfo(false);
          }}
        />
      )}
    </div>
  );
}
