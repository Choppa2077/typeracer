import { FC, useEffect, useRef } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setProgress } from '../../store/progressSlice';

interface TypingTextProps {
  text: undefined | string;
  userInput: string;
}

const TypingText: FC<TypingTextProps> = ({ text, userInput }) => {
  const dispatch = useAppDispatch();
  const progressRef = useRef<number>(0);

  let notCorrectType = 0;
  let newProgress = 0;
  let previousProgress = 0;
  useEffect(() => {
    if (userInput) {
      for (let index = 0; index < userInput.length; index++) {
        if (text) {
          if (
            userInput[index] === text[index] &&
            userInput[index - 1] === text[index - 1]
          ) {
            newProgress += 1;
          } else if (userInput[index] !== text[index]) {
            notCorrectType++;
          } else {
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
  }, [text, userInput, dispatch]);

  let coloredText: React.ReactNode;
  let mismatchOccurred = false;

  if (text) {
    coloredText = text.split('').map((char: string, index: number) => {
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
