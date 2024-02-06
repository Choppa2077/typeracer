import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/navigation/Navbar';
import RaceCard from '../../components/layout/raceCards/RaceCard';
import { mainColors } from '../../assets/mainColors';
import carSingle from '../../assets/singleCar.svg';
import carFriends from '../../assets/f1Car.svg';
import PremiumUnlock from '../../components/layout/premium/PremiumUnlock';

const MainPage = () => {
  const user = {
    id: 1,
  };
  const race = {
    id: 1,
  };
  const navigation = useNavigate();

  return (
    <div>
      
      <div className="mt-10  mx-32">
        <PremiumUnlock onClick={() => navigation(`/premium/${user.id}`)} />
        <RaceCard
          title="Race your friends"
          body="Create your own racetrack and play with friends"
          onClick={() => navigation(`/practice/${user.id}`)}
          buttonColor={mainColors.orangeButtons}
          buttonText="Create Racetrack"
          car={carFriends}
        />
        <RaceCard
          title="Typing Test"
          body="Improve your typing skills on your own"
          onClick={() => navigation(`/practice/${race.id}`)}
          buttonColor={mainColors.blueButtons}
          buttonText="Practice Yourself"
          car={carSingle}
        />
      </div>
    </div>
  );
};

export default MainPage;
