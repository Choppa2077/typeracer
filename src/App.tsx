import MainPage from './pages/main/MainPage';
import { Route, Routes } from 'react-router-dom';
import SingleRace from './pages/singleRace/SingleRace';
import FriendsRace from './pages/friendsRace/FriendsRace';
import bgtyperacer from './assets/banner-dark.svg';
import SignUp from './pages/Login/SignUp';
import Layout from './components/layout/Layout';
import RequireAuth from './store/authentication/RequireAuth';
import ProfilePage from './pages/profile/ProfilePage';
import Login from './pages/Login/Login';
function App() {
  return (
    <div
      className="relative "
      style={{ background: `url(${bgtyperacer}) no-repeat`, height: '1200px' }}
    >
      {/* <div
        className=" absolute w-full h-full"
        style={{ backgroundImage: bgtyperacer }}
      >
        <img
          src={bgtyperacer}
          style={{ backgroundColor: mainColors.purpleButtons }}
        />
      </div> */}

      <Routes>
        <Route path="/" element={<Layout />}>

          {/* public routes */}
          <Route index element={<MainPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="friendsrace/:id" element={<FriendsRace />} />
          <Route path="practice/:id" element={<SingleRace />} />
          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="profile/:id" element={<ProfilePage />} />
          </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
