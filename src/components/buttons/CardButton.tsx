import { FC } from 'react';
import { BsGoogle } from 'react-icons/bs';
export interface CardButtonProps {
  buttonColor: string;
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  h: number;
  withIcon : boolean
}

const CardButton: FC<CardButtonProps> = ({
  buttonColor,
  buttonText,
  onClick,
  h,
  withIcon
}) => {
  return (
    <button
      style={{ backgroundColor: buttonColor, height: h}}
      className=" my-5  px-10  rounded-md flex items-center justify-evenly"
      onClick={onClick}
    >
    {withIcon && <BsGoogle color="white" size={20} />}
      <p>{buttonText}</p>
    </button>
  );
};

export default CardButton;
