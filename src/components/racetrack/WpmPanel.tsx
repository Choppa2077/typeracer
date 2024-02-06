import { useState, useEffect, FC } from 'react';

interface WpmPanelProps {
  typedWords: string[];
  raceTimer: number;
  userInput: string;
}

const WpmPanel: FC<WpmPanelProps> = ({ typedWords, raceTimer, userInput }) => {
  // const { wpm } = useAppSelector((state) => state.race);
  const [wpm, setWpm] = useState(0);
  useEffect(() => {
    const words = Math.round(userInput.length / 5);
    const time = (70 - raceTimer) / 60;
    const wpmGross = Math.round(words / time);
    setWpm(wpmGross);
    // console.log(userInput.length);
  }, [typedWords, raceTimer]);

  return (
    <div>
      <div>
        {!Number.isNaN(wpm) && <p className=" font-bold ">{wpm} wpm</p>}
      </div>
    </div>
  );
};

export default WpmPanel;
