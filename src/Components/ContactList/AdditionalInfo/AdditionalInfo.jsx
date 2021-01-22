import s from './AdditionalInfo.module.scss';

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
      className={s.wrapper}
      //   {isChosen === 'true' && className=}
    >
      <p className={s.text}>
        Email : <span className={s.email}>{email}</span>
      </p>
      <button className={s.hideBtn} onClick={hide}>
        Hide
      </button>

      {/* <BsFillStarFill color="grey" />
      <BsFillStarFill /> */}
    </div>
  );
}
