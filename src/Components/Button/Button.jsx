import s from './Button.module.scss';
export default function Button({
  children,
  onClick,
  className,
  type = 'button',
}) {
  return (
    <button type={type} onClick={onClick} className={`${className} ${s.btn}`}>
      {children}
    </button>
  );
}
