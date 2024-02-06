import React, { FC } from 'react';
import { mainColors } from '../../../assets/mainColors';
import CardButton from '../../buttons/CardButton';

interface PremiumUnlockProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PremiumUnlock: FC<PremiumUnlockProps> = ({ onClick }) => {
  return (
    <div
      style={{
        backgroundColor: mainColors.cardBg,
        width: '826px',
        height: '99.2px',
      }}
      className=" flex justify-between rounded-md mt-6 px-3 items-center "
    >
      <div>
        <h1 style={{ fontSize: '24px' }}>
          Unlock more features with TypeRacer Premium!
        </h1>
        <p style={{ fontSize: '15px' }}>
          Get access to hundreds of avatars to race with, ad-free experience and
          more!
        </p>
      </div>
      <div>
        <CardButton
          buttonColor={mainColors.purpleButtons}
          buttonText="Subscribe now"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default PremiumUnlock;
