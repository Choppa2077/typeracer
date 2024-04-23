import { FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addErrorIndex, incrementErrorCount, resetErrors, setErrorCount, setErrorIndex, setNotCorrectTypeCount, setProgress } from '../../store/progressSlice';

interface TypingTextProps {
  text: undefined | string | null;
  userInput: string;
  notCorrectType : number;
  setNotCorrectType: (newValue: number) => void;
}

const TypingText: FC<TypingTextProps> = ({ text, userInput, notCorrectType, setNotCorrectType }) => {
  const dispatch = useAppDispatch();
  const progressRef = useRef<number>(0);
  const [errors, setErrors] = useState(0)

  let newProgress = 0;
  let previousProgress = 0;
  

  useEffect(() => {
    if (userInput) {
      let prevMistyped = false;
      for (let index = 0; index < userInput.length; index++) {
        if (text) {
          if (
            userInput[index] === text[index] &&
            userInput[index - 1] === text[index - 1]
          ) {
            newProgress += 1;
          } else if (userInput[index] !== text[index]) {
            if (!prevMistyped) {
              setNotCorrectType((prevCount: number) => prevCount + 1)
              prevMistyped = true;
            }
         
        } else {
          prevMistyped = false;
          break; // Break the loop when a mismatch is found
        }
      }
    }
  }
     
      
    
    // console.log(notCorrectType);
    
    // Save the previous progress in the ref
    previousProgress = progressRef.current;
    progressRef.current = newProgress;
    
    // Dispatch the action with the new progress and the previous progress
    dispatch(setProgress({ current: newProgress, previous: previousProgress }));
    // console.log(newProgress + ':' + previousProgress);
    // dispatch(setProgress(newProgress));
    // console.log(newProgress);
  }, [userInput]);
  // console.log(errorArr.length);
  // console.log(errorCount);
  console.log(notCorrectType);
  
  
  let coloredText: React.ReactNode;
  let mismatchOccurred = false;
  console.log(text);
  
  if (text) {
    coloredText = text?.split('').map((char: string, index: number) =>{
      const isMatch = userInput[index] === char;
      if (!isMatch) {
        mismatchOccurred = true;
      }
      return (
        <span
    
          key={index}
          style={{
            color:
              isMatch && !mismatchOccurred
                ? 'green'
                : userInput[index]
                ? 'red'
                : 'white',
          }}
        >
          {char}
        </span>
      );
    });
  }
  // if (text) {
  //   coloredText = text.split('').map((char: string, index: number) => (
  //     <span
  //       key={index}
  //       style={{
  //         color: typedWords.join('').charAt(index) === char ? 'green' : 'red',
  //       }}
  //     >
  //       {char}
  //     </span>
  //   ));
  // }

  return <div>{coloredText}</div>;
};

export default TypingText;
