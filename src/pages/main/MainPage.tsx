import { useNavigate } from 'react-router-dom';
import RaceCard from '../../components/layout/raceCards/RaceCard';
import { mainColors } from '../../assets/mainColors';
import carSingle from '../../assets/singleCar.svg';
import carFriends from '../../assets/f1Car.svg';
import PremiumUnlock from '../../components/layout/premium/PremiumUnlock';
import { StartSingleRaceResponse, useStartSingleRaceMutation } from '../../services/startSingleApiSlice';
import { useAppSelector } from '../../store/hooks';

const MainPage = () => {
 

  const navigation = useNavigate();

  const [startSingleRace] = useStartSingleRaceMutation();
  const accessToken = useAppSelector((state) => state.auth.token);

  const startAndNavigate = async () => {
    // if (accessToken) {
    //   const response = await startSingleRace({ accessToken });
    //   if('data' in response){
    //     const {content, length, text_author, contributor_name, racer_name, avatar, id} = response.data as StartSingleRaceResponse
    //   }
    // }
    navigation(`/practice/${accessToken}`);
  };

  return (
    <div>
      <div className="mt-10  mx-32">
        <PremiumUnlock onClick={() => navigation(`/premium/${accessToken}`)} />
        <RaceCard
          title="Race your friends"
          body="Create your own racetrack and play with friends"
          onClick={() => navigation(`/friendsrace`)}
          buttonColor={mainColors.orangeButtons}
          buttonText="Create Racetrack"
          car={carFriends}
        />
        <RaceCard
          title="Typing Test"
          body="Improve your typing skills on your own"
          onClick={startAndNavigate}
          buttonColor={mainColors.blueButtons}
          buttonText="Practice Yourself"
          car={carSingle}
        />
      </div>
    </div>
  );
};

export default MainPage;
