import { FC } from 'react';

export interface CardButtonProps {
  buttonColor: string;
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  h: number;
}

const CardButton: FC<CardButtonProps> = ({
  buttonColor,
  buttonText,
  onClick,
  h,
}) => {
  return (
    <button
      style={{ backgroundColor: buttonColor, height: h}}
      className=" my-5  px-10  rounded-md"
      onClick={onClick}
    >
      <p>{buttonText}</p>
    </button>
  );
};

export default CardButton;
