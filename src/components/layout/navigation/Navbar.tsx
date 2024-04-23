import { BsKeyboard } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { BiExit } from 'react-icons/bi';
import { mainColors } from '../../../assets/mainColors';
import logo from '../../../assets/typeracerLogo.svg';
import { useAppSelector } from '../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../../services/authApiSlice';

const Navbar = () => {
  // const { username } = useAppSelector((state) => state.auth);
  // console.log(username);
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const [logout] = useLogoutMutation();
  const navigation = useNavigate();
  // console.log(token);
  const widthOfTools = token ? '230.8px' : '330.8px';
  const handleLogout = () => {
    localStorage.clear();
    logout();
    navigation('/');
  };
  return (
    <div
      className=" flex h-16 w-full items-center justify-between "
      style={{ backgroundColor: mainColors.header }}
    >
      <div className="flex items-center mx-32">
        {/* <BsKeyboard color="white" size={30} className="mr-3" /> */}
        <img src={logo} width="45" />
        <h6>typeracer</h6>
      </div>
      <div className="flex items-center mr-32">
        <button
        onClick={()=> navigation('/profile')}
          style={{ backgroundColor: mainColors.purpleButtons }}
          className=" rounded-md mr-3"
        >
          <BiUserCircle color="white" size={45} />
        </button>
        <div style={{ width: widthOfTools }}>
          <h6>{token ? username : 'Guest'}</h6>
          <div className="flex items-center justify-between ">
            {!token && (
              <button
                onClick={() => navigation('signup')}
                style={{
                  color: mainColors.upgrade,
                  backgroundColor: mainColors.yellowButtons,
                  width: '103.1px',
                  height: '19px',
                  fontSize: '12px',
                }}
                className=" rounded-md font-bold"
              >
                Sign up or sign in
              </button>
            )}
            <button
              style={{
                backgroundColor: mainColors.purpleButtons,
                width: '103.1px',
                height: '19px',
                fontSize: '12px',
              }}
              className="text-white rounded-md font-bold"
            >
              {token ? 'Future WPM' : '0 WPM'}
            </button>
            <button
              style={{
                backgroundColor: mainColors.purpleButtons,
                width: '103.1px',
                height: '19px',
                fontSize: '12px',
              }}
              className="text-white rounded-md font-bold"
            >
              {token ? 'Future Races' : '0 Races'}
            </button>
            {/* <button
              style={{
                backgroundColor: mainColors.purpleButtons,
              }}
              className="rounded-md"
            >
              <CiSettings color="white" size={'19px'} />
            </button> */}
            {token && (
              <button
                style={{
                  backgroundColor: mainColors.purpleButtons,
                }}
                className="rounded-md"
                onClick={handleLogout}
              >
                <BiExit color="white" size={'19px'} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
