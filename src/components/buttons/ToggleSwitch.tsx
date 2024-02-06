import{ useState } from 'react';


const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };


  return (
    <div className="flex items-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div
            className={`${
                isChecked ? 'bg-purple-500' : 'bg-gray-200'
              } w-8 h-4 rounded-full shadow-inner `}
          ></div>
          <div
            className={`${
              isChecked ? 'bg-green-500' : 'bg-gray-200'
            } absolute left-0 top-0 w-4 h-4 rounded-full transform transition-transform translate-x-0 ${
              isChecked ? 'translate-x-full' : 'translate-x-0'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
