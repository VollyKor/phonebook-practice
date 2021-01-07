import { BsFillStarFill } from 'react-icons/bs';

export default function AdditionalInfo({ contactObj, hide }) {
  const { email, isChosen } = contactObj;
  console.log(contactObj);

  // логика изменения background color
  //   const bgc = () => {
  //     if (isChosen === true) {
  //       return 'green';
  //     }
  //     return 'white';
  //   };

  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: '0%',
        width: '100%',
        zIndex: '1',
        backgroundColor: 'white',
        border: '1px solid black',
      }}
      //   {isChosen === 'true' && className=}
    >
      <p>Email {email}</p>
      <button onClick={hide}>Hide</button>
      <button type="button" onClick={() => console.log('change isChosen')}>
        <BsFillStarFill color={isChosen === true ? 'gold' : 'grey'} />
      </button>
      {/* <BsFillStarFill color="grey" />
      <BsFillStarFill /> */}
    </div>
  );
}
