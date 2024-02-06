import { BsKeyboard } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { BiExit } from 'react-icons/bi';
import { mainColors } from '../../../assets/mainColors';
import logo from '../../../assets/typeracerLogo.svg';

const Navbar = () => {
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
          style={{ backgroundColor: mainColors.purpleButtons }}
          className=" rounded-md mr-3"
        >
          <BiUserCircle color="white" size={45} />
        </button>
        <div style={{ width: '370.8px' }}>
          <h6>Mukan (mukan2099)</h6>
          <div className="flex items-center justify-between ">
            <button
              style={{
                color: mainColors .upgrade,
                backgroundColor: mainColors.yellowButtons,
                width: '103.1px',
                height: '19px',
                fontSize: '12px',
              }}
              className=" rounded-md font-bold"
            >
              UPGRADE
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
              42 WPM
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
              50 Races
            </button>
            <button
              style={{
                backgroundColor: mainColors.purpleButtons,
              }}
              className="rounded-md"
            >
              <CiSettings color="white" size={'19px'} />
            </button>
            <button
              style={{
                backgroundColor: mainColors.purpleButtons,
              }}
              className="rounded-md"
            >
              <BiExit color="white" size={'19px'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
