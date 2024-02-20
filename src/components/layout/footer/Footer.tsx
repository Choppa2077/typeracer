import { FC } from 'react';
import { mainColors } from '../../../assets/mainColors';
import { IoMdContact } from 'react-icons/io';
import CardButton from '../../buttons/CardButton';

interface FooterProps {
  onChangeTheme: () => void;
}

const Footer: FC<FooterProps> = ({ onChangeTheme }) => {
  
  return (
    <div
      className=" flex h-44 w-full items-center justify-between  mt-44 absolute bottom-0"
      style={{ backgroundColor: mainColors.header }}
    >
      <div className=" w-full flex justify-between mx-32 items-center">
        <div className=" flex-col">
          <div className="flex justify-between mb-4">
            <p>Home</p>
            <p>|</p>
            <p>Contact</p>
            <p>|</p>
            <p>Contribute</p>
            <p>|</p>
            <p>FAQ</p>
          </div>
          <div className="mb-4">
            <p>© 2024 Pet project of Arup and Mukan</p>
          </div>
          <div>
            <IoMdContact color="white" size={30} />
          </div>
        </div>
        <div className="flex-colm">
          <CardButton
            buttonColor={mainColors.purpleButtons}
            buttonText="Change Theme"
            onClick={onChangeTheme}
            h={60}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
