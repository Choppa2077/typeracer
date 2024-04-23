import { useState, useEffect, FC } from 'react';

interface WpmPanelProps {
  wpm: number | null;
}

const WpmPanel: FC<WpmPanelProps> = ({ wpm }) => {
  return (
    <div>
      <div>
        {!Number.isNaN(wpm) && <p className=" font-bold ">{wpm} wpm</p>}
      </div>
    </div>
  );
};

export default WpmPanel;
