import { mainColors } from '../../assets/mainColors';
import ProgressBar from '../../components/racetrack/ProgressBar';
import TimeStart from '../../components/racetrack/TimeStart';
import WpmPanel from '../../components/racetrack/WpmPanel';
import TypingText from '../../components/racetrack/TypingText';
import CardButton from '../../components/buttons/CardButton';
import { useNavigate } from 'react-router-dom';
import InputFiled from '../../components/racetrack/InputFiled';
import { useState, useEffect } from 'react';
import { useGetRaceDataQuery } from '../../services/singleRaceApi';
import { useAppSelector } from '../../store/hooks';
import RaceInfo from '../../components/racetrack/RaceInfo';
const SingleRace = () => {
  const navigation = useNavigate();
  const { progress } = useAppSelector((state) => state.race);
  const [timer, setTimer] = useState(3);
  const [raceTimer, setRaceTimer] = useState(3);
  const [userInput, setUserInput] = useState('');
  const { data } = useGetRaceDataQuery();
  const [typedWords, setTypedWords] = useState<string[]>([]);

  const handleInputChange = (inputValue: string) => {
    setUserInput(inputValue);
    const word = inputValue.split(' ');
    setTypedWords(word);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(interval);

      // Start the race timer

      const raceInterval = setInterval(() => {
        setRaceTimer((prevRaceTimer) => {
          if (prevRaceTimer > 0) {
            return prevRaceTimer - 1;
          }

          // Stop the race timer when it reaches 0

          clearInterval(raceInterval);
          return 0;
        });
      }, 1000);

      // Cleanup the race timer interval when it reaches 0
      return () => clearInterval(raceInterval);
    }

    // Cleanup the initial timer interval when the component unmounts
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (progress === data?.content.length) {
      setRaceTimer(0);
      // return () => clearInterval(interval);
      console.log(
        'Progress:' + progress + ', ' + 'Text length: ' + data?.content.length,
      );
    }
  }, [progress, data?.content.length]);
  return (
    <div
      style={{
        backgroundColor: mainColors.cardBg,
        width: '826px',
        marginBottom: '100px',
        // height: '465.8px',
      }}
      className=" rounded-md mt-48 p-5 mx-32 "
    >
      <TimeStart timer={timer} raceTimer={raceTimer} />
      <div className="flex items-center justify-between ">
        <ProgressBar text={data?.content} />
        <WpmPanel
          typedWords={typedWords}
          raceTimer={raceTimer}
          userInput={userInput}
        />
      </div>
      {raceTimer !== 0 && (
        <div>
          <TypingText text={data?.content} userInput={userInput} />
          {timer === 0 && (
            <InputFiled
              onInputChange={handleInputChange}
              userInput={userInput}
            />
          )}
        </div>
      )}
      <div className="flex ">
        <CardButton
          buttonColor={mainColors.leaveButton}
          buttonText={'Main menu (leave practice)'}
          onClick={() => navigation('/')}
          h={62.4}
        />
        <div className="ml-16">
          {raceTimer === 0 || progress === data?.content.length ? (
            <CardButton
              buttonColor={mainColors.izumrudButton}
              buttonText={'New race'}
              onClick={() => navigation('/')}
              h={62.4}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {raceTimer === 0 || progress === data?.content.length ? (
        <RaceInfo />
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default SingleRace;
