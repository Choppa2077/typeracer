import { useNavigate } from 'react-router-dom';
import { mainColors } from '../../assets/mainColors';
import CardButton from '../buttons/CardButton';
import { BsCheck, BsClock, BsKeyboard } from 'react-icons/bs';
import { useStartSingleRaceMutation } from '../../services/startSingleApiSlice';
import { FC } from 'react';
// import { useGetEndDataQuery } from '../../services/singleRaceApi';

interface RaceInfoProps {
  endWpm: number;
  endAccuracy: number;
  endDuration: number;
}

const RaceInfo: FC<RaceInfoProps> = ({endWpm, endAccuracy, endDuration}) => {
  // const { data, error, isLoading } = useGetEndDataQuery();
  const [startSingleRace, {data, isLoading}] = useStartSingleRaceMutation()
  const navigation = useNavigate();
  if (isLoading) {
    console.log('load');
  }
  // console.log(data?.id);

  return (
    <div>
      <div
        style={{ backgroundColor: mainColors.fromWhere }}
        className=" rounded-t-lg p-2"
      >
        <p>You just typed a quote from the book:</p>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <p>The Omnivore's Dilemma: A Natural History of Four Meals</p>
            <p style={{ color: mainColors.purpleText }}>by Michael Pollan</p>
          </div>
          <div className="flex justify-between">
            <CardButton
              buttonColor={mainColors.yellowButtons}
              buttonText={'Try again'}
              onClick={() => navigation('/')}
              h={43.2}
            />
            <div className="ml-2">
              <CardButton
                buttonColor={mainColors.yellowButtons}
                buttonText={'Save'}
                onClick={() => navigation('/')}
                h={43.2}
              />
            </div>
          </div>
        </div>
        <div style={{ width: '300px' }}>
          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="bg-white w-9 h-9  rounded-full items-center flex justify-center ">
                <BsKeyboard color={mainColors.iconColor} size={20} />
              </div>
              <p className="ml-3">Your speed:</p>
            </div>
            <p>{endWpm}</p>
          </div>
          <div className="flex items-center justify-between mt-4 ">
            <div className="flex">
              <div className="bg-white w-9 h-9 rounded-full  items-center flex justify-center">
                <BsClock color={mainColors.iconColor} size={20} />
              </div>
              <p className="ml-3">Accuracy:</p>
            </div>
            <p>{endAccuracy}%</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex">
              <div className="bg-white w-9 h-9 rounded-full items-center flex justify-center ">
                <BsCheck color={mainColors.iconColor} size={20} />
              </div>
              <p className="ml-3">Time:</p>
            </div>
            <p>{endDuration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceInfo;
