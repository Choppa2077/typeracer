import MainPage from './pages/main/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleRace from './pages/singleRace/SingleRace';
import FriendsRace from './pages/friendsRace/FriendsRace';
import Navbar from './components/layout/navigation/Navbar';
import bgtyperacer from './assets/banner-dark.svg';
import Footer from './components/layout/footer/Footer';
import { useState } from 'react';
import { mainColors } from './assets/mainColors';
function App() {
  const [theme, setTheme] = useState('dark'); // Initial theme, you can set it to 'white' if you want

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'white' : 'dark'));
    document.documentElement.style.setProperty(
      '--background-color',
      theme === 'dark' ? mainColors.whiteBg : mainColors.darkBg,
    );
  };
  return (
    <div
      className="relative"
      style={{ background: `url(${bgtyperacer}) no-repeat`, height: '1200px' }}
    >
      <Navbar />
      {/* <div
        className=" absolute w-full h-full"
        style={{ backgroundImage: bgtyperacer }}
      >
        <img
          src={bgtyperacer}
          style={{ backgroundColor: mainColors.purpleButtons }}
        />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/friendsrace/:id" element={<FriendsRace />} />
          <Route path="/practice/:id" element={<SingleRace />} />
        </Routes>
      </BrowserRouter>
      <Footer onChangeTheme={changeTheme} />
    </div>
  );
}

export default App;
