import { mainColors } from '../../assets/mainColors';
import ProgressBar from '../../components/racetrack/ProgressBar';
import TimeStart from '../../components/racetrack/TimeStart';
import WpmPanel from '../../components/racetrack/WpmPanel';
import TypingText from '../../components/racetrack/TypingText';
import CardButton from '../../components/buttons/CardButton';
import { useNavigate } from 'react-router-dom';
import InputFiled from '../../components/racetrack/InputFiled';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import RaceInfo from '../../components/racetrack/RaceInfo';
import {
  useCurrentSingleRaceMutation,
  useEndSingleRaceMutation,
  useStartSingleRaceMutation,
} from '../../services/startSingleApiSlice';
const SingleRace = () => {
  const navigation = useNavigate();
  const { progress } = useAppSelector((state) => state.race);
  const [timer, setTimer] = useState(3);
  const [raceTimer, setRaceTimer] = useState(100);
  const [userInput, setUserInput] = useState('');
  const [wpm, setWpm] = useState<number | null>(null);
  // const { data } = useGetRaceDataQuery();
  const racerId = '11111111-1111-1111-1111-111111111111';
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [startSingleRace, { data }] = useStartSingleRaceMutation();
  const [wpmEndRace, setWpmEndRace] = useState(0);
  const [accuracyEndRace, setAccuracyEndRace] = useState(0);
  const [durationEndRace, setDurationEndRace] = useState(0);

  const handleInputChange = (inputValue: string) => {
    setUserInput(inputValue);
    const word = inputValue.split(' ');
    setTypedWords(word);
  };
  const [currentSingleRace] = useCurrentSingleRaceMutation();
  const [endSingleRace] = useEndSingleRaceMutation();
  const [notCorrectType, setNotCorrectType] = useState(0);

  // const duration
  const [stopwatchTime, setStopwatchTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (data) {
        if (raceTimer > 0 && progress < data?.text.content.length) {
          setStopwatchTime((prevTime) => prevTime + 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress, data?.text.content.length]);
  // Log every second of the stopwatch
  // useEffect(() => {
  //   console.log(`Stopwatch: ${stopwatchTime}`);
  // }, []);

  useEffect(() => {
    startSingleRace();
  }, []);

  useEffect(() => {
    if (progress > 0) {
      currentSingleRace({
        index: progress,
        duration: stopwatchTime,
      })
        .unwrap()
        .then((payload) => {
          console.log(payload);
          setWpm(payload.wpm); // Extract the wpm value from the payload
        })
        .catch((error) => {
          console.error('Error fetching payload:', error);
        });
    }
  }, [progress, stopwatchTime]);
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
          //maybe here end race
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
    if (progress === data?.text.content.length) {
      setRaceTimer(0);
      // return () => clearInterval(interval);
      console.log(
        'Progress:' +
          progress +
          ', ' +
          'Text length: ' +
          data?.text.content.length,
      );
    }
  }, [progress, data?.text.content.length]);
  useEffect(() => {
    if (raceTimer === 0 || progress === data?.text?.content.length) {
      endSingleRace({
        errors: notCorrectType,
        duration: stopwatchTime,
        length: data?.text?.content.length,
      })
        .unwrap()
        .then((payload) => {
          console.log(payload);
          setWpmEndRace(payload.wpm);
          setAccuracyEndRace(payload.accuracy);
          setDurationEndRace(payload.duration);
        })
        .catch((error) => {
          console.error('Error fetching payload:', error);
        });
    }
  }, [raceTimer === 0 || progress === data?.text?.content.length]);

  // if(progress === data?.text?.length){
  //   useEndSingleRaceMutation({
  //     errors: errros,
  //     duration:stopwatchTime
  //   })
  // }
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
        <ProgressBar text={data?.text.content} />
        <WpmPanel wpm={wpm} />
      </div>
      {raceTimer !== 0 && (
        <div>
          <TypingText
            text={data?.text.content}
            userInput={userInput}
            notCorrectType={notCorrectType}
            setNotCorrectType={setNotCorrectType}
          />
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
          {raceTimer === 0 || progress === data?.text.content.length ? (
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
      {raceTimer === 0 || progress === data?.text.content.length ? (
        <RaceInfo
          endWpm={wpmEndRace}
          endAccuracy={accuracyEndRace}
          endDuration={durationEndRace}
        />
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default SingleRace;
