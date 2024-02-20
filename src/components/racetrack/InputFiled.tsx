import React, { useRef, useEffect } from 'react';
import { mainColors } from '../../assets/mainColors';
// import { setUserInput } from '../../store/progressSlice';

// interface InputField{
//   onInputChange: (value:string) =>(),
//   userInput:string,
//   setUserInput
// }

const InputField = ({ onInputChange, userInput }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    // Set focus on the input element when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // const separatedToWords = () => {
  //   userInput = userInput.split(' ');
  //   for (let i = 0; i < userInput.length; i++) {
  //     if (i < i+2) {
  //       setUserInput('');
  //     }
  //   }
  //   console.log(userInput);
  // };
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ClipboardEvent<HTMLInputElement>,
  ) => {
    const inputValue = (e.target as HTMLInputElement).value;
    onInputChange(inputValue);
    e.preventDefault();
  };
  return (
    <div>
      <input
        ref={inputRef}
        autoFocus
        type="text"
        value={userInput}
        onChange={handleInputChange}
        onPaste={handleInputChange}
        onCut={handleInputChange}
        onCopy={handleInputChange}
        style={{ backgroundColor: mainColors.header, color: 'white' }}
        className="w-full p-1 my-5"
      />
    </div>
  );
};

export default InputField;
