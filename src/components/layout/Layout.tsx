import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { mainColors } from '../../assets/mainColors';
import Footer from './footer/Footer';
import Navbar from './navigation/Navbar';

const Layout: React.FC = () => {
  const [theme, setTheme] = useState('dark'); // Initial theme, you can set it to 'white' if you want

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'white' : 'dark'));
    document.documentElement.style.setProperty(
      '--background-color',
      theme === 'dark' ? mainColors.whiteBg : mainColors.darkBg,
    );
  };
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer onChangeTheme={changeTheme} />
    </>
  );
};

export default Layout;
