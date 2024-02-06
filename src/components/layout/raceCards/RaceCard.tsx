import { FC } from 'react';
import CardButton from '../../buttons/CardButton';
import { mainColors } from '../../../assets/mainColors';
import ToggleSwitch from '../../buttons/ToggleSwitch';

interface RaceCardProps {
  title: string;
  body: string;
  buttonColor: string;
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  car: string;
}

const RaceCard: FC<RaceCardProps> = ({
  title,
  body,
  onClick,
  buttonColor,
  buttonText,
  car,
}) => {
  return (
    <div
      style={{
        backgroundColor: mainColors.cardBg,
        width: '826px',
        height: '232.7px',
      }}
      className=" relative rounded-md mt-6 p-5 "
    >
      <div>
        <h1 style={{ fontSize: '24px' }}>{title}</h1>
        <p style={{ fontSize: '15px' }}>{body}</p>
        <CardButton
          buttonColor={buttonColor}
          buttonText={buttonText}
          onClick={onClick}
          h={62.4}
        />
      </div>
      <img
        src={car}
        className="absolute bottom-3 right-0"
        width="200"
        height="200"
      />

      <div className=" flex items-center justify-between">
        <div className="flex items-center">
          <p>Language:</p>
          <nav style={{ color: mainColors.purpleButtons }}>English</nav>
        </div>

        <div className="flex items-center">
          <p>Instant Death Mode:</p>
          <ToggleSwitch />
        </div>
        <div className="flex items-center">
          <p>Theme:</p>
          <nav style={{ color: mainColors.purpleButtons }}>Dark</nav>
        </div>
        <div style={{ width: '300px' }}></div>
      </div>
    </div>
  );
};

export default RaceCard;
